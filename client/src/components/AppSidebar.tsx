import { Sidenav, Nav, Toggle } from "rsuite";
import WechatCustomerOutlineIcon from "@rsuite/icons/WechatCustomerOutline";
import ToolsIcon from "@rsuite/icons/Tools";
import CodeIcon from "@rsuite/icons/Code";
import SettingIcon from "@rsuite/icons/Setting";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import { Link } from "react-router-dom";
import React from "react";

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
  },
];

//Returns navigation sidebar
export function AppSidebar({
  expanded,
  setExpanded,
  className,
}: {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  className?: string;
}) {
  const [activeKey, setActiveKey] = React.useState("1");

  return (
    <div className={className}>
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        className="sidenav will-change-contents h-full max-h-dvh"
        style={{ direction: "rtl" }}
      >
        <Sidenav.Body
          className={`
          ${
            expanded
              ? "overflow-y-auto scroll-smooth will-change-scroll snap-y" /* only is scrollable when expanded */
              : ""
          }
          h-full`}
        >
          <Nav
            activeKey={activeKey}
            onSelect={setActiveKey}
            style={{ direction: "ltr" }}
          >
            <Nav.Item
              as={Link}
              to="/Chat"
              className="snap-start"
              eventKey="1"
              icon={<WechatCustomerOutlineIcon />}
            >
              Chat
            </Nav.Item>
            <Nav.Menu
              eventKey="2"
              title="Configuration"
              className="snap-start"
              icon={<ToolsIcon />}
            >
              <Nav.Item eventKey="2-1" as={Link} to="/NewConfiguration">
                Create new configuration
              </Nav.Item>
              <Nav.Item eventKey="2-2">
                {/* TODO insert path to subpage or add action */}
                Import configuration
              </Nav.Item>
              <Nav.Item eventKey="2-3" as={Link} to="/ManageConfigurations">
                Manage configurations
              </Nav.Item>
              <Nav.Item divider />
            </Nav.Menu>
            <Nav.Menu
              className="snap-start"
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              {/* TODO add webbage configurations/settings options */}
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={(expanded) => setExpanded(expanded)} /> {/* sidebar expansion toggle */}
      </Sidenav>
    </div>
  );
}
