const ValidationStatus = ({ isValid, errors }) => {
  return (
    <div className={`p-4 rounded-lg border ${
      isValid 
        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
        : 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
    }`}>
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-3 ${
          isValid ? 'bg-green-500' : 'bg-orange-500'
        }`}></div>
        <span className={`font-medium ${
          isValid ? 'text-green-700 dark:text-green-400' : 'text-orange-700 dark:text-orange-400'
        }`}>
          {isValid ? 'Form is valid and ready to submit!' : 'Please fix the errors above'}
        </span>
      </div>
      {!isValid && Object.keys(errors).length > 0 && (
        <div className="mt-2 text-sm">
          <p className="text-orange-600 dark:text-orange-400">
            {Object.keys(errors).length} error{Object.keys(errors).length > 1 ? 's' : ''} remaining
          </p>
        </div>
      )}
    </div>
  );
};

export default ValidationStatus;