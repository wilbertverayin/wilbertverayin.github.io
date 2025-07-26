'use client';

import content from '../data/content.json';
import SkillBar from './SkillBar';
import SpecializedSkillCard from './SpecializedSkillCard';

interface Skill {
    name: string;
    level: number;
    years: number;
    badges: string[];
    iconPath: string;
}

const SkillsSection = () => {
    const { skillsSection } = content;
    const coreSkills = skillsSection.coreSkills;
    const specializedSkills =skillsSection.secondarySkills;

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
                                <path d={coreSkills[0].iconPath} />
                            </svg>
                            {skillsSection.coreTechnologiesSubtitle}
                        </h3>
                        {coreSkills.map((skill: Skill) => (
                            <SkillBar key={skill.name} skill={skill} />
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="space-y-4 sm:space-y-6 px-2">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d={specializedSkills[0].iconPath} />
                            </svg>
                            {skillsSection.specializedSkillsSubtitle}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {specializedSkills.map((skill: Skill) => (
                                <SpecializedSkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
