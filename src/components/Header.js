import React from "react";
import { Tab, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <section class="container-fluid header">
      <img
        className="header-image"
        src="/images/finkraft@2x.png"
        alt="finkraft"
      />
      <Tab.Container
        defaultActiveKey={"DASHBOARD"}
        // onSelect={(tab) => setActivetab(tab)}
      >
        <div className="dashboard-nav-section">
          <div className="container">
            <Nav variant="pills">
              {TABS.map((tab) => (
                <Nav.Item key={tab.key}>
                  <Nav.Link eventKey={tab.key}>{tab.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
      </Tab.Container>
      <div className="header-right ml-auto">
        <div className="notifications">
          <span>
            <img src="/images/icon/notification.svg" alt="" />
          </span>
        </div>
        <div className="user-drop d-flex">
          <p className="user-logo">
            <span>p</span>
          </p>
          <div className="user-name">
            <p>Purpleplum Digi</p>
            <div className="arrow-down">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TABS = [
  { key: "DASHBOARD", name: "Dashboard" },
  { key: "INVIOCES", name: "Invoices" },
  { key: "ESCALATIONS", name: "Escalations" },
  { key: "RECONCILITAION", name: "Reconciliation" },
  { key: "SETTINGS", name: "Settings" },
];
