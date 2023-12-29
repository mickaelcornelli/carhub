import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: 'Car Hub',
  description: 'Découvrez les meilleures voitures de location du monde',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
