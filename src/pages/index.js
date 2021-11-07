import DetailCard from 'components/atoms/DetailCard';
import Head from 'next/head';
import Panel1 from '../components/Panel1/Panel1';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Nexus Explorer V2 </title>{' '}
        <meta name="description" content="Nexus Blockchain Statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Panel1 />
        <hr />
        <DetailCard />
      </main>
    </div>
  );
}
