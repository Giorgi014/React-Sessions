import z, { email } from "zod";
import { Input } from "./SessionFiveRoute.jsx";

const ContactForm = () => {
  const validation = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#5C5C62] rounded-md p-5 space-y-6 border bg-card text-card-foreground shadow-sm w-xl mx-20"
    >
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
      <p>Preferred Contact Method</p>
      <section className="flex flex-col">
        <div className="cursor-pointer">
          <input type="checkbox" id="check_email" className="cursor-pointer" />
          <label htmlFor="check_email" className="cursor-pointer ml-2">
            Email
          </label>
        </div>
        <div className="cursor-pointer mt-2">
          <input type="checkbox" id="check_phone" className="cursor-pointer" />
          <label htmlFor="check_phone" className="cursor-pointer ml-2">
            Phone
          </label>
        </div>
        <div className="cursor-pointer mt-2">
          <input
            type="checkbox"
            id="check_reference"
            className="cursor-pointer"
          />
          <label htmlFor="check_reference" className="cursor-pointer ml-2">
            No Reference
          </label>
        </div>
        <div className="cursor-pointer mt-4">
          <input type="checkbox" id="check_terms" className="cursor-pointer" />
          <label htmlFor="check_terms" className="cursor-pointer ml-2">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>
      </section>
      <button className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-300 cursor-pointer p-2 text-white rounded-md">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
