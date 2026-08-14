import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

import { FLAGSHIP } from '../config/constants';

const CurrentlyBuilding = memo(function CurrentlyBuilding() {
    const currentProject = {
        name: FLAGSHIP.name,
        description:
            'Production serverless event registration — CloudFront is the only public HTTPS edge; iterating on tickets, admin session, and email fallback.',
        tech: ['AWS SAM', 'CloudFront', 'Lambda', 'DynamoDB', 'WAF'],
        repo: FLAGSHIP.repo,
        live: FLAGSHIP.live,
        status: 'Live',
    };

    return (
        <div className='group relative p-4 md:p-6 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-700/80 shadow-md hover:border-cyan-400 dark:hover:border-teal-400/40 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-none transition-all duration-300 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3'>
                    <h4 className='text-lg font-bold text-gray-900 dark:text-slate-100'>Latest project</h4>
                    <span className='px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-teal-600 dark:to-sky-700 text-white'>
                        {currentProject.status}
                    </span>
                </div>
                <h5 className='text-base font-semibold text-cyan-600 dark:text-teal-300 mb-1'>{currentProject.name}</h5>
                <p className='text-sm text-gray-600 dark:text-slate-300 mb-3 leading-relaxed'>{currentProject.description}</p>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex flex-wrap gap-1.5'>
                        {currentProject.tech.map((t) => (
                            <span key={t} className='px-2 py-0.5 bg-cyan-500/10 dark:bg-teal-500/10 text-cyan-800 dark:text-teal-200 text-xs rounded-md border border-cyan-500/30 dark:border-teal-500/25'>
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className='flex items-center gap-3 shrink-0'>
                        <a
                            href={currentProject.live}
                            target="_blank"
                            rel="noreferrer"
                            className='text-sm font-semibold text-cyan-600 dark:text-teal-300 hover:underline'
                        >
                            Live
                        </a>
                        <a
                            href={currentProject.repo}
                            target="_blank"
                            rel="noreferrer"
                            className='text-gray-500 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-teal-300 transition-colors duration-300'
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
