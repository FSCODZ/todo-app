// /app/layout.tsx
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Todo App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white"> {/* Lägg till bakgrund och textfärg här */}
        <Header /> {/* Lägg till Header */}
        <main>{children}</main>
      </body>
    </html>
  );
}
