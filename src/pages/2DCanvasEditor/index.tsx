import { lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';

const Canvas2DEditing = lazy(() => import('../../features/Canvas2dEditing'));
const Canvas2DEditor = () => {
  return (
    <PageWrapper>
      <Suspense>
        <Canvas2DEditing />
      </Suspense>
    </PageWrapper>
  );
};

export default Canvas2DEditor;
