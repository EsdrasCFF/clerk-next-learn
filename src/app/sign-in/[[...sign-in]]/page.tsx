import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <SignIn />
      <Link href='/forget-password'>
        Esqueci minha senha
      </Link>
    </div>
  )
}