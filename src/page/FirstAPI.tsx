// import React, { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// const FirstAPI = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Products
//       </h1>
//       <div className="grid lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-48 w-full object-contain p-4 bg-gray-100"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {product.title}
//               </h2>
//               <p className="text-blue-600 font-bold text-xl mt-2">
//                 ${product.price.toFixed(2)}
//               </p>
//               <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FirstAPI;
