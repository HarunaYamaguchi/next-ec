import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Store } from "../utils/Store";

const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <Head>
        <title>{title ? `${title} - EC site` : "EC site"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <header>
        <nav className="bg-yellow-600 w-screen static">
          {/* ロゴ */}
          <div className="flex items-center pl-8 h-14 justify-end">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  // data-testid="home-nav"
                  className="text-white hover:bg-yellow-700 px-3 py-2 rounded-md"
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
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
