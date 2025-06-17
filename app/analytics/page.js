import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AnalyticsPage() {
  const session = await auth();

  await connectMongo();
  // get the user from the session.user.id, and only get the admin field.
  const user = await User.findById(session.user.id, { isAdmin: 1 });

  // if the user is not admin i.e the developer, then redirect to /
  if (!user.isAdmin) redirect("/");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3 text-center">
      <h1 className="text-5xl">🤫</h1>
      <h2 className="text-2xl font-bold">SHH! this page is restricted</h2>
    </div>
  );
}
