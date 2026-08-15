export default function Navbar() {
  return (
    <header className="fixed left-64 right-0 top-0 z-10 h-16 border-b bg-white px-8">
      
      <div className="flex h-full items-center justify-between">

        {/* Page title */}
        <div>
          <h2 className="text-lg font-semibold">
            Dashboard
          </h2>
        </div>

        {/* User */}
        <div className="flex items-center gap-4">

          <div className="text-right">
            <p className="text-sm font-medium">
              User
            </p>

            <p className="text-xs text-gray-500">
              Student
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
            U
          </div>

        </div>

      </div>

    </header>
  );
}