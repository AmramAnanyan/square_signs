import Header from './components/Header';
import Footer from './components/Footer';
import Canvas2DEditor from './pages/2DCanvasEditor';
import Game2D from './pages/2DGame';
import Viewer3D from './pages/3DViewer';
import Scrollable from './components/Scrollable';
import { SCROLL_TO } from './constants/generic';
import { ArrowUp } from 'lucide-react';
import useScrollTo from './utils/hooks/useScrollTo';

const App = () => {
  const { scrollRef, scrollToTop } = useScrollTo();
  return (
    <div className="relative">
      <Header />
      <Scrollable id={SCROLL_TO.EDITOR}>
        <Canvas2DEditor />
      </Scrollable>
      <Scrollable id={SCROLL_TO.GAME}>
        <Game2D />
      </Scrollable>
      <Scrollable id={SCROLL_TO.VIEWER}>
        <Viewer3D />
      </Scrollable>
      <div
        className="bg-slate-50 w-14 h-14 rounded-full border flex justify-center items-center cursor-pointer shadow-lg fixed bottom-20 right-3"
        onClick={scrollToTop}
      >
        <ArrowUp color="#3388ff" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
