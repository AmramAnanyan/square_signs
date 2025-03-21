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
} from '../../utils/canvashelpers/drawHelpers';
import { Button } from '../../components/Button';
import DynamicModal from '../../components/Modal';
import Input from '../../components/Input';

const Canvas2DEditing = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const [activeTool, setActiveTool] = useState(CanvasTool.SELECT);
  const [activeColor, setActiveColor] = useState(0);
  const undoStack = useRef<any[]>([]);
  const redoStack = useRef<any[]>([]);
  const canvasRef = useRef(null);
  const [redoIndex, setRedoIndex] = useState(1);

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!canvas) return;

    const updateModalPosition = (event: any) => {
      const obj = event.target || event.selected?.[0];
      if (!obj) return;

      const boundingBox = obj.getBoundingRect();
      const canvasRect = canvas.upperCanvasEl.getBoundingClientRect();

      setModalPosition({
        top: canvasRect.top + boundingBox.top,
        left: canvasRect.left + boundingBox.left + boundingBox.width,
      });

      setIsModalOpen(true);
    };

    canvas.on('selection:created', updateModalPosition);
    canvas.on('selection:updated', updateModalPosition);
    canvas.on('object:modified', updateModalPosition);

    canvas.on('selection:cleared', () => {
      setIsModalOpen(false);
    });

    return () => {
      canvas.off('selection:created', updateModalPosition);
      canvas.off('selection:updated', updateModalPosition);
      canvas.off('selection:cleared');
    };
  }, [canvas]);

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
    console.log(tool, 'tool');
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
          width: 100,
          height: 100,
        });
        break;
      case CanvasTool.CIRCLE:
        addCircle(canvas, {
          fill: COLOR_OPTIONS[activeColor],
          radius: 50,
          top: 105,
          left: 100,
        });
        break;
      case CanvasTool.TEXT:
        addTextbox(canvas, { fill: COLOR_OPTIONS[activeColor] });
        break;
      case CanvasTool.IMAGE:
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
      console.log(redoIndex, 'redoindex');
      console.log(redoStack.current, 'redo stack');
      canvas.loadFromJSON(redoStack.current[redoIndex], () => {
        canvas.requestRenderAll();
      });
    }
  };
  return (
    <>
      <DynamicModal isOpen={isModalOpen} position={modalPosition}>
        <Input id="Width" label="Width" />
        <Input id="Height" label="Height" />
        <Input id="color" label="Color" type="color" />
      </DynamicModal>
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
          onClear={() => clearCanvas(canvas)}
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
          fileInputRef={undefined}
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
