import { lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';
import SubHeader from '../../components/SubHeader';
const PlayGame = lazy(() => import('../../features/PlayGame'));
const Game2D = () => {
  return (
    <PageWrapper>
      <SubHeader
        logo="Ball Catch Game 2D Canvas"
        title="Catch the Falling Ball!"
        description="A fun and interactive 2D game where you move the paddle to catch falling balls. Built with Fabric.js and optimized for smooth performance using requestAnimationFrame."
      />
      <Suspense>
        <PlayGame />
      </Suspense>
    </PageWrapper>
  );
};

export default Game2D;
