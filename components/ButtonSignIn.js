"use client";

import { signIn } from "next-auth/react";
import { IconGithub, IconGoogle } from "./Icons";
import { useState } from "react";

export function ButtonSignIn({ provider, children }) {
  const [isLoading, setIsLoading] = useState(false);

  // if provider in props is github show the github button else the google button
  if (provider === "github") {
    return (
      <button
        onClick={() => {
          if (isLoading) return;
          setIsLoading(true);
          signIn("github");
        }}
        className="btn bg-black text-white border-black"
      >
        {isLoading ? (
          <div className="loading loading-spinner"></div>
        ) : (
          <IconGithub size="20" />
        )}
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        if (isLoading) return;
        setIsLoading(true);
        signIn("google");
      }}
      className="btn bg-white text-black border-[#e5e5e5]"
    >
      {isLoading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        <IconGoogle size="20" />
      )}
      {children}
    </button>
  );
}
