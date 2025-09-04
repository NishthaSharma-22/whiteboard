"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
  <div className="h-screen w-screen flex items-center justify-center">
    <SignIn/>
  </div>
);
}
