import React from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

const SiteNavbar = () => {
  return (
    <div>
      <Navbar id="site-navbar" appearance="ghost">
          <Navbar.Brand href="/">JNXVLN</Navbar.Brand>
          <Nav>
            <Nav.Item as={NavLink} href="/" icon={<HomeIcon />}>
              Home
            </Nav.Item>

            <Nav.Item as={NavLink} href="/news">
              News
            </Nav.Item>

            
            <Nav.Item as={NavLink} href="/about">About</Nav.Item>

            <Nav.Menu title="Projects">
              <Nav.Item as={NavLink} href="/projects">All Projects</Nav.Item>
              <Nav.Item as={NavLink} href="/projects">JavaScript</Nav.Item>
              <Nav.Item as={NavLink} href="/projects">NodeJS</Nav.Item>
            </Nav.Menu>
          </Nav>
          {/* <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
          </Nav> */}
        </Navbar>
    </div>
  )
}

export default SiteNavbar
