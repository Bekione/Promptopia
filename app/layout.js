import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  generator: "Next.js",
  applicationName: "Promptopia",
  referrer: "origin-when-cross-origin",
  keywords: ["Prompt", "Share", "Ai"],
  authors: [{ name: "Bereket", url: "https://promptopia-bek.vercel.app/" }],
  colorScheme: "light",
  creator: "Bereket Kinfe",
  publisher: "Vercel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
