'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setErrorMsg("All fields are required");
      return;
    }

    try {

            const resp = await fetch("/api/users/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ name,email,password })
            });
            const data = await resp.json();
            if(data.error){ setErrorMsg(data.error); return; }
      // Registration successful → Auto login
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password
      });

      if (res?.error) {
        setErrorMsg("Registration failed");
      } else {
        router.push("/"); // Redirect to Home after login
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      {errorMsg && <p className="text-red-600 mb-3 text-center">{errorMsg}</p>}

      <input
        className="w-full border p-2 mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="w-full py-2 bg-blue-600 text-white rounded"
      >
        Register
      </button>
    </div>
  );
}
