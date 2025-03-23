import { lazy, Suspense } from 'react';
import PageWrapper from '../../components/PageWrapper';
import CircleLoader from '../../components/Loader/CircleLoader';
const Viewer3Features = lazy(() => import('../../features/Viewer3D'));
const Viewer3D = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<CircleLoader size={10} className="m-auto" />}>
        <Viewer3Features />
      </Suspense>
    </PageWrapper>
  );
};

export default Viewer3D;
