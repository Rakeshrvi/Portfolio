
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    const delayClass = `delay-${index * 100}`;

    return (
        <div ref={ref} className={`bg-white rounded-lg border border-blue-200 shadow-lg overflow-hidden flex flex-col transition-all duration-500 group hover:border-blue-400 hover:shadow-blue-500/20 ${animationClasses} ${delayClass}`}>
            <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h4>
                <p className="text-slate-600 mb-4 flex-grow text-justify">{project.description}</p>
                {project.funding && (
                    <p className="text-sm font-semibold text-blue-600 mt-auto">{project.funding}</p>
                )}
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-100 to-blue-200 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></div>
        </div>
    );
};

const Projects: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center transition-all duration-1000 ${animationClasses}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                        Project Experiences
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;