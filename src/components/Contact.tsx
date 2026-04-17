import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact"  className="flex justify-center items-center bg-black h-screen">
      <div className="container flex flex-col w-[60%] mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-200">
          Get in touch with me.
        </p>
        <form className="mt-4">
          <input className="block w-full p-2 border border-gray-300 rounded mb-4" type="text" placeholder="Name" />
          <input className="block w-full p-2 border border-gray-300 rounded mb-4" type="email" placeholder="Email" />
          <textarea className="block w-full p-2 border border-gray-300 rounded mb-4" placeholder="Message"></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Send Me :)
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;