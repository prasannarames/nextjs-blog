import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a frontend developer from India.
          connect with me on <a href="https://twitter.com/PrasannaRames">Twitter</a>
        </p>
        <p>
        
        </p>
      </section>
    </Layout>
  );
}