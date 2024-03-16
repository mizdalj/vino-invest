import "./globals.css";
import cx from "classnames";
import {sfPro, inter} from "./fonts";
import Footer from "@/components/layout/footer";
import React from "react";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Vino Invest",
  description:
    "Wine trading platform for investors. Invest in wine and earn passive income.",
  metadataBase: new URL("https://vinoinvest.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
                                           children,
                                         }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={cx(sfPro.variable, inter.variable)}>
      <Header/>
      {children}
      <Footer/>
    </body>
    </html>
  );
}
