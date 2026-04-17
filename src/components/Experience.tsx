import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-2">Frontend Developer Intern</h3>
            <p className="text-cyan-400 mb-2">Curaxo Healthcare LLP</p>
            <p className="text-slate-300">Jan 2024 - May 2024</p>
            <p className="text-slate-400 mt-2">Developed user interfaces and improved frontend functionality for healthcare applications.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-2">Graduate Engineer Trainee</h3>
            <p className="text-cyan-400 mb-2">APL Apollo Tubes Ltd</p>
            <p className="text-slate-300">July 2025 - Jan 2026</p>
            <p className="text-slate-400 mt-2">Training and development in engineering processes and operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;