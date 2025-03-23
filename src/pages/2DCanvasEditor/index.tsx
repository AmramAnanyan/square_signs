import { lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';
import CircleLoader from '../../components/Loader/CircleLoader';
const Canvas2DEditing = lazy(() => import('../../features/Canvas2dEditing'));
const Canvas2DEditor = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<CircleLoader size={10} className="m-auto" />}>
        <Canvas2DEditing />
      </Suspense>
    </PageWrapper>
  );
};

export default Canvas2DEditor;
