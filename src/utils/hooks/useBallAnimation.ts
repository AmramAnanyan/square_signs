import { Canvas, Circle, Rect } from 'fabric';
import { useEffect, useRef, useState } from 'react';

const useBallAnimation = (
  ball: Circle | null | undefined,
  paddle: Rect | null | undefined,
  canvas: Canvas | null
) => {
  const animationFrameId = useRef(0);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    if (!ball || !paddle || !canvas) return;

    const ballToTop = () => {
      ball.top = 0;
      ball.left = Math.random() * 400;
      canvas?.renderAll();
      animateBall();
    };

    const animateBall = () => {
      if (!ball || !canvas || !paddle) return;
      if (ball.top > canvas.height) {
        cancelAnimationFrame(animationFrameId.current);
        setIsStopped(true);
        return;
      }
      if (
        ball.top >= paddle?.top - ball.height - 15 &&
        ball.left >= paddle.left &&
        ball.left <= paddle.left + paddle.width
      ) {
        cancelAnimationFrame(animationFrameId.current);
        ballToTop();
        return;
      }
      ball.top += 3;
      canvas?.renderAll();
      animationFrameId.current = requestAnimationFrame(animateBall);
    };

    animateBall();
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [ball, paddle, canvas]);

  return { isStopped };
};

export default useBallAnimation;
