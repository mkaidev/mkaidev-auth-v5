import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SigninForm } from "./_components/signin-form";

export default function SignupPage() {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>

        {/* Signin Form */}
        <div className="my-4 h-1 bg-muted" />
        <SigninForm />

        {/* OAuth Links */}
        <div className="my-4 h-1 bg-muted" />

        {/* Go to Signup Link */}
        <div className="my-4 h-1 bg-muted" />
        <p>
          Don&apos;t have an account? Click{" "}
          <Button
            variant="link"
            size="sm"
            className="px-0 text-blue-700"
            asChild
          >
            <Link href="/auth/signup">here</Link>
          </Button>{" "}
          to sign up.
        </p>
      </div>
    </main>
  );
}
