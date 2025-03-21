import { Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 px-4 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Layers className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted">
            Interactive Canvas Demo © 2025
          </span>
        </div>
        <div className="text-sm text-muted">
          Built with React, Fabric.js, and Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
