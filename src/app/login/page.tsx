import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  //TODO > criar logo
  //TODO > melhorar layout
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full">
      <div className="flex flex-col gap-4 max-w-xl">
        {/* Logo */}

        {/* <Image/> */}
        <h1 className="text-center text-4xl font-bold">Welcome</h1>
        <p className="text-center text-neutral-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie,
          neque non mattis aliquam, nisi nisl aliquet elit, nec tincidunt nisi
          nisl ac nisi. Sed molestie, neque non mattis aliquam, nisi nisl
          aliquet elit, nec tincidunt nisi nisl ac nisi. Sed molestie, neque non
          mattis aliquam, nisi nisl aliquet elit, nec tincidunt nisi nisl ac
          nisi.
        </p>
        <SignInButton>
          <Button variant="outline" className="w-full">
            <LogInIcon className="mr-2 h-4 w-4" />
            Login
          </Button>
        </SignInButton>
      </div>
    </div>
  );
}
