function OS() {
  const modules = [
    "Modul 1 - Pengantar Sistem Operasi",
    "Modul 2 - Manajemen Proses",
    "Modul 3 - Scheduling",
    "Modul 4 - Deadlock",
    "Modul 5 - Memori Virtual",
    "Modul 6 - Sistem File",
    "Modul 7 - I/O System",
    "Modul 8 - Keamanan Sistem Operasi",
    "Modul 9 - Jaringan dan Komunikasi"
  ];

  return (
    <div className="p-10 bg-gray-800 text-white min-h-screen dark:bg-gray-900 dark:text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-cyan-500">Modul Praktikum Sistem Operasi</h1>
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

export default OS;
