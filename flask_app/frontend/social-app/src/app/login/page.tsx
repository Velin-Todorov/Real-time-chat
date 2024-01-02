"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginForm, LoginSchema } from "@/lib/validators/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";

const LoginForm: FC = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit() {
    const formData = form.getValues()

    const request = await fetch('http://0.0.0.0:5000/auth/login', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
      }
    })

    console.log(request.statusText)
  }

  return (
    <>
    <header>
      <div className="px-6 py-10 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Log in</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Log in and join your friends in the Social Circle
          </p>
        </div>
      </div>
    </header>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-8">
      <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-black">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} className="block w-full border-2 py-1.5 rounded-full  border-slate-500 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} className="block w-full border-2 py-1.5 rounded-full  border-slate-500 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button onClick={() => {form.handleSubmit(onSubmit)()}} type="submit" className="flex justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</Button>
      </Form>
      <p className="mt-10 text-center text-sm text-gray-600">
        {`Don't have an account?`}
        <a href="/register" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300 px-2">
          Create an account
        </a>
      </p>
    </div>
  </>
  );
}

export default LoginForm;