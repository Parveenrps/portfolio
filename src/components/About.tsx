import React from 'react';
import { Code, Atom, Server, Palette, GitBranch, Database, Globe} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section  id="about" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="lg:w-1/2">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-slate-200 leading-relaxed text-lg">
                Hi, I'm Parveen Kumar, a passionate Software Developer and Full Stack Developer with a love for poetry. I enjoy creating innovative solutions and expressing creativity through code and words. Welcome to my portfolio where you can explore my journey, projects, and artistic side.
              </p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium text-white mb-2">B. Tech in Production and Industrial Engineering</h4>
                  <p className="text-slate-300">National Institute of Technology Kurukshetra</p>
                  <p className="text-slate-400 mt-2">2021 - 2025</p>
                </div>
                {/* Add more education items as needed */}
              </div>
            </div>

            {/* Experience/Position */}
            <div className="mb-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-white mb-2">Writing Team Head</h4>
                <p className="text-slate-300">Hindi Literary and Debating Club</p>
                <p className="text-slate-400 mt-2">National Institute of Technology Kurukshetra</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            {/* Skills */}
            <div className="mb-8">

              {/* Programming Languages */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Globe className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">JavaScript</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Code className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">Python</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Code className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">Java</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Code className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">C++</span>
                  </div>
                </div>
              </div>

              {/* Frontend */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Atom className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">React</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Palette className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">Tailwind CSS</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Globe className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">HTML</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Palette className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">CSS</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Server className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium font-mono">Node.js</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Database className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">MongoDB</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Server className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">Express.js</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Database className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">SQL</span>
                  </div>
                </div>
              </div>

              {/* Other Skills */}
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <GitBranch className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">Git</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg text-center flex flex-col items-center">
                    <Globe className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-white font-medium">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;