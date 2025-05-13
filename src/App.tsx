import FormDemo from "./pages/FormDemo";
import ProfileDemo from "./pages/ProfileDemo";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* App Header */}
      <header className="bg-white shadow-sm p-4 mb-8">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Wasserstoff UI Component Showcase
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1">
          A simple demo of reusable components built with React, TypeScript & TailwindCSS
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto space-y-10 px-4">
        {/* Section: Form Demo */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-1">Form Component Demo</h2>
          <FormDemo />
        </section>

        {/* Section: Profile Demo */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-1">Profile Card Demo</h2>
          <ProfileDemo />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-400 pb-4">
        © 2025 | Developed for Wasserstoff Internship
      </footer>
    </div>
  );
}

export default App;
