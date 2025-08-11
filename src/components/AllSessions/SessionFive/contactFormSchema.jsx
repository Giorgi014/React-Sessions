import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(1, { message: "Full name is required" })
    .min(2, { message: "Full name must be at least 2 characters" })
    .trim(),
  email: z.string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" }),
  subject: z.string()
    .min(1, { message: "Subject is required" })
    .min(3, { message: "Subject must be at least 3 characters" })
    .trim(),
  message: z.string()
    .min(1, { message: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters" })
    .trim(),
  contactMethod: z.enum(['email', 'phone', 'no-preference'], {
    errorMap: () => ({ message: 'Please select a valid contact method' })
  }),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and conditions' })
  })
});

export default contactFormSchema;