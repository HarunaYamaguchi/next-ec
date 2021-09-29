import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl">Products</h1>
        <div className="bg-white">
          <div>
            <div className="mt-6 mx-2 grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 rounded overflow-hidden shadow-lg">
              {data.products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.slug}`}>
                    <a>
                      <div className="w-full aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:aspect-none">
                        <Image
                          src={product.imageUrl}
                          alt="商品画像"
                          // className="object-center object-cover"
                          // layout="fill"
                          width={300}
                          height={300}
                          objectFit="contain"
                        />
                      </div>

                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-hl text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </a>
                          </h3>
                        </div>
                      </div>
                      <button>
                        <a>詳細を見る</a>
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
