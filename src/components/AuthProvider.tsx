"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthHandler>{children}</AuthHandler>
    </SessionProvider>
  );
};

const AuthHandler = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is logged in:", session?.user);
      // Example: You could fetch user-specific cart or data here
    }
  }, [session, status]);

  if (status === "loading") {
    return <p>Loading authentication...</p>; // Add a loading state while checking session
  }

  return <>{children}</>;
};

export default AuthProvider;





// "use client";
// import { SessionProvider } from "next-auth/react"

// type Props = {
//   children: React.ReactNode;
// };

// const AuthProvider = ({ children }: Props) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default AuthProvider;
