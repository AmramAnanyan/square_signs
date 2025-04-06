import { FC, ReactNode, useEffect, useState } from 'react';
import { SCROLL_TO } from '../../constants/generic';
import useScrollTo from '../../utils/hooks/useScrollTo';
import { ArrowUp } from 'lucide-react';

interface IScrollable {
  id: SCROLL_TO;
  children: ReactNode;
}
const Scrollable: FC<IScrollable> = ({ children, id }) => {
  const { scrollRef } = useScrollTo();

  return (
    <div ref={scrollRef} id={id}>
      {children}
    </div>
  );
};

export default Scrollable;
