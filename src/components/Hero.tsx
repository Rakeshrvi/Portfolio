import React from 'react';

const Hero: React.FC = () => {
    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerOffset = 120; // Match the header offset
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <style>
                {`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes fadeIn {
                    from { opacity: 0; filter: blur(5px); }
                    to { opacity: 1; filter: blur(0px); }
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fadeIn 1.2s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                `}
            </style>
            
            <div className="container mx-auto relative z-10 flex flex-col items-center">
                <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 opacity-0 animate-fade-in">
                    Bridging Engineering Precision with Supply Chain Strategy.
                </h1>
                
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    An <strong className="text-cyan-400">MBA graduate</strong> specializing in <strong className="text-cyan-400">Operations & SCM</strong> and <strong className="text-cyan-400">Business Analytics</strong>, with a robust foundation in Electrical & Electronics Engineering. I excel at optimizing complex supply chains using data-driven strategies.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <a href="#experience" onClick={handleCTAClick} className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-cyan-600/20">
                        View my professional experience
                    </a>
                    <a href="#contact" onClick={handleCTAClick} className="w-full sm:w-auto px-8 py-3 font-semibold text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;