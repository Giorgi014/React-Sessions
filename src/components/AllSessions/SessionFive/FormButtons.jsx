const FormButtons = ({ isValid, isSubmitting, handleReset }) => {
  return (
    <div className="flex gap-4">
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          isValid && !isSubmitting
            ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 hover:shadow-lg'
            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
        } ${isSubmitting ? 'animate-pulse' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <button
        type="button"
        onClick={handleReset}
        className={`px-6 py-3 rounded-lg font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${
          // choose neutral border background behavior
          'border-gray-300 hover:bg-gray-50'
        }`}
      >
        Reset
      </button>
    </div>
  );
};

export default FormButtons;