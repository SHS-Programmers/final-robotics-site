'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    // Don't render the footer on the Twitch page
    if (pathname === '/twitch') {
        return null;
    }

    return (
        <div className="m-0 p-0 text-[#adadad] fixed bottom-0 z-50 bg-gray-900 w-full contents-center">
            <p className="">©Staley Millennium Falcons 2024</p>
        </div>
    );
}