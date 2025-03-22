import { ColorPicker } from '../../components/CollortPicker';
import {
  CanvasTool,
  COLOR_OPTIONS,
  DownloadTypes,
} from '../../constants/toolbarConstants';
import CanvasCore from '../../components/Canvas/CanvasCore';
import CanvasToolbar from '../../components/Canvas/CanvasToolbar';
import CanvasHeader from '../../components/Canvas/CanvasHeader';
import ZoomControls from '../../components/Canvas/ZoomContorol';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import {
  addCircle,
  addRectangle,
  addTextbox,
  clearCanvas,
} from '../../utils/canvashelpers/drawHelpers';
import DynamicModal from '../../components/Modal';
import { useUpdateSettingsModalPosition } from '../../utils/hooks/useUpdateSettingsModalPossition';
import ShapeSettings from '../../components/ShapesSettings';
import {
  ALLOWED_SHAPES,
  AllowedShapes,
} from '../../components/ShapesSettings/constants';
import { useAddImage } from '../../utils/hooks/useAddImage';
import useAddSvg from '../../utils/hooks/useAddSvg';
import {
  downloadJPEG,
  downloadPNG,
  downloadWebp,
} from '../../utils/helpers/global';

const Canvas2DEditing = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const [activeTool, setActiveTool] = useState(CanvasTool.SELECT);
  const [activeColor, setActiveColor] = useState(0);
  const undoStack = useRef<any[]>([]);
  const redoStack = useRef<any[]>([]);
  const canvasRef = useRef(null);
  const [redoIndex, setRedoIndex] = useState(1);
  const imageFileRef = useRef<null | HTMLInputElement>(null);
  const [fileState, setFileState] = useState<File | null>(null);
  const svgFileRef = useRef<null | HTMLInputElement>(null);
  const [svgFileState, setSvgFileState] = useState<File | null>(null);
  useAddImage(canvas, fileState);
  useAddSvg(canvas, svgFileState);
  const {
    isOpen: isModalOpen,
    position: modalPosition,
    activeShape,
  } = useUpdateSettingsModalPosition(canvas);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: 1220,
        height: 650,
      });
      initCanvas.backgroundColor = '#fff';
      initCanvas.renderAll();
      setCanvas(initCanvas);
      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const handleToolClick = (tool: CanvasTool) => {
    undoStack.current.push(canvas?.toJSON());
    redoStack.current.push(canvas?.toJSON());
    setActiveTool(tool);
    switch (tool) {
      case CanvasTool.SELECT:
        break;
      case CanvasTool.DRAW:
        break;
      case CanvasTool.RECTANGLE:
        addRectangle(canvas, {
          top: 100,
          left: 200,
          fill: COLOR_OPTIONS[activeColor],
        });
        break;
      case CanvasTool.CIRCLE:
        addCircle(canvas, {
          fill: COLOR_OPTIONS[activeColor],
          top: 105,
          left: 100,
        });
        break;
      case CanvasTool.TEXT:
        addTextbox(canvas, { fill: COLOR_OPTIONS[activeColor] });
        break;
      case CanvasTool.IMAGE:
        if (imageFileRef.current) {
          imageFileRef.current.click();
          imageFileRef.current.addEventListener('change', (e) => {
            //@ts-ignore
            setFileState(e.target.files[0]);
          });
        }
        break;
      case CanvasTool.SVG:
        if (svgFileRef.current) {
          svgFileRef.current.click();
          svgFileRef.current.addEventListener('change', (e) => {
            //@ts-ignore
            setSvgFileState(e.target.files[0]);
          });
        }
        break;
      default:
        break;
    }
  };
  const handleColorChange = (index: number) => {
    setActiveColor(index);
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    activeObject?.set({ fill: COLOR_OPTIONS[index] });
    canvas.renderAll();
  };
  const undo = () => {
    if (!canvas) return;
    setRedoIndex((prev) => (prev += 1));
    const deletedState = undoStack.current.pop();
    if (deletedState) {
      redoStack.current.push(deletedState);
      canvas.loadFromJSON(deletedState, () => {
        canvas.requestRenderAll();
      });
    }
  };
  const redo = () => {
    if (!canvas) return;
    if (redoStack.current.length) {
      canvas.loadFromJSON(redoStack.current[redoIndex], () => {
        canvas.requestRenderAll();
      });
    }
  };
  const handleDownload = useCallback(
    (type: DownloadTypes) => {
      switch (type) {
        case DownloadTypes.JPEG:
          downloadJPEG(canvas);
          break;
        case DownloadTypes.PNG:
          downloadPNG(canvas);
          break;
        case DownloadTypes.WEBP:
          downloadWebp(canvas);
          break;
        default:
      }
    },
    [canvas]
  );
  return (
    <>
      {ALLOWED_SHAPES[activeShape as AllowedShapes] && (
        <DynamicModal isOpen={isModalOpen} position={modalPosition}>
          <ShapeSettings
            shape={activeShape as AllowedShapes}
            onChange={({ name, value }) => {
              console.log({ name, value });
            }}
            canvas={canvas}
            activeColor={COLOR_OPTIONS[activeColor]}
          />
        </DynamicModal>
      )}
      <CanvasHeader>
        <ZoomControls
          zoomLevel={0}
          onZoomIn={function (): void {
            throw new Error('Function not implemented.');
          }}
          onZoomOut={function (): void {
            throw new Error('Function not implemented.');
          }}
          onResetView={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </CanvasHeader>
      <div className="flex flex-row gap-4 w-full">
        <CanvasToolbar
          activeTool={activeTool}
          onToolClick={handleToolClick}
          onUndo={undo}
          onRedo={redo}
          onClear={() => {
            clearCanvas(canvas);
            undoStack.current = [];
            redoStack.current = [];
          }}
          onDownload={handleDownload}
        />
        <CanvasCore
          canvas={canvas}
          canvasRef={canvasRef}
          activeTool={activeTool}
          activeColor={COLOR_OPTIONS[activeColor]}
          imageFileRef={imageFileRef}
          svgFileRef={svgFileRef}
        />
        <ColorPicker
          activeColor={COLOR_OPTIONS[activeColor]}
          colorOptions={COLOR_OPTIONS}
          onColorChange={handleColorChange}
        />
      </div>
    </>
  );
};

export default Canvas2DEditing;
