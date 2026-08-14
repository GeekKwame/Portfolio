import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const CurrentlyBuilding = memo(function CurrentlyBuilding() {
    const currentProject = {
        name: 'Event-Connect',
        description:
            'Production serverless event registration — CloudFront is the only public HTTPS edge; iterating on tickets, admin session, and email fallback.',
        tech: ['AWS SAM', 'CloudFront', 'Lambda', 'DynamoDB', 'WAF'],
        repo: 'https://github.com/GeekKwame/event-registration-system-sam/',
        live: 'https://d3mbqhiwlx08nz.cloudfront.net',
        status: 'Live',
    };

    return (
        <div className='group relative p-4 md:p-6 bg-white/90 dark:bg-gradient-to-br dark:from-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600/50 shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3'>
                    <h4 className='text-lg font-bold text-gray-900 dark:text-white'>Latest project</h4>
                    <span className='px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                        {currentProject.status}
                    </span>
                </div>
                <h5 className='text-base font-semibold text-cyan-600 dark:text-cyan-400 mb-1'>{currentProject.name}</h5>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>{currentProject.description}</p>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex flex-wrap gap-1.5'>
                        {currentProject.tech.map((t) => (
                            <span key={t} className='px-2 py-0.5 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-400 text-xs rounded-md border border-cyan-500/30'>
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className='flex items-center gap-3 shrink-0'>
                        <a
                            href={currentProject.live}
                            target="_blank"
                            rel="noreferrer"
                            className='text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline'
                        >
                            Live
                        </a>
                        <a
                            href={currentProject.repo}
                            target="_blank"
                            rel="noreferrer"
                            className='text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300'
                            aria-label="Event-Connect repository"
                        >
                            <FaGithub className='text-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CurrentlyBuilding;
