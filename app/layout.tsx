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
      <body className="bg-gray-800 text-white"> 
        <Header /> 
        <main>{children}</main>
      </body>
    </html>
  );
}
