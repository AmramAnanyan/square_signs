import { useEffect, useRef, useState } from 'react';
import { Circle, Canvas as FabricCanvas, Rect } from 'fabric';
import CanvasCore from '../../components/Canvas/CanvasCore';
import { Button } from '../../components/Button';
import {
  ArrowBigLeft,
  ArrowBigRight,
  Play,
  StopCircleIcon,
} from 'lucide-react';
import { addCircle, addRectangle } from '../../utils/canvashelpers/drawHelpers';
import useBallAnimation from '../../utils/hooks/useBallAnimation';

const PlayGame = () => {
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [paddle, setPaddle] = useState<Rect | null | undefined>(null);
  const [ball, setBall] = useState<Circle | null | undefined>(null);
  const { isStopped } = useBallAnimation(ball, paddle, canvas);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: 1220,
        height: 650,
      });
      initCanvas.backgroundColor = '#000';
      initCanvas.renderAll();
      setCanvas(initCanvas);
      return () => {
        initCanvas.dispose();
      };
    }
  }, []);
  const handleStop = () => {
    setIsPlaying(false);
    if (!paddle || !ball) return;
    canvas?.remove(paddle, ball);
  };
  useEffect(() => {
    if (isStopped) {
      handleStop();
      alert('You are loose');
    }
    //eslint-disable-next-line
  }, [isStopped]);
  const handlePlay = () => {
    if (!canvas) return;
    setIsPlaying(true);
    const rect = addRectangle(canvas, {
      width: 280,
      height: 60,
      top: canvas?.getHeight() - 60,
      left: canvas?.getWidth() / 2 - 280 / 2,
      fill: '#864AF9',
      selectable: false,
    });
    setPaddle(rect);
    const ball = addCircle(canvas, {
      radius: 24,
      top: 0,
      left: canvas?.getWidth() / 2 - 24 / 2,
      fill: '#F8E559',
      selectable: false,
    });
    setBall(ball);
  };
  const handlePaddleLeft = () => {
    if (!paddle) return;
    if (paddle.left >= 0) {
      paddle.left -= 100;
    }
  };
  const handlePaddleRight = () => {
    if (!paddle) return;
    if (!canvas || !paddle) return;
    if (paddle.left <= canvas.width / 2 + paddle.width) {
      paddle.left += 100;
    }
  };
  return (
    <>
      <div className="flex flex-row gap-4 w-full">
        <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in w-16 bg-slate-900"></div>
        <CanvasCore canvas={canvas} canvasRef={canvasRef} />
        <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in w-16 bg-slate-900"></div>
      </div>
      <div className="glass-panel  p-4 flex flex-col my-3 items-center gap-3 animate-fade-in w-full bg-slate-900">
        <div className="flex gap-3">
          <Button
            variant="default"
            className="bg-slate-50 text-lg"
            onClick={handlePaddleLeft}
          >
            <ArrowBigLeft className="!w-6 !h-6" />
          </Button>
          {!isPlaying && (
            <Button
              variant="destructive"
              className="bg-slate-50 transition-all"
              onClick={handlePlay}
            >
              <Play className="!w-6 !h-6" />
            </Button>
          )}
          {isPlaying && (
            <Button
              variant="destructive"
              className="bg-slate-50 transition-all"
              onClick={handleStop}
            >
              <StopCircleIcon className="!w-6 !h-6" />
            </Button>
          )}
          <Button
            variant="default"
            className="bg-slate-50"
            onClick={handlePaddleRight}
          >
            <ArrowBigRight className="!w-6 !h-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default PlayGame;
