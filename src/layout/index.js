import './index.css';
import '../assets/fonts/league-mono.css';
import './style.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Header } from '../components/layout/Header';
import { LayoutRoot } from '../components/layout/LayoutRoot';
import { Sidebar } from '../components/layout/Sidebar';


const Layout = ({ location, children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `)

  const { siteMetadata } = site;

  return (
    <div className="layout">
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`} />
      </Helmet>
      <LayoutRoot>
        <Sidebar />
        <div className="layout-main">
          <div className="layout-main-content">
            <Header />
            {children}
          </div>
        </div>
      </LayoutRoot>
    </div>
  );
}

export default Layout;