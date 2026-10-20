import "./globals.css";

export const metadata = {
  title: "IBAN Validator - Free European IBAN Checker",
  description: "Validate any European IBAN instantly. Free, fast, and private.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
              IBAN Validator
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/iban-validator">Tool</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 text-center p-4 mt-8 text-sm text-gray-600">
          © 2025 IBAN Validator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
