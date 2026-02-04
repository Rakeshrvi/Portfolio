import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    
    return (
        <section id="about" className="py-20 md:py-32 bg-slate-900/50">
            <div ref={ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${animationClasses}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-montserrat mb-12">
                    About Me
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full transition-transform duration-500 group-hover:scale-105"></div>
                        <img 
                            src="https://i.postimg.cc/t4PjPDZD/Profile.png" 
                            alt="Professional Headshot of RAKESH RAVI" 
                            className="relative w-full h-full object-cover rounded-full p-2 bg-slate-900 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="text-center max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-4">
                            A Passion for Optimization, from Circuits to Supply Chains
                        </h3>
                        <p className="text-slate-400 mb-4 leading-relaxed text-justify">
                            A <strong>Techno-managerial</strong> professional with a background in <strong>Electrical & Electronics Engineering</strong> and an <strong>MBA</strong> in Operations, Logistics & Supply Chain Management, enhanced with Business Analytics. With over a year of experience in <strong>Material procurement and coordination</strong> for large-scale solar projects, I blend technical expertise with operational efficiency.
                        </p>
                        <p className="text-slate-400 leading-relaxed text-justify">
                            Proficient in tools like <strong>Power BI, Microsoft Excel, and Microsoft Projects,</strong> I leverage data-driven insights to optimize supply chain and logistics performance. Passionate about sustainability and innovation, I am seeking impactful roles in Supply Chain and Operations Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;