import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0  bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl bg-white' : 'shadow-md'}`}>
         <div className="container mx-auto flex justify-center items-center py-1">
                <img src="logo/wd-logo-2.png" alt="Logo" className="w-56 h-auto" />
            </div>
        </nav>
    );
};

export default Header;
