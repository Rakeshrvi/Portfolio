
import React from 'react';
import { EDUCATION_DATA } from '../constants';
import type { EducationItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, ExternalLink } from './icons';

const EducationCard: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    const delayClass = `delay-${index * 150}`;

    return (
        <div ref={ref} className={`bg-white p-6 rounded-lg border border-blue-200 shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 hover:border-blue-400 ${animationClasses} ${delayClass}`}>
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-600">{item.degree}</h3>
                <p className="text-slate-700">{item.specialization}</p>
                <p className="text-slate-600 mt-2">{item.institution}</p>
                <p className="text-slate-500 text-sm">{item.university}</p>
                <p className="text-sm font-semibold text-slate-900 mt-2">{item.year}</p>
            </div>
            <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 transition-colors">
                Visit Website <ExternalLink className="w-4 h-4" />
            </a>
        </div>
    );
};

const Education: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="education" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`flex items-center justify-center gap-4 transition-all duration-1000 ${animationClasses} mb-12`}>
                    <GraduationCap className="w-10 h-10 text-blue-500" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Education
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {EDUCATION_DATA.map((item, index) => (
                        <EducationCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
