import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  metadataBase: new URL('https://promptopia-bek.vercel.app'),
  generator: "Next.js",
  category: 'technology',
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
  
  verification: {
    google: 'google',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
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
