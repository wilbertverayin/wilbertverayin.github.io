'use client';

import content from '../data/content.json';

const HeroSection = () => {
    const { heroSection } = content;

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="text-center mb-8">
                    <span className="text-lg md:text-xl text-gray-400 mb-2 block">{heroSection.greeting}</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                            {heroSection.name}
                        </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
                        {heroSection.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                        {heroSection.description.split('<span').map((part, index) => {
                            if (index === 0) return part;
                            const [tag, rest] = part.split('>');
                            const [text] = rest.split('</span');
                            return (
                                <span key={index} className={tag.split('"')[1]}>
                                    {text}
                                </span>
                            );
                        })}
                    </p>
                </div>

                {/* App Store Stats */}
                <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
                    {heroSection.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                        >
                            {/* Decorative gradient background */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={stat.iconPath} />
                                    </svg>
                                </div>
                                <div className="space-y-0.5 sm:space-y-1">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

                            {/* Hover glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Featured App Preview */}
                <div className="hidden max-w-lg mx-auto px-4">
                    <div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#grid)" />
                                </svg>
                            </div>

                            <div className="relative p-8">
                                {/* Badge */}
                                <div className="flex justify-center">
                                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                        <span className="text-blue-400 text-sm font-medium">{heroSection.featuredApp.badge}</span>
                                    </div>
                                </div>

                                {/* App Info */}
                                <div className="text-center mt-6">
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                        {heroSection.featuredApp.name}
                                    </h3>
                                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{heroSection.featuredApp.tagline}</p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {heroSection.featuredApp.stats.map((stat, index) => (
                                            <div key={index} className="space-y-1">
                                                <div className="flex items-center justify-center gap-1 text-yellow-400">
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d={stat.iconPath} />
                                                    </svg>
                                                    <span className="font-semibold">{stat.value}</span>
                                                </div>
                                                <p className="text-xs text-gray-500">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features Pills */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {heroSection.featuredApp.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                                <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                                <div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
                                <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
