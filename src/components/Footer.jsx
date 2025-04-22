import Contact from './Contact';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1E293B] text-white text-center p-4 mt-auto">
        <Contact />
        <p className='py-8'>&copy; {currentYear} NetLab. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
