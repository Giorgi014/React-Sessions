const LivePreview = ({ formValues, isDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
        Live Preview
      </h3>
      <div className="space-y-4">
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Name:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
            !formValues.fullName ? 'italic' : 'font-medium'
          } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.fullName || 'Your name will appear here...'}
          </p>
        </div>
        
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Email:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
            !formValues.email ? 'italic' : 'font-medium'
          } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.email || 'Your email will appear here...'}
          </p>
        </div>
        
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Subject:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
            !formValues.subject ? 'italic' : 'font-medium'
          } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.subject || 'Your subject will appear here...'}
          </p>
        </div>
        
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Message:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
            !formValues.message ? 'italic' : 'font-medium'
          } whitespace-pre-wrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.message || 'Your message will appear here...'}
          </p>
        </div>
        
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Preferred Contact:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} capitalize font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.contactMethod?.replace('-', ' ') || 'email'}
          </p>
        </div>
        
        <div className="group">
          <span className="font-medium text-blue-600 dark:text-blue-400">Terms Agreed:</span>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {formValues.agreeTerms ? '✓ Yes' : '✗ No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;