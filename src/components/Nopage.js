import React from 'react';
import errorNoPage from '../images/errorPageNotFound.svg';
import { Link } from "react-router-dom";

function NoPage () {
  return (
    <section>
      <img src={errorNoPage} alt="Error 404" />
      <h1>404</h1>
      <h6>Page not found</h6>
      <p>The page you are looking for might have been removed had its name changed or its temporarilly unavailable</p>
    </section>

  )
}

export default NoPage;
