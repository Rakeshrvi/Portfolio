import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { SkillCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillCategoryCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    const delayClass = `delay-${index * 150}`;
    
    return (
        <div ref={ref} className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50 ${animationClasses} ${delayClass}`}>
            <div className="flex items-center gap-4 mb-4">
                {/* FIX: Cast icon to React.ReactElement<any> to fix overload issue with cloneElement. */}
                <div className="text-cyan-400">{React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-8 h-8" })}</div>
                <h3 className="text-2xl font-bold text-white font-montserrat">{category.title}</h3>
            </div>
            <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                        {/* FIX: Cast icon to React.ReactElement<any> to fix overload issue with cloneElement. */}
                        <div className="text-cyan-500">{React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-5 h-5" })}</div>
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Skills: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="skills" className="py-20 md:py-32 bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center transition-all duration-1000 ${animationClasses}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-12">
                        Core Skills & Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS_DATA.map((category, index) => (
                        <SkillCategoryCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;