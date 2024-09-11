import React, { useState } from "react";
import * as DS from "@nlmk/ds-2.0";

const NavigationPanel: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("");

  return (
    <DS.Sidebar
      key="vertical"
      orientation="horizontal"
      allowFavorites
      currentPath={currentPath}
      onOpenUser={() => {
        /* Handle user profile opening */
      }}
    >
      <DS.Sidebar.Avatar imageSrc="logo.svg"></DS.Sidebar.Avatar>
      <DS.Sidebar.MenuItem
        path="home"
        label="Главная"
        position="top"
        icon="IconHomeOutlined24"
        onClick={() => setCurrentPath("home")}
      />
      <DS.Sidebar.MenuItem
        path="about"
        label="О нас"
        position="top"
        icon="IconInfoOutlined24"
        onClick={() => setCurrentPath("about")}
      />
      <DS.Sidebar.MenuItem
        path="contacts"
        label="Контакты"
        position="top"
        icon="IconPhoneCallContact24"
        onClick={() => setCurrentPath("contacts")}
      />
    </DS.Sidebar>
  );
};

export default NavigationPanel;
