import { FC, PropsWithChildren } from 'react';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen container mx-auto px-4 mb-16">
      {children}
    </main>
  );
};

export default PageWrapper;
