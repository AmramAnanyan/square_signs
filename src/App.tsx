import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Canvas2DEditor from './pages/2DCanvasEditor';
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="glass-panel p-6 flex flex-col items-center text-center hover:scale-105 transition-all">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Canvas2DEditor />
      <Footer />
    </div>
  );
};

export default App;
