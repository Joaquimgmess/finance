import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
  //TODO > criar logo
  //TODO > melhorar layout
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
        <Button variant="outline" className="w-full">
          <LogInIcon className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
    </div>
  );
}
