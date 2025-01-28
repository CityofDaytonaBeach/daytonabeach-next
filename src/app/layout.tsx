import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "City of Daytona Beach",
  description: "Welcome to the official website of the City of Daytona Beach. Find information about city services, events, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      'primary': '#EF3E3D',
                      'dark': '#1F2937',
                      'brand-blue': {
                        DEFAULT: '#154777',
                        light: '#6FC5D8',
                        '50': 'rgb(21 71 119 / 0.05)',
                        '100': 'rgb(21 71 119 / 0.1)',
                        '200': 'rgb(21 71 119 / 0.2)',
                        '300': 'rgb(21 71 119 / 0.3)',
                        '400': 'rgb(21 71 119 / 0.4)',
                        '500': 'rgb(21 71 119 / 0.5)',
                        '600': 'rgb(21 71 119 / 0.6)',
                        '700': 'rgb(21 71 119 / 0.7)',
                        '800': 'rgb(21 71 119 / 0.8)',
                        '900': 'rgb(21 71 119 / 0.9)'
                      },
                      'brand-light': '#6FC5D8'
                    },
                    fontFamily: {
                      'dunbar': ['Dunbar Text', 'sans-serif'],
                      'yellowtail': ['Yellowtail', 'cursive'],
                      'sans': ['Inter', 'system-ui', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
