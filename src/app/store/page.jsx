// src/app/store/page.jsx
import styles from "@/styles/storePage.module.css";
import Container from '@/components/homepage/Container';
import {getProducts } from '@/library';
import ProductBox from "@/components/homepage/ProductBox";
// import Category from "@/components/Category";

// React Server Component - Direct data fetching
const StorePage = async () => {
  // SSR: Fetch categories and products on the server
  const products = await getProducts(); // Fetch products from your backend

  return (
  
      <div className={styles.productSection}>
        <div className="d-flex align-items-center flex-column">
        <h3 className={styles.productsHeading}>Products</h3>
        <hr className={`${styles.primary_hr}`} width="100px" />
        </div>
        <ProductList products={products} />
      </div>
  );
};

// ProductList component - Displays products
const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      <div className="row mx-0">
        {products?.map((product) => (
          <div className="col-6 col-md-4 col-lg-3 mb-md-4 p-0 px-lg-1">
            <ProductBox product={product}  key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
