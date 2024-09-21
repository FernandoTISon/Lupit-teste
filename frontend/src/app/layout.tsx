import '../styles/globals.css';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'FutLovers',
  description: 'Site para quem gosta de futebol',
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="pt-BR"> 
      <body>
        {children} 
      </body>
    </html>
  );
}