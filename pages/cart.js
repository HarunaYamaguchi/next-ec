import React, { useContext } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function cartScreen() {
  return (
    <Layout>
      <div className="mb-10">ショッピングカート画面</div>
      <Link href="/order">
        <a className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-md w-auto">
          会計に進む
        </a>
      </Link>
    </Layout>
  );
}
