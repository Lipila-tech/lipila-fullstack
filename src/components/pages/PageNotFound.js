import React from 'react';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find the page you were looking for.</p>
      <a href="/">Go back to the homepage</a>
    </div>
  );
};

export default PageNotFound;
