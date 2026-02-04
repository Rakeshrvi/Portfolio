import React from 'react';
import { VOLUNTEERING_DATA } from '../constants';
import type { VolunteeringItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TimelineItem: React.FC<{ item: VolunteeringItem; index: number }> = ({ item, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    const side = index % 2 === 0 ? 'md:text-right' : 'md:text-left';
    const contentSide = index % 2 === 0 ? 'md:pr-12' : 'md:pl-12';
    const delayClass = `delay-${index * 150}`;

    return (
        <div ref={ref} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'} transition-all duration-700 ${animationClasses} ${delayClass}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-slate-800 shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-cyan-400 font-semibold text-lg">{/* Icon can go here */}</div>
            </div>
            <div className={`order-1 bg-slate-800/50 border border-slate-700 rounded-lg shadow-xl w-5/12 px-6 py-4 ${contentSide}`}>
                <p className="text-sm font-semibold text-cyan-400 mb-1">{item.date}</p>
                <h3 className="font-bold text-white text-lg font-montserrat mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-slate-300 mb-2">{item.organization}</p>
                <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100 text-justify">{item.description}</p>
            </div>
        </div>
    );
};

const TimelineItemMobile: React.FC<{ item: VolunteeringItem; index: number }> = ({ item, index }) => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`relative pl-8 transition-all duration-700 ${animationClasses} delay-${index*150}`}>
            <div className="absolute left-0 top-1 h-full border-l-2 border-slate-700"></div>
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-slate-800 border-2 border-cyan-400 rounded-full"></div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6">
                 <p className="text-sm font-semibold text-cyan-400 mb-1">{item.date}</p>
                <h3 className="font-bold text-white text-lg font-montserrat mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-slate-300 mb-2">{item.organization}</p>
                <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100 text-justify">{item.description}</p>
            </div>
        </div>
    );
}

// A wrapper component to handle responsive timeline
const ResponsiveTimeline: React.FC = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="relative wrap overflow-hidden p-2 h-full">
                {VOLUNTEERING_DATA.map((item, index) => (
                    <TimelineItemMobile key={index} item={item} index={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
            <div className="absolute border-opacity-20 border-slate-700 h-full border" style={{ left: '50%' }}></div>
            {/* FIX: Corrected typo from VOLUN"TEERING_DATA to VOLUNTEERING_DATA which caused multiple subsequent errors. */}
            {VOLUNTEERING_DATA.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
            ))}
        </div>
    );
};


// Updated Volunteering component to use the responsive wrapper
const VolunteeringFC: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();
    return (
        <section id="volunteering" className="py-20 md:py-32 bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center transition-all duration-1000 ${animationClasses}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-16">
                        Volunteering & Training
                    </h2>
                </div>
                <ResponsiveTimeline />
            </div>
        </section>
    )
}

export default VolunteeringFC;
