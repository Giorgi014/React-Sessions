import { ContactForm } from "./SessionFiveRoute.jsx";

const SessionFive = () => {
  return (
    <div className="w-screen bg-[#15151A]">
      <div className="flex justify-between items-center">
        <div className="animate-fade-in">
          <h1 class="font-bold bg-gradient-to-r from-indigo-950 to-purple-400 bg-clip-text text-transparent text-4xl md:text-6xl">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-2 text-lg text-slate-500">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>
        <div>reset</div>
      </div>
      <div className="flex justify-between items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default SessionFive;
