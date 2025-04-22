import { motion } from "framer-motion";
import OSLogo from "../assets/OSLogo.svg";
import DMJLogo from "../assets/DMJLogo.svg";
import SBDLogo from "../assets/SBDLogo.svg";
import { Link } from "react-router-dom";

function Home() {
const modules = [
    {
        title: "Sistem Operasi",
        desc: "Pelajari dasar-dasar manajemen proses, memori, dan sistem file.",
        logo: OSLogo,
        path: "/os",
    },
    {
        title: "Sistem Basis Data",
        desc: "Kenali konsep relasional, query SQL, dan manajemen database.",
        logo: SBDLogo,
        path: "/sbd",
    },
    {
        title: "Desain Manajemen Jaringan",
        desc: "Pahami infrastruktur dan desain jaringan yang efisien dan aman.",
        logo: DMJLogo,
        path: "/dmj",
    },
];

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4"
            >
            Selamat Datang di <span className="text-cyan-600">NetLab</span>
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-12"
            >
            Jelajahi berbagai modul pembelajaran untuk mendalami ilmu komputer dan jaringan dengan pendekatan praktikal.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((modul, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                    scale: 1.04,
                    y: -2,
                    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
                }}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 ease-in-out delay-100 will-change-transform"
                >
                <motion.img
                    src={modul.logo}
                    alt={modul.title}
                    className="h-24 w-24 mb-4 transition-all duration-150 ease-in-out"
                    whileHover={{ scale: 1.1 }}
                />
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    {modul.title}
                </h2>
                <p className="text-slate-600 mb-4">{modul.desc}</p>
                <Link
                    to={modul.path}
                    className="mt-auto inline-block bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition-all duration-200 ease-in-out"
                >
                    Lihat Modul
                </Link>
                </motion.div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default Home;
