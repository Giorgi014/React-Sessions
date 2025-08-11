import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormSchema from "./contactFormSchema";

import {
  ContactFormHeader,
  ContactFormFields,
  FormButtons,
  LivePreview,
  ValidationStatus,
  SubmittedData,
  SuccessToast,
} from "./SessionFiveRoute.jsx";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      contactMethod: "email",
      agreeTerms: false,
    },
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const formValues = watch();

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        Object.entries(parsedData).forEach(([key, value]) => {
          setValue(key, value);
        });
      } catch (error) {
        console.error("Error loading saved form data:", error);
      }
    }
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const submissionData = {
      ...data,
      submittedAt: new Date().toLocaleString(),
    };
    setSubmittedData(submissionData);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
    setShowSuccessToast(false);
    localStorage.removeItem("contactFormData");
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white min-h-screen"
    : "bg-gray-50 text-gray-900 min-h-screen";

  return (
    <div className={`${themeClasses} transition-colors duration-300`}>
      <SuccessToast show={showSuccessToast} />

      <div className="container mx-auto px-4 py-8">
        <ContactFormHeader
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <ContactFormFields
                register={register}
                errors={errors}
                formValues={formValues}
                isDarkMode={isDarkMode}
              />
              <FormButtons
                isValid={isValid}
                isSubmitting={isSubmitting}
                handleReset={handleReset}
              />
            </form>
          </div>

          <div className="space-y-6">
            <LivePreview formValues={formValues} isDarkMode={isDarkMode} />
            <ValidationStatus isValid={isValid} errors={errors} />
            <SubmittedData
              submittedData={submittedData}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
