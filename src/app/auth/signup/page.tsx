import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>

        {/* Signup Form */}
        <div className="my-4 h-1 bg-muted" />

        {/* OAuth Links */}
        <div className="my-4 h-1 bg-muted" />

        {/* Go to Signin Link */}
        <div className="my-4 h-1 bg-muted" />
        <p>
          Already have an account? Click{" "}
          <Button
            variant="link"
            size="sm"
            className="px-0 text-blue-700"
            asChild
          >
            <Link href="/auth/signin">here</Link>
          </Button>{" "}
          to sign in.
        </p>
      </div>
    </main>
  );
}
