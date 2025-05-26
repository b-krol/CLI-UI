import { Sidenav, Nav, Toggle } from 'rsuite';
import WechatCustomerOutlineIcon from '@rsuite/icons/WechatCustomerOutline';
import ToolsIcon from '@rsuite/icons/Tools';
import CodeIcon from '@rsuite/icons/Code';
import SettingIcon from '@rsuite/icons/Setting';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';
import React from 'react';

const listItems = [
  {
    text: "el1",
    url: "#",
  },
  {
    text: "el2",
    url: "#",
  },
  {
    text: "el3",
    url: "#",
  }
];

export function AppSidebar({
  expanded,
  setExpanded,
  className
}: {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  className?: string;
}) {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <div className={className}>
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} className='sidenav will-change-contents h-full max-h-dvh' style={{ direction: 'rtl' }}>
        <Sidenav.Body className='h-full overflow-y-auto scroll-smooth will-change-scroll snap-y'>
          <Nav activeKey={activeKey} onSelect={setActiveKey} style={{ direction: 'ltr' }}>
            <Nav.Item as={Link} to="/Chat" className='snap-start' eventKey="1" icon={<WechatCustomerOutlineIcon />}>
              Chat
            </Nav.Item>
            <Nav.Menu eventKey="2" title="Configuration" className='snap-start' icon={<ToolsIcon />}>
              <Nav.Item divider />
              <Nav.Item eventKey="2-1" as={Link} to="/NewConfiguration">
                Create new configuration
              </Nav.Item>
              <Nav.Item eventKey="2-2" as={Link} to="/NewConfiguration">{/* TODO insert path to subpage or add action */}
                Import configuration
              </Nav.Item>
              <Nav.Item eventKey="2-3" as={Link} to="/NewConfiguration">{/* TODO insert path to subpage or add action */}
                Manage configurations
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="3" title="Run" className='snap-start' placement="rightStart" icon={<CodeIcon />}>
              <Nav.Item eventKey="3-1">Help</Nav.Item>
              <Nav.Item eventKey="3-2">Version</Nav.Item>
              <Nav.Item eventKey="3-3">Show schema</Nav.Item>
              <Nav.Item eventKey="3-4">Extract schema</Nav.Item>
              <Nav.Item eventKey="3-5">Output file</Nav.Item>
              <Nav.Item eventKey="3-6">Token</Nav.Item>
              <Nav.Item eventKey="3-7">API key</Nav.Item>
              <Nav.Item eventKey="3-8">API url</Nav.Item>
              <Nav.Item eventKey="3-9">SSO url</Nav.Item>
              <Nav.Item eventKey="3-10">Login</Nav.Item>
              <Nav.Item eventKey="3-11">Test authentication</Nav.Item>
            </Nav.Menu>
            <Nav.Menu className='snap-start'
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
}
