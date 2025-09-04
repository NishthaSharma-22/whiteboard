"use client";

import { ReactNode } from "react";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";
import { Loading } from "@/components/auth/loading";
import SignInPage from "@/app/sign-in/[[...sign-in]]/page";
if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL in your .env file");
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
export default function ConvexClerkProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated><SignInPage/></Unauthenticated>
    </ConvexProviderWithClerk>
  );
}
