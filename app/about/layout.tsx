'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AboutLayoutProps {
    children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const currentPath = pathname.toString();

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 pt-40">
            <div className="max-w-4xl mx-auto">
                <nav className="mb-6">
                    <ul className="flex justify-center gap-6 text-lg font-medium">
                        <li>
                            <Link
                                href="/about/frc"
                                className={`px-4 py-2 border border-green-500 rounded transition duration-300 ease-in-out transform hover:scale-105 ${
                                    currentPath === '/about/frc'
                                        ? 'bg-green-500 text-gray-900'
                                        : 'text-green-500 hover:bg-green-500 hover:text-gray-900'
                                }`}
                            >
                                FRC
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about/ftc"
                                className={`px-4 py-2 border border-green-500 rounded transition duration-300 ease-in-out transform hover:scale-105 ${
                                    currentPath === '/about/ftc'
                                        ? 'bg-green-500 text-gray-900'
                                        : 'text-green-500 hover:bg-green-500 hover:text-gray-900'
                                }`}
                            >
                                FTC
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg">{children}</div>
            </div>
        </div>
    );
};

export default AboutLayout;