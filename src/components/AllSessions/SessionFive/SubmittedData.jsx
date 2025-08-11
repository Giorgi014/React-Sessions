const SubmittedData = ({ submittedData, isDarkMode }) => {
  if (!submittedData) return null;
  return (
    <div
      className={`${
        isDarkMode ? "bg-green-800" : "bg-green-50"
      } p-6 rounded-lg border-l-4 border-green-500`}
    >
      <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300 flex items-center">
        <span className="text-2xl mr-2">🎉</span>
        Message Submitted Successfully!
      </h3>
      <div className="space-y-2 text-sm">
        <p className="text-green-600 dark:text-green-400">
          <strong>Submitted:</strong> {submittedData.submittedAt}
        </p>
        <p className="text-green-600 dark:text-green-400">
          <strong>Name:</strong> {submittedData.fullName}
        </p>
        <p className="text-green-600 dark:text-green-400">
          <strong>Email:</strong> {submittedData.email}
        </p>
        <p className="text-green-600 dark:text-green-400">
          <strong>Subject:</strong> {submittedData.subject}
        </p>
        <p className="text-green-600 dark:text-green-400">
          <strong>Contact Method:</strong>{" "}
          {submittedData.contactMethod.replace("-", " ")}
        </p>
        <div className="text-green-600 dark:text-green-400">
          <strong>Message:</strong>
          <p className="mt-1 whitespace-pre-wrap bg-white dark:bg-gray-800 p-3 rounded border">
            {submittedData.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmittedData;
