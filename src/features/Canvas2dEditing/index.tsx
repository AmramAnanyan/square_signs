import { ColorPicker } from '../../components/CollortPicker';
import { CanvasTool, COLOR_OPTIONS } from '../../constants/toolbarConstants';
import CanvasCore from '../../components/Canvas/CanvasCore';
import CanvasToolbar from '../../components/Canvas/CanvasToolbar';
import CanvasHeader from '../../components/Canvas/CanvasHeader';
import ZoomControls from '../../components/Canvas/ZoomContorol';
import { useEffect, useRef, useState } from 'react';
import { Circle, Text, Canvas as FabricCanvas, Rect, Textbox } from 'fabric';

const Canvas2DEditing = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const canvasRef = useRef(null);
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
    if (tool === CanvasTool.RECTANGLE) {
      if (canvas) {
        const rect = new Rect({
          top: 100,
          left: 50,
          width: 100,
          height: 60,
          fill: '#152E51',
        });
        canvas.add(rect);
      }
    } else if (tool === CanvasTool.CIRCLE) {
      if (canvas) {
        const circle = new Circle({
          top: 100,
          left: 50,
          radius: 50,
          fill: '#152E51',
        });
        canvas.add(circle);
      }
    } else if (tool === CanvasTool.TEXT) {
      if (canvas) {
        const text = new Textbox('Edit Me', {
          top: 200,
          left: 50,
          fill: 'black',
          fontFamily: 'Inter, sans-serif',
          fontSize: 24,
          cornerSize: 12,
          transparentCorners: false,
        });
        canvas.add(text);
      }
    }
  };
  return (
    <>
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
          activeTool={CanvasTool.SELECT}
          isPanMode={false}
          canUndo={false}
          canRedo={false}
          onToolClick={handleToolClick}
          onPanModeToggle={function (): void {
            throw new Error('Function not implemented.');
          }}
          onUndo={function (): void {
            throw new Error('Function not implemented.');
          }}
          onRedo={function (): void {
            throw new Error('Function not implemented.');
          }}
          onClear={function (): void {
            throw new Error('Function not implemented.');
          }}
          onDownload={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <CanvasCore
          canvas={canvas}
          canvasRef={canvasRef}
          canvasContainerRef={undefined}
          activeTool={CanvasTool.SELECT}
          activeColor={''}
          isPanMode={false}
          fileInputRef={undefined}
        />
        <ColorPicker
          activeColor={''}
          colorOptions={COLOR_OPTIONS}
          onColorChange={function (color: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </>
  );
};

export default Canvas2DEditing;
