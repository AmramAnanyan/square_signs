import { Layers, Lightbulb } from 'lucide-react';
import { Button } from '../Button';

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary " />
          <h1 className="text-2xl font-semibold">Interactive Canvas</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Documentation</Button>
          <Button variant="ghost">GitHub</Button>
          <Button variant="outline" className="bg-background backdrop-blur-sm ">
            <Lightbulb className="h-4 w-4 mr-2 text-primary" />
            Explore
          </Button>
        </div>
      </div>

      <div className="text-center mb-10 animate-fade-in">
        <div className="mb-4">
          <span className="mb-4 text-primary bg-primary/5 border border-primary rounded-xl px-3 py-1 text-sm font-semibold">
            High-Performance 2D Canvas Application
          </span>
        </div>

        <h2 className="text-4xl font-bold mb-3 tracking-tight">
          Interactive 2D Visualization
        </h2>
        <p className="text-lg text-foreground/10 max-w-2xl mx-auto">
          A high-performance canvas application for creating and editing
          interactive visualizations with optimized rendering and efficient
          event handling.
        </p>
      </div>
    </header>
  );
};

export default Header;
