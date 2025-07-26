'use client';

import React from 'react';

interface Skill {
    name: string;
    level: number;
    years: number;
    badges: string[];
}

const badgeColorMap: { [key: string]: string } = {
    Backend: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    Frontend: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    Databases: 'bg-green-500/10 text-green-400 border border-green-500/20',
    'Development Tools': 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
};

const SkillBar = ({ skill }: { skill: Skill }) => {
    const badgeClasses = badgeColorMap[skill.name] || '';

    return (
        <div className="group relative">
            <div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex flex-wrap sm:flex-nowrap gap-1">
                        {skill.badges.map((badge, badgeIndex) => (
                            <span key={badgeIndex} className={`px-2 py-0.5 text-xs rounded-full ${badgeClasses}`}>
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
            </div>
            <div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100" style={{ width: `${skill.level}%` }}></div>
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700/50">
                <div className="text-sm space-y-2">
                    <p className="font-medium">{skill.name}</p>
                    <div className="space-y-1 text-xs text-gray-400">
                        <p>• {skill.level}% Proficiency</p>
                        <p>• {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'} Level</p>
                        <p>• {skill.years} Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;