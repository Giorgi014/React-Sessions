const ContactFormFields = ({ register, errors, formValues, isDarkMode }) => {
  return (
    <>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          placeholder="Enter your full name"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
            errors.fullName
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Enter your email address"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
            errors.email
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          placeholder="What is this about?"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
            errors.subject
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
          <span
            className={`text-sm ml-2 ${
              formValues.message?.length >= 10
                ? "text-green-600"
                : "text-gray-500"
            }`}
          >
            ({formValues.message?.length || 0}/10 min)
          </span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Tell us more about your inquiry..."
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-vertical ${
            errors.message
              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <fieldset>
          <legend className="block text-sm font-medium mb-3">
            Preferred contact method:
          </legend>
          <div className="space-y-2">
            {[
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "no-preference", label: "No Preference" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors"
              >
                <input
                  type="radio"
                  {...register("contactMethod")}
                  value={option.value}
                  className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {errors.contactMethod && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.contactMethod.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors">
          <input
            type="checkbox"
            {...register("agreeTerms")}
            className={`mr-2 mt-1 text-blue-600 focus:ring-2 focus:ring-blue-500 ${
              errors.agreeTerms ? "border-red-500" : ""
            }`}
          />
          <span className="text-sm">
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
            >
              terms and conditions
            </a>{" "}
            *
          </span>
        </label>
        {errors.agreeTerms && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.agreeTerms.message}
          </p>
        )}
      </div>
    </>
  );
};

export default ContactFormFields;
