
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Linkedin, Mail } from './icons';

const Contact: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    
    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-900/50">
            <div ref={ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center transition-all duration-1000 ${animationClasses}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
                    Let's Connect
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                    I'm always open to discussing new opportunities or challenges in the supply chain world. Feel free to reach out.
                </p>

                <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 shadow-2xl">
                    <form action="mailto:rakeshravi081@gmail.com" method="post" encType="text/plain" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-slate-700/50 text-white px-4 py-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300" />
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-slate-700/50 text-white px-4 py-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300" />
                        </div>
                        <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-slate-700/50 text-white px-4 py-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300"></textarea>
                        <div className="text-left">
                           <button type="submit" className="px-8 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-cyan-600/20">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="mt-12">
                    <div className="flex justify-center items-center space-x-6">
                        <a href="https://www.linkedin.com/in/rakeshrvi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="LinkedIn">
                            <Linkedin className="w-8 h-8"/>
                        </a>
                        <a href="mailto:rakeshmrvi@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="Email">
                            <Mail className="w-8 h-8"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
