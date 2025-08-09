import { ContactForm } from "./SessionFiveRoute.jsx";
import { RiResetLeftFill } from "react-icons/ri";

const SessionFive = () => {
  return (
    <div className="w-screen p-4 md:p-8 bg-[#15151A]">
      <div className="flex justify-between items-center">
        <div className="max-w-7xl mb-8 mx-20">
          <h1 className="font-bold bg-gradient-to-r from-indigo-950 to-purple-300 bg-clip-text text-transparent text-4xl md:text-6xl">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-2 text-lg text-slate-500">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>
        <div className="flex gap-2 items-center justify-around cursor-pointer text-white w-25 h-12 bg-gray-900 hover:bg-gray-500 border-zinc-300 border rounded-md mx-20">
          <RiResetLeftFill />
          <p>Reset</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default SessionFive;
