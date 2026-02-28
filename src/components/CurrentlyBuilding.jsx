import React, { memo } from 'react';
import { FaHammer, FaGithub } from 'react-icons/fa';

const CurrentlyBuilding = memo(function CurrentlyBuilding() {
    // Update this object whenever you start working on something new
    const currentProject = {
        name: 'AI Resume Analyzer v2',
        description: 'Adding multi-resume comparison and batch analysis features',
        tech: ['React', 'TypeScript', 'Puter.js'],
        repo: 'https://github.com/GeekKwame/ai-resume-analyzer',
        status: 'In Progress', // 'In Progress', 'Planning', 'Testing'
    };

    const statusColors = {
        'In Progress': 'from-green-500 to-emerald-500',
        'Planning': 'from-yellow-500 to-orange-500',
        'Testing': 'from-blue-500 to-indigo-500',
    };

    return (
        <div className='group relative p-4 md:p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3'>
                    <FaHammer className='text-xl text-cyan-400 animate-bounce' />
                    <h4 className='text-lg font-bold text-white'>Currently Building</h4>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${statusColors[currentProject.status] || statusColors['In Progress']} text-white`}>
                        {currentProject.status}
                    </span>
                </div>
                <h5 className='text-base font-semibold text-cyan-400 mb-1'>{currentProject.name}</h5>
                <p className='text-sm text-gray-400 mb-3'>{currentProject.description}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-wrap gap-1.5'>
                        {currentProject.tech.map((t, i) => (
                            <span key={i} className='px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30'>
                                {t}
                            </span>
                        ))}
                    </div>
                    {currentProject.repo && (
                        <a
                            href={currentProject.repo}
                            target="_blank"
                            rel="noreferrer"
                            className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'
                            aria-label="View repository"
                        >
                            <FaGithub className='text-lg' />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
});

export default CurrentlyBuilding;
