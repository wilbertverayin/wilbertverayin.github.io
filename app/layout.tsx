import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Wilbert Verayin - Fullstack Developer',
    description:
        'Crafting robust, maintainable, and scalable systems with vast knowledge in Backend, Frontend, and DevOps. Explore my projects and app development expertise.',
    keywords: [
        'Mobile Developer',
        'iOS Developer',
        'Android Developer',
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Mobile Apps',
        'Cross-Platform Development',
        'Native Development',
        'Mobile UI/UX',
        'App Store',
        'Play Store',
        'Mobile Architecture',
        'Wilbert Verayin',
    ],
    authors: [{ name: 'Wilbert Verayin' }],
    creator: 'Wilbert Verayin',
    openGraph: {
        title: 'Wilbert Verayin - Fullstack Developer',
        description: 'Crafting robust, maintainable, and scalable systems with vast knowledge in Backend, Frontend, and DevOps. Explore my projects and app development expertise.',
        url: 'https://wilbertverayin.com',
        siteName: 'Wilbert Verayin - Fullstack Developer',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Wilbert Verayin - Fullstack Developer',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wilbert Verayin - Fullstack Developer',
        description: 'Crafting robust, maintainable, and scalable systems with vast knowledge in Backend, Frontend, and DevOps. Explore my projects and app development expertise.',
        creator: '@wilbertverayin',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
