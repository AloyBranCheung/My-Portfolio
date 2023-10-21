import { z } from "zod";

const errMinOneMsg = "Must contain at least 1 character.";

const contactFormValidationSchema = z.object({
  name: z.string().min(1, errMinOneMsg),
  email: z.string().email(),
  subject: z.string().min(1, errMinOneMsg),
  message: z.string().min(1, errMinOneMsg),
});

export default contactFormValidationSchema;
