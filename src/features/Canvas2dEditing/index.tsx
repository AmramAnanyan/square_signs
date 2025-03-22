import { ColorPicker } from '../../components/CollortPicker';
import { CanvasTool, COLOR_OPTIONS } from '../../constants/toolbarConstants';
import CanvasCore from '../../components/Canvas/CanvasCore';
import CanvasToolbar from '../../components/Canvas/CanvasToolbar';
import CanvasHeader from '../../components/Canvas/CanvasHeader';
import ZoomControls from '../../components/Canvas/ZoomContorol';
import { useEffect, useRef, useState } from 'react';
import { Circle, Text, Canvas as FabricCanvas, Rect, Textbox } from 'fabric';
import {
  addCircle,
  addRectangle,
  addTextbox,
  clearCanvas,
  useAddImage,
} from '../../utils/canvashelpers/drawHelpers';
import DynamicModal from '../../components/Modal';
import { useUpdateSettingsModalPosition } from '../../utils/hooks/useUpdateSettingsModalPossition';
import ShapeSettings from '../../components/ShapesSettings';
import {
  ALLOWED_SHAPES,
  AllowedShapes,
} from '../../components/ShapesSettings/constants';

const Canvas2DEditing = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const [activeTool, setActiveTool] = useState(CanvasTool.SELECT);
  const [activeColor, setActiveColor] = useState(0);
  const undoStack = useRef<any[]>([]);
  const redoStack = useRef<any[]>([]);
  const canvasRef = useRef(null);
  const [redoIndex, setRedoIndex] = useState(1);
  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const [fileState, setFileState] = useState<File | null>(null);
  useAddImage(canvas, fileState);
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
        if (fileInputRef.current) {
          fileInputRef.current.click();
          fileInputRef.current.addEventListener('change', (e) => {
            //@ts-ignore
            setFileState(e.target.files[0]);
          });
        }
        break;
      case CanvasTool.PAN:
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
          isPanMode={false}
          onToolClick={handleToolClick}
          onPanModeToggle={function (): void {
            throw new Error('Function not implemented.');
          }}
          onUndo={undo}
          onRedo={redo}
          onClear={() => {
            clearCanvas(canvas);
            undoStack.current = [];
            redoStack.current = [];
          }}
          onDownload={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <CanvasCore
          canvas={canvas}
          canvasRef={canvasRef}
          canvasContainerRef={undefined}
          activeTool={activeTool}
          activeColor={COLOR_OPTIONS[activeColor]}
          isPanMode={false}
          fileInputRef={fileInputRef}
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
