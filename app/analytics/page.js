export default async function AnalyticsPage() {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3 text-center">
      <h1 className="text-5xl">🤫</h1>
      <h2 className="text-2xl font-bold">SHH! this page is restricted</h2>
    </div>
  );
}
