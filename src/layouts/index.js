import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';

import favicon from '../favicon.png';
import '../reset.css';

import Page from './Page';

export default ({ location, ...props }) => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <Page {...props} />
      <script>
        {`
      if (typeof window === 'undefined') {
        return false;
      }

      caches.keys().then(cacheKeys => {
        if (!cacheKeys.includes(oldCacheKey)) {
          console.log('ok cache!', cacheKeys);
          return false;
        }
      
        console.log('old cache!', cacheKeys);
        return caches.delete(oldCacheKey);
      });
      `}
      </script>
    </div>
  );
};
