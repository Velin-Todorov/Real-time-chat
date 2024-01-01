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
import { type RegisterForm, RegisterSchema } from "@/lib/validators/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";

type User = {
  firstName: string,
  lastName: string,
  email: string
  password: string,
  confirmPassword: string
}

const RegisterForm: FC = () => {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
  });

  async function onSubmit() {
    const formData = form.getValues()

    const request = await fetch('http://0.0.0.0:5000/auth/register', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
      }
    })
    if (request.status == 200){
      console.log(request.statusText)
    }
  }

  return (
    <>
    <header>
      <div className="px-6 py-10 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Create an account</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create an account and join your friends in the Social Circle
          </p>
        </div>
      </div>
    </header>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-black">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} className="block w-full border-2 py-1.5 rounded-full  border-slate-500 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className="block w-full border-2 py-1.5 rounded-full  border-slate-500 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm Password" type="password" {...field} className="block w-full border-2 py-1.5 rounded-full  border-slate-500 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</Button>
        </form>
      </Form>
      <p className="mt-10 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/login" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300 px-2">
          Log in to your account
        </a>
      </p>
    </div>
  </>
  );
}

export default RegisterForm;