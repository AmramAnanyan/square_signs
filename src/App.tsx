import Header from './components/Header';
import Footer from './components/Footer';
import Canvas2DEditor from './pages/2DCanvasEditor';
import Game2D from './pages/2DGame';
import Viewer3D from './pages/3DViewer';
import Scrollable from './components/Scrollable';
import { SCROLL_TO } from './constants/generic';
import ScrollTopButton from './components/ScrollTopButton';

const App = () => {
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
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default App;
