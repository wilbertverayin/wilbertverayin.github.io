'use client';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const ContactSection = () => {
    const { contactSection } = content;
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {contactSection.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {contactSection.description}
                    </p>

                    {/* Location */}
                    {/* <div className="flex items-center justify-center gap-2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Philippines</span>
                    </div> */}

                    {/* Contact Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {contactSection.buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={`px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 ${index === 0 ? 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-purple-500/20' : 'bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700'}`}
                                target={button.label === 'View Resume' ? '_blank' : '_self'}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d={button.iconPath} fillRule={button.label === 'View Resume' ? 'evenodd' : undefined} clipRule={button.label === 'View Resume' ? 'evenodd' : undefined} />
                                </svg>
                                {button.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        {contactSection.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={link.iconPath} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
