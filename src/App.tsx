import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Canvas2DEditor from './pages/2DCanvasEditor';
import Game2D from './pages/2DGame';
import Viewer3D from './pages/3DViewer';
import CircleLoader from './components/Loader/CircleLoader';
const App = () => {
  return (
    <div>
      <Header />
      <Canvas2DEditor />
      <Game2D />
      <Viewer3D />
      <Footer />
    </div>
  );
};

export default App;
