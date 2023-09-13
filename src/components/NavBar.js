import React from 'react';

function NavBar() {
  const links = ['home', 'about', 'projects'];
  const linkElements = links.map((e) => {
    return (
      <a key={e} href={'#' + e}>
        {e}
      </a>
    );
  });
  return <nav>{linkElements}</nav>;
}

export default NavBar;
