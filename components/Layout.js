import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>EC site</title>
      </Head>
      <header>
        <nav className="bg-yellow-600 w-screen static">
          {/* ロゴ */}
          <div className="flex items-center pl-8 h-14 justify-end">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  // data-testid="home-nav"
                  className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
                >
                  商品一覧
                </a>
              </Link>
            </div>
            <Link href="/cart">
              <a
                // data-testid="home-nav"
                className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
              >
                カート
              </a>
            </Link>
            <Link href="/login">
              <a
                // data-testid="home-nav"
                className="text-white hover:bg-yellow-700 px-3 py-2 rounded"
              >
                ログイン
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen">{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};
export default Layout;
