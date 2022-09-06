import { ProductList } from 'containers/ProductList';
import Head from 'next/head';
/* import styles from 'styles/Home.module.css'; */

export default function Home() {
  return (
    <>
      <Head>
        <title>YardSALE Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
