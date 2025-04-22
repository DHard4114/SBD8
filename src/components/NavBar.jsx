import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();

const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sistem Operasi", path: "/os" },
    { name: "Sistem Basis Data", path: "/sbd" },
    { name: "Desain Manajemen Jaringan", path: "/dmj" },
];

return (
    <nav className="bg-[#1E293B] backdrop-blur-lg shadow-lg sticky top-0 z-50 text-white">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <span className="text-2xl font-semibold tracking-wide">NetLab</span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center text-md font-medium">
            {navLinks.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                className={`transition hover:text-cyan-400 ${
                    location.pathname === link.path ? "text-cyan-400" : ""
                }`}
                >
                {link.name}
                </Link>
            ))}
        </div>

        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="relative w-9 h-9 flex flex-col justify-center items-center group"
            >
                <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
                />
                <span
                className={`block w-6 h-0.5 bg-white my-[2px] transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                />
                <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
                />
            </button>
            </div>
        </div>

        <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1E293B] z-40 px-6 transition-all duration-500 ease-in-out transform ${
            isMenuOpen
            ? "max-h-[500px] opacity-100 translate-y-0 pt-4 pb-6"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
        >
        <ul className="space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
                <li key={link.path}>
                <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block transition hover:text-cyan-400 ${
                    location.pathname === link.path ? "text-cyan-400" : ""
                    }`}
                >
                    {link.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
