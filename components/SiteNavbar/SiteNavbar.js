import React from 'react'
import Link from 'next/link'
import { Menubar } from 'primereact/menubar'

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  )
})

const SiteNavbar = () => {
  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
    },
    {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash',
    },
    {
      separator: true,
    },
    {
      label: 'Export',
      icon: 'pi pi-fw pi-external-link',
    },
  ]

  return (
    <div>
      <Menubar model={items} />
      {/* <Navbar id="site-navbar" appearance="ghost">
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
        </Navbar> */}
    </div>
  )
}

export default SiteNavbar
