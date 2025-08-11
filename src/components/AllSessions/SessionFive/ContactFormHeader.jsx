const ContactFormHeader = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
          isDarkMode 
            ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
            : 'bg-gray-800 hover:bg-gray-700 text-white'
        }`}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
};

export default ContactFormHeader;