import { ColorPicker } from '../../components/CollortPicker';
import { CanvasTool, COLOR_OPTIONS } from '../../constants/toolbarConstants';
import CanvasCore from '../../components/Canvas/CanvasCore';
import CanvasToolbar from '../../components/Canvas/CanvasToolbar';
import CanvasHeader from '../../components/Canvas/CanvasHeader';
import ZoomControls from '../../components/Canvas/ZoomContorol';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import {
  clearCanvas,
  drawGeometricFigureTools,
} from '../../utils/canvashelpers/drawHelpers';
import DynamicModal from '../../components/Modal';
import { useUpdateSettingsModalPosition } from '../../utils/hooks/useUpdateSettingsModalPossition';
import ShapeSettings from '../../entities/ShapesSettings/ui';
import { useAddImage } from '../../utils/hooks/useAddImage';
import useAddSvg from '../../utils/hooks/useAddSvg';
import { downloadCanvasAsImage } from '../../utils/helpers/global';
import { ALLOWED_SHAPES, AllowedShapes } from '../../constants/shapeSettings';

const Canvas2DEditing = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const [activeTool, setActiveTool] = useState(CanvasTool.SELECT);
  const [activeColor, setActiveColor] = useState(0);
  const undoStack = useRef<any[]>([]);
  const canvasRef = useRef(null);
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
    setActiveTool(tool);
    drawGeometricFigureTools(canvas, tool, COLOR_OPTIONS[activeColor]);
    switch (tool) {
      case CanvasTool.IMAGE:
        if (imageFileRef.current) {
          imageFileRef.current.click();
          imageFileRef.current.addEventListener('change', (e) => {
            //@ts-ignore
            setFileState(e?.target?.files?.[0]);
          });
        }
        break;
      case CanvasTool.SVG:
        if (svgFileRef.current) {
          svgFileRef.current.click();
          svgFileRef.current.addEventListener('change', (e) => {
            //@ts-ignore
            setSvgFileState(e?.target?.files?.[0]);
          });
        }
        break;
      default:
    }
  };

  const handleColorChange = useCallback(
    (index: number) => {
      setActiveColor(index);
      if (!canvas) return;
      const activeObject = canvas.getActiveObject();
      const lastObject = canvas.getObjects().slice(-1)[0];
      if (!activeObject) lastObject?.set({ fill: COLOR_OPTIONS[index] });
      activeObject?.set({ fill: COLOR_OPTIONS[index] });
      canvas.renderAll();
    },
    [canvas]
  );
  const undo = () => {
    if (!canvas) return;
    const deletedState = undoStack.current.pop();
    if (deletedState) {
      canvas.loadFromJSON(deletedState, () => {
        canvas.requestRenderAll();
      });
    }
  };

  const handleClear = useCallback(() => {
    clearCanvas(canvas);
    undoStack.current = [];
  }, [canvas]);

  return (
    <>
      {ALLOWED_SHAPES[activeShape as AllowedShapes] && (
        <DynamicModal isOpen={isModalOpen} position={modalPosition}>
          <ShapeSettings
            shape={activeShape as AllowedShapes}
            canvas={canvas}
            activeColor={COLOR_OPTIONS[activeColor]}
          />
        </DynamicModal>
      )}
      <CanvasHeader>
        <ZoomControls canvas={canvas} />
      </CanvasHeader>
      <div className="flex flex-row gap-4 w-full">
        <CanvasToolbar
          activeTool={activeTool}
          onToolClick={handleToolClick}
          onUndo={undo}
          onClear={handleClear}
          onDownload={(type) => downloadCanvasAsImage(type, canvas)}
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
