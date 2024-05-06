"use client";

import { login } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className="flex flex-col gap-5 bg-cyan-100 p-10">
      <h2 className="font-bold text-xl"> Login </h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="w-full bg-white roudned-lg px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="w-full bg-white roudned-lg px-4 py-2"
        />
      </div>
      {state && <p className="text-red-600 text-base">{state}</p>}
      <button type="submit" className="bg-gray-900 text-white uppercase py-3">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
