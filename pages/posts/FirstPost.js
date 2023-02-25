import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1> first post</h1>
      <h2>
        <Link href="/">Bact to Home</Link>
      </h2>
    </Layout>
  );
}
