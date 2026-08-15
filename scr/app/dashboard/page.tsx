export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold">
        Welcome to TEAMWORK
      </h1>

      <p className="mt-2 text-gray-500">
        Task & Engagement Assistant
      </p>

      <div className="mt-8 grid grid-cols-4 gap-5">

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            Total Tasks
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            24
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            In Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            8
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            Team Members
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            6
          </h2>
        </div>

      </div>

    </main>
  );
}