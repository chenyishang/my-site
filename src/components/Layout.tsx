import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;