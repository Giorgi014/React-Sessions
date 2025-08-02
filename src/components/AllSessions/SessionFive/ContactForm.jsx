import { Input } from "./SessionFiveRoute.jsx";

const ContactForm = () => {
  return (
    <div>
      <form className="bg-[#5C5C62] rounded-md p-5">
      <label
        htmlFor="full name"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Full Name *
      </label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
      />
      <label
        htmlFor="email"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Email Address *
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
      />
      <label
        htmlFor="subject"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Subject *
      </label>
      <Input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter the subject"
      />
      <label
        htmlFor="message"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
      ></textarea>
    </form>
    </div>
  );
};

export default ContactForm;
