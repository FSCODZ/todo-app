export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  };
  
  export default function TodoLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main>{children}</main>  
    );
  }
  