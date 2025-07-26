'use client';

import React from 'react';

interface Skill {
    name: string;
    level: number;
    iconPath: string;
}

const SpecializedSkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="font-medium mb-2 break-words">{skill.name}</h4>
                <div className="flex items-center gap-2">
                    <div className="flex-grow h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-expand"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                    <span className="text-sm text-purple-400 whitespace-nowrap">{skill.level}%</span>
                </div>
            </div>
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <svg
                    className={`absolute -right-4 -bottom-4 w-24 h-24 transform rotate-12 ${skill.name.includes('Firebase') ? 'text-yellow-500' : ''}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d={skill.iconPath} />
                </svg>
            </div>
        </div>
    );
};

export default SpecializedSkillCard;