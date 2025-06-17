"use client";

import { signOut } from "next-auth/react";
import IconLogout from "./Icons";
import { useState } from "react";

export default function ButtonLogout() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      onClick={() => {
        // when button is clicked then show the spinner and signOut
        if (isLoading) return;
        setIsLoading(true);
        signOut();
      }}
      className="btn btn-error"
    >
      {/* show the loading spinner when the button is clicked */}
      {isLoading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        <IconLogout color="black" size="20" />
      )}
      Logout
    </button>
  );
}
