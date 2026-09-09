import { memo } from 'react';
import { Link } from 'react-scroll';

const CurrentlyBuilding = memo(function CurrentlyBuilding() {
    const roles = [
        {
            title: 'Software Engineer',
            org: 'AmaliTech',
            meta: 'Internship · Remote',
        },
    ];

    return (
        <div className='p-4 md:p-5 bg-surface dark:bg-surface-dark rounded-lg border border-stone-200 dark:border-stone-700'>
            <div className='flex items-center justify-between gap-3 mb-4'>
                <h4 className='text-lg font-display text-ink dark:text-stone-100'>Now</h4>
                <Link
                    to='experience'
                    smooth
                    duration={500}
                    offset={-80}
                    className='text-sm font-semibold text-accent dark:text-accent-muted underline-offset-4 hover:underline cursor-pointer'
                >
                    Full timeline
                </Link>
            </div>
            <ul className='space-y-4'>
                {roles.map((role) => (
                    <li key={role.org}>
                        <p className='font-semibold text-ink dark:text-stone-100'>{role.title}</p>
                        <p className='text-sm text-stone-600 dark:text-stone-400'>{role.org} · {role.meta}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default CurrentlyBuilding;
