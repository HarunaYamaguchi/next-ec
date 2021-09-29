import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return <div>商品はございません</div>;
  }

  return (
    <Layout title={product.name}>
      <div className="m-5 underline">
        <Link href="/">
          <a>商品一覧画面に戻る</a>
        </Link>
      </div>
      <div>
        <div className="mx-20 mt-10 float-left">
          <Image
            src={product.imageUrl}
            alt="商品画像"
            className="rounded-2xl "
            // layout="fill"
            width={600}
            height={600}
            objectFit="contain"
          />
        </div>
        <div>
          <ul className="grid grid-cols-1 ">
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li>Mサイズ：{product.Mprice}円</li>
            <li>Lサイズ：{product.Lprice}円</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
