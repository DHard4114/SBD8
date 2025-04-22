function SBD() {
    const modules = [
        "Modul 1 - Pengenalan Basis Data",
        "Modul 2 - SQL Dasar",
        "Modul 3 - Relasi dan Join",
        "Modul 4 - Normalisasi",
        "Modul 5 - Indexing dan Query Optimization",
        "Modul 6 - Transaksi dan ACID",
        "Modul 7 - Pemrograman Basis Data",
        "Modul 8 - Keamanan Basis Data",
        "Modul 9 - Backup dan Pemulihan Data"
        ];
    
        return (
        <div className="p-10 bg-gray-800 text-white min-h-screen dark:bg-gray-900 dark:text-gray-300">
            <h1 className="text-4xl font-bold mb-6 text-cyan-500">Modul Praktikum Sistem Basis Data</h1>
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

export default SBD;
