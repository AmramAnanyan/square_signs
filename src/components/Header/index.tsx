import { Layers, Lightbulb } from 'lucide-react';
import { Button } from '../Button';
import SubHeader from '../SubHeader';

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary " />
          <h1 className="text-2xl font-semibold">Interactive Canvas</h1>
        </div>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <Button variant="ghost">2D Editor</Button>
          <Button variant="ghost">2D Game</Button>
          <Button variant="ghost">3D Viewer</Button>
          <Button variant="outline" className="bg-background backdrop-blur-sm ">
            <Lightbulb className="h-4 w-4 mr-2 text-primary" />
            <a
              href="https://github.com/AmramAnanyan"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
      </div>
      <SubHeader
        logo=" High-Performance 2D Canvas Application"
        title="Interactive 2D Visualization"
        description="A high-performance canvas application for creating and editing
        interactive visualizations with optimized rendering and efficient event
        handling."
      />
    </header>
  );
};

export default Header;
