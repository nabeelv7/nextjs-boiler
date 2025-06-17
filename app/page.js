import { auth } from "@/auth";
import ButtonLogout from "@/components/ButtonLogout";
import { ButtonSignIn } from "@/components/ButtonSignIn";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">This is the Landing Page!</h1>

      {/* if user exists, show this welcome statement */}
      {session && <p>Welcome {session.user.name}! 👋</p>}

      {/* if the session does exist, i.e the user has signed in, show the Logout button, else show the Login button */}
      {session ? (
        <ButtonLogout />
      ) : (
        <ButtonSignIn provider="github">Sign in with Github</ButtonSignIn>
      )}
    </div>
  );
}
