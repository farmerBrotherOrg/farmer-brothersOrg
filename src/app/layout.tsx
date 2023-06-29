import Header from "@/app/_global-components/Header";
import "./globals.css";
import Footer from "./_global-components/Footer";
import Providers from "./_providers";
import ProgressBar from "./_global-components/ProgressBar";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Farmer Brother Inc",
  description: "Farmer Brothers Job Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className="bg-cream h-full flex flex-col">
        <Providers>
          <ProgressBar color="" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
