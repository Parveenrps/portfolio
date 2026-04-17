import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Parveen', 'Software Developer', 'Full Stack Developer', 'Poet'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <section className="hero bg-black py-20 h-screen flex items-center">
      <div className="w-full px-6 flex flex-col md:flex-row items-center mx-auto">
        <div className="left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi. I'm <span className="text-cyan-400">{currentText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-slate-200 mb-6 font-mono text-sm leading-relaxed">
            <span className="text-green-400">// Crafting digital experiences & poetic verses</span><br />
            <span className="text-blue-400">class</span> Developer {'{'}<br />
            &nbsp;&nbsp;<span className="text-cyan-400">constructor</span>() {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.name = <span className="text-yellow-400">'Parveen Kumar'</span>;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.skills = [<span className="text-yellow-400">'Creativity'</span>, <span className="text-yellow-400">'Innovation'</span>, <span className="text-yellow-400">'Poetry'</span>];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.passion = <span className="text-yellow-400">'Innovation & Creativity'</span>;<br />
            &nbsp;&nbsp;{'}'}<br />
            &nbsp;&nbsp;<span className="text-cyan-400">welcome</span>() {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-yellow-400">`Hello! Explore my ${'{'}this.skills.join(', '){'}'} journey`</span>;<br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}<br />
            <span className="text-green-400">// console.log(new Developer().welcome());</span>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/parvrps16/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://poetryofparv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              poetryofparv
            </a>
          </div>
        </div>
        <div className="right md:w-1/2 flex justify-center">
          <img
            src="/public/images/hero.jpg"
            alt="Parveen Kumar"
            className="shadow-lg w-80 h-85 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;