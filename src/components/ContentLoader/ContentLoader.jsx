import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#fcfcfc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="143" rx="3" ry="3" width="150" height="17" />
    <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
    <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
    <rect x="30" y="199" rx="3" ry="3" width="80" height="24" />
    <rect x="148" y="191" rx="3" ry="3" width="32" height="32" />
  </ContentLoader>
);

export default MyLoader;
