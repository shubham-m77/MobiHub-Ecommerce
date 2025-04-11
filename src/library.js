// Function to get categories
const getCategory = async () => {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products/category");
      const data = await res.json();
      return data.categories;  // Return the correct data, assuming you want the whole response
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];  // Return an empty array in case of error
    }
  };
  
  // Function to get products
  const getProducts = async (product_id=null) => {
    try {
      let API="https://fakestoreapi.in/api/products";
      if(product_id!=null){
        API+="/"+product_id;
      }
      const res = await fetch(API);
      const data = await res.json();  // Await the promise to get the actual data
      return product_id==null?data.products:data.product;  // Return the products
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];  // Return an empty array in case of error
    }
  };
  
  export { getCategory, getProducts };
  