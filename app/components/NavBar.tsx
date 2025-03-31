'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import logo from "@/public/Logo24-25.svg";

// Set this to true during competitions, false otherwise
const SHOW_TWITCH_BUTTON = false;

const Navbar: React.FC = () => {
    const pathname = usePathname();

    // Show reduced navbar on twitch page
    if (pathname === '/twitch') {
        return (
            <div
                className="fixed z-50 top-2 left-5 right-5 flex justify-end items-center px-3 py-2 rounded-lg">
                <Link
                    href="/"
                    className="px-6 py-3 text-white text-sm bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                    Back to Site
                </Link>
            </div>
        );
    }

    return (
        <div className="fixed z-50 top-2 left-5 right-5 flex justify-between items-center frosted-glass px-6 py-3">
            {/* Brand Section */}
            <div className="flex items-center text-white font-jockey text-2xl font-bold space-x-4">
                <Image src={logo} width={500} height={500} alt="Staley Millennium Falcons Logo"
                       className="h-10 w-auto rounded-xl shadow-lg"/>
                <span>Millennium Falcons</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-4">
                {[
                    {href: "/", label: "Home"},
                    {href: "/about", label: "About"},
                    {href: "/sponsors", label: "Sponsors"},
                    {href: "/fundraising", label: "Fundraising"},
                    {href: "/contact", label: "Contact"},
                    {href: "/calendar", label: "Calendar"},
                    {href: "/seasons", label: "Seasons"},
                    {href: "/alumni", label: "Alumni"},
                ].map(({href, label}) => (
                    <li key={label}>
                        <Link
                            href={href}
                            className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-transform duration-300 hover:scale-95 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-green-500 after:opacity-0 hover:after:opacity-50 after:transform after:transition-opacity after:duration-300 ${
                                pathname.toString() === href
                                    ? "text-green-500 after:opacity-50 after:transform after:scale-90"
                                    : "text-white"
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}

                {/* Twitch Button - Only shown during competitions */}
                {SHOW_TWITCH_BUTTON && (
                    <li className="ml-2">
                        <Link
                            href="/twitch"
                            className="relative px-6 py-3 text-white font-bold text-lg bg-red-600 rounded-lg
                                       shadow-lg animate-pulse hover:bg-red-700 transition-colors duration-300
                                       border-2 border-red-400"
                        >
                            <span className="animate-pulse">LIVE</span> WATCH
                        </Link>
                    </li>
                )}
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <input type="checkbox" id="collapse" className="hidden peer"/>
                <label
                    htmlFor="collapse"
                    className="cursor-pointer bg-gray-800 text-white p-3 rounded-lg peer-checked:bg-green-500 peer-checked:shadow-md"
                >
                    <div className="space-y-1">
                        <div className="w-5 h-0.5 bg-white"></div>
                        <div className="w-5 h-0.5 bg-white"></div>
                        <div className="w-5 h-0.5 bg-white"></div>
                    </div>
                </label>
                <ul className="absolute top-14 left-0 w-full bg-gray-800 p-4 space-y-2 hidden peer-checked:block">
                    {[
                        {href: "/", label: "Home"},
                        {href: "/about", label: "About"},
                        {href: "/sponsors", label: "Sponsors"},
                        {href: "/fundraising", label: "Fundraising"},
                        {href: "/contact", label: "Contact"},
                        {href: "/calendar", label: "Calendar"},
                        {href: "/seasons", label: "Seasons"},
                        {href: "/alumni", label: "Alumni"},
                    ].map(({href, label}) => (
                        <li key={label}>
                            <Link
                                href={href}
                                className={`block px-4 py-2 text-sm font-semibold rounded-lg hover:bg-green-500 ${
                                    pathname.toString() === href ? "bg-green-500" : "text-white"
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Twitch Button - Only shown during competitions */}
                    {SHOW_TWITCH_BUTTON && (
                        <li className="mt-4">
                            <Link
                                href="/twitch"
                                className="block w-full text-center px-4 py-3 text-white font-bold text-lg
                                           bg-red-600 rounded-lg shadow-lg animate-pulse
                                           border-2 border-red-400"
                            >
                                <span className="animate-pulse">LIVE</span> WATCH COMPETITION
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;