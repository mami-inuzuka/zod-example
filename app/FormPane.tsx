"use client";

import { z } from "zod";

const userData = {
  name: "John Doe",
  email: "john@example",
  age: 25,
};

export const FormPane = () => {
  const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number().min(18, "You must be 18 or older"),
  });

  const result = userSchema.safeParse(userData);

  if (result.success) {
    console.log(result.data);
  } else {
    console.error(result.error.errors);
  }

  return <div>FormPane</div>;
};
