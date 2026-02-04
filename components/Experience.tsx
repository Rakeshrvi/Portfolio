
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Building, MapPin, CheckCircle, Zap } from './icons';

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    const delayClass = `delay-${index * 150}`;

    return (
        <div ref={ref} className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/50 ${animationClasses} ${delayClass}`}>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-cyan-400 font-montserrat">{item.role}</h3>
                <span className="text-sm text-slate-400 mt-1 sm:mt-0 flex-shrink-0">{item.duration}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 mb-4 text-slate-400">
                <a href={item.companyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">{item.company}</span>
                </a>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                </div>
            </div>
            <ul className="space-y-3 mb-4">
                {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-justify">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>
            {item.projects && (
                <div>
                    <h4 className="font-semibold text-white mb-2">{item.projects.title}</h4>
                    <ul className="space-y-2">
                        {item.projects.items.map((proj, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400">
                                <Zap className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                                <span>{proj}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Experience: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center transition-all duration-1000 ${animationClasses}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-12">
                        Professional Experience
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {EXPERIENCE_DATA.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;