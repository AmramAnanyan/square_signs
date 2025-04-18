import { forwardRef, lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';
import SubHeader from '../../components/SubHeader';
import CircleLoader from '../../components/Loader/CircleLoader';
const PlayGame = lazy(() => import('../../features/PlayGame'));
const Game2D = forwardRef(() => {
  return (
    <PageWrapper>
      <SubHeader
        logo="Ball Catch Game 2D Canvas"
        title="Catch the Falling Ball!"
        description="A fun and interactive 2D game where you move the paddle to catch falling balls. Built with Fabric.js and optimized for smooth performance using requestAnimationFrame."
      />
      <Suspense fallback={<CircleLoader size={10} className="m-auto" />}>
        <PlayGame />
      </Suspense>
    </PageWrapper>
  );
});

export default Game2D;
