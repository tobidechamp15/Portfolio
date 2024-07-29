import Head from "next/head";

export const metadata = {
  title: "Oluwatobiloba Portfolio",
  description:
    "Showcasing the projects and skills of Oluwatobiloba, a dedicated and passionate developer specializing in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
