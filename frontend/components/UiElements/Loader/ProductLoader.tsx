import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductLoader = () => (
  <ContentLoader
    speed={2}
    width={296}
    height={296}
    viewBox="0 0 296 296"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="-121" rx="0" ry="0" width="296" height="296" />
    <rect x="0" y="200" rx="0" ry="0" width="296" height="34" />
    <rect x="0" y="250" rx="0" ry="0" width="296" height="34" />
  </ContentLoader>
);

export default ProductLoader;
