import React from 'react'
import Container from '@/components/homepage/Container';
import { getCategory } from '@/library';
import Category from "@/components/Category";
import styles from "@/styles/storePage.module.css";

const storeLayout = async({ children }) => {
  const categories = await getCategory(); // Fetch categories from your backend

  return (
    <Container>
      <div className={`${styles.categoryContainer} mx-4 my-3`}>
        <Category categories={categories} />
      </div>
      {children}
    </Container>
  )
};

export default storeLayout;
