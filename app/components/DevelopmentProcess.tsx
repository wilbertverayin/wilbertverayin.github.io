'use client';
import React from 'react';
import content from '../data/content.json';

const DevelopmentProcess = () => {
    const { developmentProcess } = content;

    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">{developmentProcess.title}</h2>
                <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                    {developmentProcess.description}
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2">
                        {developmentProcess.processes.map((process, index) => (
                            <div key={index} className="group relative">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${process.colorClasses.gradientFrom} ${process.colorClasses.gradientTo} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                                ></div>
                                <div
                                    className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 ${process.colorClasses.hoverBorder} transition-colors duration-300`}
                                >
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div
                                            className={`w-16 h-16 ${process.colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}
                                        >
                                            <svg className={`w-8 h-8 ${process.colorClasses.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d={process.iconPath}
                                                />
                                            </svg>
                                        </div>
                                        <h3 className={`text-xl font-semibold mb-3 text-center group-hover:${process.colorClasses.text} transition-colors`}>{process.title}</h3>
                                    </div>

                                    {/* Process Steps */}
                                    <div className="space-y-3">
                                        {process.steps.map((step, stepIndex) => (
                                            <div key={stepIndex} className="flex items-start gap-3">
                                                <div className={`w-6 h-6 rounded-full ${process.colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <span className={`text-sm ${process.colorClasses.text}`}>{stepIndex + 1}</span>
                                                </div>
                                                <p className="text-sm text-gray-400 group-hover:text-gray-300">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
