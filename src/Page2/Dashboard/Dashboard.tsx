import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Dashboard = () => {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data))
      .catch((error) => console.error("error", error));
  });
  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="flex justify-between mb-10">
          <p className="text-4xl font-semibold">Welcome to our Store</p>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-3 rounded-lg outline-none border-[2px] p-3 focus:border-blue-600 focus:outline-none"
          />
        </div>
        {products.length === 0 ? (
          <div>no products found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <div className="bg-white border shadow-md min-h-0 rounded-xl  p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" object-contain bg-slate-100 h-48 mb-3 rounded-md"
                />
                <p>{product.category}</p>
                <p className="text-[15px] font-medium">{product.title}</p>
                <p className="text-blue-600 font-semibold mb-3">
                  {" "}
                  ${product.price.toFixed(2)}
                </p>
                <button className="px-3 py-3 flex items-center justify-center bg-blue-500 text-white w-full rounded-md">
                  Buy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
