import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";
import data from "../../utils/data";
import Product from "../../models/ProductSchema";
import db from "../../utils/db";
import axios from "axios";
import { Store } from "../../utils/Store";

export default function ProductDetail(props) {
  // サイズの取得
  const [size, setSize] = useState("M");
  const changeSize = (e) => {
    setSize(e.target.value);
  };

  // 個数の取得
  const [buyNum, setBuyNum] = useState("1");
  const changeBuyNum = (e) => {
    setSize(e.target.value);
  };

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { product } = props;

  if (!product) {
    return <div>商品はございません</div>;
  }

  // const addToCart = async () => {
  //   const { data } = await axios.get(`/api/products/${product.id}`);
  //   dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  // };

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
            className="rounded-2xl"
            width={580}
            height={580}
            objectFit="contain"
          />
        </div>
        <div>
          <div className="py-24 px-4 grid items-center grid-cols-1 gap-y-8 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl">
            <p className="sm:text-xl md:text-2xl lg:text-4xl">{product.name}</p>
            <p className="flex-wrap text-gray-500">{product.description}</p>

            <div className="flex justify-content sm:text-xl md:text-xl lg:text-2xl">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="M"
                  onChange={(e) => changeSize(e)}
                />
                <span className="text-xl mx-3">M：{product.Mprice}円</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="L"
                  onChange={(e) => changeSize(e)}
                />
                <span className="text-xl mx-3">L：{product.Lprice}円</span>
              </label>
            </div>

            <div>
              ＊トッピング＊
              <div>
                {data.toppings.map((topping) => (
                  <div key={topping.id}>
                    <div>{topping.name}</div>
                    <label htmlFor="toppingSize">
                      <span className="mx-3">普通:</span>
                      <input
                        type="radio"
                        name="topping"
                        value={topping.Mprice}
                        className="mr-1"
                      />
                      {topping.Mprice}円
                    </label>
                    <label htmlFor="toppingSize">
                      <span className="mx-3">多め:</span>
                      <input
                        type="radio"
                        name="topping"
                        value={topping.Lprice}
                        className="mr-1"
                      />
                      {topping.Lprice}円
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/cart">
              <a>
                <button
                  type="submit"
                  className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-md w-auto"
                >
                  カートに追加
                </button>
              </a>
            </Link>
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
