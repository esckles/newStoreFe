// import { useEffect, useState } from "react";
// import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
//   state: boolean;
// }

// const SecondAPI = () => {
//   const [search, setsearch] = useState<string>("");
//   const [products, setProducts] = useState<Product[]>([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products?sort=desc")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error", error));
//   });

//   const filterdata = products.filter((fetch: Product) =>
//     fetch.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const changeState = (id: number) => {
//     const stateData = products.find((el: Product) => el.id === id);
//     if (stateData) {
//       stateData.state = !stateData.state;
//     }
//     setProducts([...products]);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <div className="w-full flex">
//         <p className="w-full font-semibold text-4xl flex gap-4">Our Product</p>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="p-2 rounded-xl outline-none focus:outline-none focus:border-blue-500 border-[2px]"
//           onChange={(e) => {
//             setsearch(e.target.value);
//           }}
//         />
//       </div>

//       {filterdata.length === 0 ? (
//         <p>No product found</p>
//       ) : (
//         <div className="shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filterdata.map((product: Product) => (
//             <div className="shadow-xl transition-shadow overflow-hidden rounded-xl hover:shadow-xl bg-white p-3 gap-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-contain bg-gray-100 "
//               />
//               <p className="text-md font-semibold">{product.category}</p>
//               <p className="text-1xl font-semibold text-gray-500 mb-2">
//                 {product.title}
//               </p>
//               <div className="flex w-full justify-between mb-4">
//                 <p className="text-xl text-blue-500 font-semibold mb-3 ">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => {
//                     changeState(product.id);
//                     console.log("Clicked", product);
//                   }}
//                 >
//                   {product.state ? (
//                     <MdFavorite size={20} className="text-red-600" />
//                   ) : (
//                     <MdFavoriteBorder size={20} />
//                   )}
//                 </button>
//               </div>
//               <button className="w-full rounded-lg bg-blue-600 text-white py-3">
//                 Buy
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SecondAPI;
