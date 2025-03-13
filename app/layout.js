import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./[lang]/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecomus - Ultimate Next.js E-commerce",
  description: "Modern e-commerce website built with developerarif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/logo/favicon.png"
        />
      </head>
      <body
        className={`${inter.className} preload-wrapper`}
        suppressHydrationWarning
      >
        <NextTopLoader
          color="#fe218b"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
