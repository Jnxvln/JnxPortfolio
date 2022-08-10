import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const SiteNavbar = () => {
  return (
    <div>
      <Navbar>
          <Navbar.Brand href="/">JNXVLN</Navbar.Brand>
          <Nav>
            <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>About</Nav.Item>
            <Nav.Menu title="Projects">
              <Nav.Item>All Projects</Nav.Item>
              <Nav.Item>Team</Nav.Item>
              <Nav.Menu title="Contact">
                <Nav.Item>Via email</Nav.Item>
                <Nav.Item>Via telephone</Nav.Item>
              </Nav.Menu>
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
