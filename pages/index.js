import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/ProductSchema";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout title="home">
      <div>
        <p className="text-2xl">商品一覧</p>
        <div className="bg-white">
          <div>
            <div className="mt-6 mx-2 grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 rounded overflow-hidden shadow-lg">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.slug}`} passHref>
                    <a>
                      <div className="w-full aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:aspect-none">
                        <Image
                          src={product.imageUrl}
                          alt="商品画像"
                          className="rounded"
                          width={300}
                          height={300}
                          objectFit="contain"
                        />
                      </div>

                      <div className="mt-4 flex justify-between">
                        <div>
                          <p className="text-hl text-gray-700 text-2xl">
                            <a href="#"></a>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </a>
                          </p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-md w-auto"
                      >
                        詳細を見る
                      </button>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
