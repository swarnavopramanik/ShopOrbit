"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res || {});
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      {Object.values(providers).map((provider: any) => (
        <button
          key={provider.name}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}
