import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
