import { lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';
const Viewer3Features = lazy(() => import('../../features/Viewer3D'));
const Viewer3D = () => {
  return (
    <PageWrapper>
      <Suspense>
        <Viewer3Features />
      </Suspense>
    </PageWrapper>
  );
};

export default Viewer3D;
