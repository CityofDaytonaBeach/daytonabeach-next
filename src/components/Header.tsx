"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const menuItems = {
    'Government': {
        'City Leadership': [
            'City Commission',
            'Mayor\'s Welcome',
            'City Manager\'s Office',
            'Staff Directory',
            'Vision Plan',
            'Legislative Priorities'
        ],
        'Meetings & Documents': [
            'Agendas & Minutes',
            'Boards & Committees',
            'Budget',
            'Code of Ordinances',
            'Land Development Code'
        ],
        'City Services': [
            'City Hall Information',
            'Elections',
            'DBTV'
        ]
    },
    'Departments': {
        'Public Safety': [
            'Fire Department',
            'Police Department',
            'Emergency Management',
            'Animal Services Unit'
        ],
        'Administration': [
            'City Manager\'s Office',
            'City Clerk\'s Office',
            'Communications & Marketing',
            'Finance',
            'Human Resources',
            'Purchasing'
        ],
        'Development & Planning': [
            'Community Development',
            'Economic Development',
            'Growth Management and Planning',
            'Planning',
            'Permits & Licensing',
            'Redevelopment and Neighborhood Services'
        ],
        'Community Services': [
            'Arts and Entertainment Management',
            'Business Enterprise Management',
            'Code Compliance',
            'Parks & Recreation',
            'Public Infrastructure and Capital Projects',
            'Solid Waste',
            'Utilities',
            'Utility Billing'
        ]
    },
    'Business': {
        'Starting & Operating': [
            'Starting a New Business',
            'Business Licensing',
            'Business Triage Program',
            'Rental Property Program',
            'Current Solicitations'
        ],
        'Development': [
            'Development Happening in Daytona Beach',
            'Economic Development',
            'Land Development Code',
            'Planning',
            'Permits & Licensing',
            'Redevelopment'
        ],
        'Resources': [
            'Code of Ordinances',
            'Staff Directory',
            'Accelerate Business Summit'
        ]
    },
    'Community': {
        'Recreation & Culture': [
            'Parks & Recreation',
            'Beach Activities & Information',
            'Community Events Calendar',
            'Arts & Culture',
            'Sports & Athletics Programs',
            'Youth Programs'
        ],
        'Resident Services': [
            'Utility Services',
            'Garbage & Recycling',
            'Street Maintenance',
            'Public Transportation',
            'Library Services',
            'Senior Services'
        ],
        'Get Involved': [
            'Volunteer Opportunities',
            'Neighborhood Associations',
            'Community Forums'
        ]
    }
};

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full z-50 top-0">
            {/* Top Bar */}
            <div className="bg-[#154777] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center h-8">
                        <div className="flex items-center gap-x-2 md:gap-x-6 text-[10px] md:text-sm">
                            <a href="tel:3862717100" className="hover:text-[#6FC5D8] transition-all duration-200 flex items-center whitespace-nowrap">
                                <i className="fas fa-phone mr-1 md:mr-2"></i>
                                <span>(386) 271-7100</span>
                            </a>
                            <a href="#" className="hover:text-[#6FC5D8] transition-all duration-200 flex items-center whitespace-nowrap">
                                <i className="fas fa-map-marker-alt mr-1 md:mr-2"></i>
                                <span>301 S. Ridgewood Ave.</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm">
                            <Link href="/auth/sign-in" className="hover:text-[#6FC5D8] transition-all duration-200 whitespace-nowrap">Sign In</Link>
                            <Link href="/auth/register" className="hover:text-[#6FC5D8] transition-all duration-200 whitespace-nowrap">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className={`bg-white/95 backdrop-blur-sm shadow-sm ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image 
                                src="/images/logo.png" 
                                alt="City of Daytona Beach" 
                                width={200}
                                height={80}
                                className="h-20 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-end space-x-12">
                            <div className="flex items-center space-x-10">
                                {Object.entries(menuItems).map(([category, sections]) => (
                                    <div 
                                        key={category}
                                        className="relative group" 
                                        onMouseEnter={() => setActiveMenu(category)}
                                        onMouseLeave={() => setActiveMenu(null)}
                                    >
                                        <button 
                                            className={`menu-trigger flex items-center text-gray-700 py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#154777] hover:text-white ${
                                                activeMenu === category ? 'bg-[#154777] text-white' : ''
                                            }`}
                                        >
                                            {category}
                                            <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${
                                                activeMenu === category ? 'rotate-180' : ''
                                            }`}></i>
                                        </button>

                                        {/* Mega Menu */}
                                        <div 
                                            className={`absolute ${
                                                category === 'Government' || category === 'Departments' 
                                                    ? 'left-1/2 -translate-x-1/2' 
                                                    : 'right-0'
                                            } bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50`}
                                            style={{ top: '100%', minWidth: 'max-content', maxWidth: 'max-content' }}
                                        >
                                            <div className="p-6">
                                                <div className="flex flex-wrap gap-8">
                                                    {Object.entries(sections).map(([sectionTitle, links]) => (
                                                        <div key={sectionTitle} className="mega-menu-section min-w-[200px] flex-1">
                                                            <h3 className="text-lg font-dunbar font-bold text-gray-800 mb-4">{sectionTitle}</h3>
                                                            <ul className="space-y-2">
                                                                {links.map((link) => (
                                                                    <li key={link}>
                                                                        <Link 
                                                                            href="#" 
                                                                            className="text-gray-600 hover:text-[#154777] transition-colors"
                                                                        >
                                                                            {link}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Search Button */}
                            <div className="flex items-center space-x-4 pl-8 border-l border-gray-200">
                                <button className="p-2 hover:text-[#154777] transition-colors">
                                    <i className="fas fa-search text-xl"></i>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 hover:text-[#154777] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100">
                        <div className="container mx-auto px-4 py-4">
                            <nav className="space-y-6">
                                {Object.entries(menuItems).map(([category, sections]) => (
                                    <div key={category} className="space-y-4">
                                        <h2 className="font-semibold text-[#154777]">{category}</h2>
                                        <div className="grid grid-cols-1 gap-4 pl-4">
                                            {Object.entries(sections).map(([section, items]) => (
                                                <div key={section} className="space-y-2">
                                                    <h3 className="font-medium text-gray-900">{section}</h3>
                                                    <ul className="space-y-2 pl-4">
                                                        {items.map((item) => (
                                                            <li key={item}>
                                                                <Link 
                                                                    href="#" 
                                                                    className="text-gray-600 hover:text-[#154777] transition-colors"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
