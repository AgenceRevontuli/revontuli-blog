import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from './Footer';

//Pages 
import Home from './pages/Home';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="fr" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"></link>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <section>
        </section>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    color: #757575;
    margin: 0;
    p{
      font-size: 1.2em;
      line-height: 1.8em;
    }
    font-weight: 100;
    font-family: Helvetica;
    
  }
  h1, h2, h3, h4 {
    color: #2a343c!important;
    font-weight: 700;
    font-family: Poppins, arial;
    line-height: 1.4em;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  /* CTA */
  .cta--primary {
    font-size: 1.3em;
    font-weight: 500;
    color: #e84572;
    font-family: poppins;
    i {
      margin-left: 10px;
    }
  }
`;

const HeadContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
