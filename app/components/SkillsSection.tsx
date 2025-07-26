'use client';

import content from '../data/content.json';

const SkillsSection = () => {
    const { skillsSection } = content;

    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">{skillsSection.title}</h2>
                <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                    {skillsSection.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                    {/* Core Technologies */}
                    <div className="space-y-4 sm:space-y-6 px-2">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d={skillsSection.skills[0].iconPath} />
                            </svg>
                            {skillsSection.coreTechnologiesSubtitle}
                        </h3>
                        {skillsSection.skills.slice(0, 4).map((skill) => (
                            <div key={skill.name} className="group relative">
                                <div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
                                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                                        <span className="font-medium">{skill.name}</span>
                                        {/* Skill-specific badges */}
                                        <div className="flex flex-wrap sm:flex-nowrap gap-1">
                                            {skill.badges.map((badge, badgeIndex) => (
                                                <span key={badgeIndex} className={`px-2 py-0.5 text-xs rounded-full ${skill.name === 'Backend' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : skill.name === 'Frontend' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : skill.name === 'Databases' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : skill.name === 'Development Tools' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : ''}`}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                                </div>
                                <div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                {/* Hover Card with Details */}
                                <div className="hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700/50">
                                    <div className="text-sm space-y-2">
                                        <p className="font-medium">{skill.name}</p>
                                        <div className="space-y-1 text-xs text-gray-400">
                                            <p>• {skill.level}% Proficiency</p>
                                            <p>• {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'} Level</p>
                                            <p>• {Math.round(skill.level / 10)} Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="space-y-4 sm:space-y-6 px-2">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d={skillsSection.skills[4].iconPath} />
                            </svg>
                            {skillsSection.specializedSkillsSubtitle}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skillsSection.skills.slice(4).map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors relative overflow-hidden"
                                >
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
                                        {skill.name.includes('Firebase') ? (
                                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-500 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d={skill.iconPath} />
                                            </svg>
                                        ) : (
                                            <svg className="absolute -right-4 -bottom-4 w-24 h-24 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d={skill.iconPath} />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
