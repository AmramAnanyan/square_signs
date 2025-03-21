import {
  Cpu,
  FileCode,
  Layers,
  Lightbulb,
  MousePointer,
  Move,
  Paintbrush,
  ZoomIn,
} from 'lucide-react';
import './App.css';
import { Button } from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto px-4 mb-16">
        <div className="mb-16">{/* <Canvas /> */}</div>

        <div className="text-center mb-16 max-w-3xl mx-auto ">
          <h3 className="text-2xl font-semibold mb-3">
            Technical Requirements
          </h3>
          <p className="text-muted-foreground mb-8">
            This application demonstrates best practices in canvas
            implementation, with a focus on performance and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Cpu />}
              title="High Performance"
              description="Optimized rendering with requestAnimationFrame and batched updates for smooth performance."
            />

            <FeatureCard
              icon={<MousePointer />}
              title="Interactive Elements"
              description="Supports hover effects, click interactions, and drag-and-drop functionality."
            />

            <FeatureCard
              icon={<FileCode />}
              title="SVG Support"
              description="Efficient handling of both raster images and vector SVGs with preserved properties."
            />

            <FeatureCard
              icon={<ZoomIn />}
              title="Zoom & Pan"
              description="Canvas can be zoomed and panned for detailed editing of complex visualizations."
            />

            <FeatureCard
              icon={<Move />}
              title="Object Manipulation"
              description="Intuitively resize, rotate, and position objects with smooth animations."
            />

            <FeatureCard
              icon={<Paintbrush />}
              title="Drawing Tools"
              description="Free-form drawing with customizable brush options for creative expression."
            />
          </div>
        </div>

        <div className="glass-panel p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Implementation Details</h3>
          <p className="text-muted-foreground mb-6">
            This application leverages Fabric.js for the canvas implementation,
            with custom optimizations for performance:
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">✓</div>
              <span>
                <strong>Efficient Rendering:</strong> Uses requestAnimationFrame
                for smooth animations and prevents unnecessary redraws.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">✓</div>
              <span>
                <strong>Event Optimization:</strong> Implements debounced event
                handlers to avoid performance degradation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">✓</div>
              <span>
                <strong>Resource Handling:</strong> Efficiently loads and
                processes both raster images and SVG vectors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">✓</div>
              <span>
                <strong>State Management:</strong> Implements undo/redo
                functionality with optimized state snapshots.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-primary mt-0.5 flex-shrink-0">✓</div>
              <span>
                <strong>Memory Usage:</strong> Carefully manages object
                lifecycle to prevent memory leaks and improve performance.
              </span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
