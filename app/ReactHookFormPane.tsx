"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  name: z.string().min(2, "2文字以上で入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  age: z.number().min(18, "18歳以上である必要があります"),
});

type User = z.infer<typeof userSchema>;

export const ReactHookFormPane = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register("age", { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <button type="submit">送信</button>
    </form>
  );
};
