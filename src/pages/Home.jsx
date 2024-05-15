// import React from "react";
// import { useState,useEffect } from "react";
// import Product from "../components/Product";
// import Spinner from "../components/Spinner";

// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";

//   const [posts, setPosts] = useState([])

//   const [loading, setLoading] = useState(false);

//   async function fetchData() {

    

//     try{
//       setLoading(true);
//       console.log("inside the try block")
//       const res = await fetch(API_URL)

//       const data = await res.json()

//       console.log(data);

//       setPosts(data);

//       setLoading(false);
//     }

//     catch(error){
//       console.log("error aa gya bhai");

//       setPosts([]);
//     }

    
//   }


//   useEffect(() =>{
//     fetchData();
//   },[])

//   return (<div>
//     {
//       loading ? <Spinner/> : 

//       posts.length > 0 ? 

//       (<div>
//        { posts.map((post) => (
//         <Product key={post.id} post= {post}/>
//        )

              
//         )}
//       </div>) : 
//       <div>
//       <p>No data found</p>
//       </div>
//     }
//   </div>
    
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import Filter from "../components/Filter";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const categories = ["All", "women's clothing", "electronics", "jewelery", "men's clothing"];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
      setPosts([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className=" mx-auto">
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      <h2 className="text-center mt-2">{selectedCategory === "all" ? "All Products" : `Products in ${selectedCategory}`}</h2>
      {loading ? (
        <Spinner/>
      ) : filteredPosts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {filteredPosts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
