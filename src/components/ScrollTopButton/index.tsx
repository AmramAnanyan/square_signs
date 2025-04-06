import { ArrowUp } from 'lucide-react';
import useScrollTo from '../../utils/hooks/useScrollTo';

const ScrollTopButton = () => {
  const { scrollToTop } = useScrollTo();
  return (
    <div
      className="bg-slate-50 w-14 h-14 rounded-full border flex justify-center items-center cursor-pointer shadow-lg fixed bottom-20 right-3"
      onClick={scrollToTop}
    >
      <ArrowUp color="#3388ff" />
    </div>
  );
};

export default ScrollTopButton;
