function DMJ() {
    const modules = [
        "Modul 1 - Pengenalan Jaringan",
        "Modul 2 - Topologi dan Media Transmisi",
        "Modul 3 - IP Addressing",
        "Modul 4 - Routing Dasar",
        "Modul 5 - Routing Lanjutan",
        "Modul 6 - Jaringan Lokal (LAN)",
        "Modul 7 - Jaringan Luas (WAN)",
        "Modul 8 - Keamanan Jaringan",
        "Modul 9 - Teknologi dan Protokol Jaringan"
        ];
    
        return (
        <div className="p-10 bg-gray-800 text-white min-h-screen dark:bg-gray-900 dark:text-gray-300">
            <h1 className="text-4xl font-bold mb-6 text-cyan-500">Modul Praktikum Desain Manajemen Jaringan</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((modul, index) => (
                <div
                key={index}
                className="bg-gray-700 p-6 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                <h2 className="text-xl font-semibold text-gray-200">{modul}</h2>
                </div>
            ))}
            </div>
        </div>
        );
    }
    
export default DMJ;
