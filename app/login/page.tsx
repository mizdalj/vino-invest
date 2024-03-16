import "./login.css";

import LoginForm from "@/components/form/login-form";
import Link from "next/link";

export default function Page() {

  return (
    <div className="loginpage">
      <main>
        <LoginForm/>
      </main>
    </div>
  )
}
