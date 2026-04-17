import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg border-b border-slate-600 z-10">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-white">Parveen Kumar</h1>
        <div className="space-x-4">
          <a href="#about" className="text-slate-300 hover:text-cyan-300 transition-colors">About</a>
          <a href="#experience" className="text-slate-300 scroll-behavior:smooth hover:text-cyan-300 transition-colors">Experience</a>
          <a href="https://drive.google.com/file/d/1A0hEnu35e13ann_uvbLb7T-yA0EizNoH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-300 transition-colors">Resume</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-300 transition-colors">Contact</a>
          <a href="https://poetryofparv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-300 transition-colors">poetryofparv</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;