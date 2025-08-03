import { Input } from "./SessionFiveRoute.jsx";

const ContactForm = () => {
  return (
      <form className="bg-[#5C5C62] rounded-md p-5 space-y-6 border bg-card text-card-foreground shadow-sm">
        <p className="text-2xl font-semibold">Send us a message</p>
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
        className="w-full px-4 py-3 form-input resize-none flex min-h-[80px] rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></textarea>
    </form>
  );
};

export default ContactForm;
