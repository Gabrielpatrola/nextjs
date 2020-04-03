import React from "react";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Meu App NextJS</title>
    </Head>
    <img width="200" src="/static/panda.jpg" />
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
