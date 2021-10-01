import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";
import Product from "../../models/ProductSchema";
import db from "../../utils/db";

export default function ProductDetail(props) {
  const { product } = props;

  if (!product) {
    return <div>商品はございません</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className="m-5 underline">
        <Link href="/">
          <a>商品一覧画面に戻る</a>
        </Link>
      </div>
      <div className="mx-20 mt-10">
        <div className="float-left">
          <Image
            src={product.imageUrl}
            alt="商品画像"
            className="rounded-2xl "
            // layout="fill"
            width={580}
            height={580}
            objectFit="contain"
          />
        </div>
        <div>
          <div className="py-24 px-4 grid items-center grid-cols-1 gap-y-8 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl">
            <p className="sm:text-xl md:text-2xl lg:text-4xl">{product.name}</p>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-xl">
              Mサイズ：{product.Mprice}円
              <select
                name="Msize"
                id="Msize"
                className="ml-6 py-0.5 px-0.5 bg-gray-400 rounded"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </p>
            <p className="text-xl">
              Lサイズ：{product.Lprice}円
              <select
                name="Lsize"
                id="Lsize"
                className="ml-6 py-0.5 px-0.5 bg-gray-400 rounded m-auto"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </p>
            <button
              type="submit"
              className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-md w-auto"
            >
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
