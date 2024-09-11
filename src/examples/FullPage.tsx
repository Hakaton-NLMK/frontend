import React, { useState } from "react";
import * as DS from "@nlmk/ds-2.0";

const CustomPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const path =
    "https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleOpenUser = () => {
    // Add logic for opening user profile or settings
    console.log("Open user profile/settings");
  };

  return (
    <DS.Grid>
      <DS.Grid.Row>
        <DS.Grid.Column width="auto">
          <DS.Sidebar
            key="vertical"
            orientation="vertical"
            allowFavorites
            isLoggedIn={isLoggedIn}
            onLogout={() => setIsLoggedIn(false)}
            onLogin={() => setIsLoggedIn(true)}
            onOpenUser={handleOpenUser}
            currentPath={currentPath}
          >
            <DS.Sidebar.Avatar imageSrc="" />
            <DS.Sidebar.MenuItem
              path="cars"
              label="Задание на добавление"
              position="top"
              icon="IconKovsh32"
              onClick={() => setCurrentPath("cars")}
            >
              <DS.Sidebar.SubmenuItem
                path="porsche"
                label="porsche"
                image={path}
                onClick={() => setCurrentPath("porsche")}
              />
              <DS.Sidebar.SubmenuItem
                path="volksvagen"
                label="volksvagen"
                image={path}
                onClick={() => setCurrentPath("volksvagen")}
              >
                <DS.Sidebar.SubmenuItem
                  path="polo"
                  label="polo"
                  onClick={() => setCurrentPath("polo")}
                />
                <DS.Sidebar.SubmenuItem
                  path="tiguan"
                  label="tiguan"
                  onClick={() => setCurrentPath("tiguan")}
                />
                <DS.Sidebar.SubmenuItem
                  path="multivan"
                  label="multivan"
                  onClick={() => setCurrentPath("multivan")}
                  disabled
                />
              </DS.Sidebar.SubmenuItem>
              <DS.Sidebar.SubmenuItem
                path="toyota"
                label="toyota"
                image={path}
                onClick={() => setCurrentPath("toyota")}
              >
                <DS.Sidebar.SubmenuItem
                  path="supra"
                  label="supra"
                  onClick={() => setCurrentPath("supra")}
                />
                <DS.Sidebar.SubmenuItem
                  path="tundra"
                  label="tundra"
                  onClick={() => setCurrentPath("tundra")}
                />
              </DS.Sidebar.SubmenuItem>
              <DS.Sidebar.SubmenuItem
                path="mazda"
                label="mazda"
                image={path}
                onClick={() => setCurrentPath("mazda")}
              />
            </DS.Sidebar.MenuItem>
            <DS.Sidebar.MenuItem
              path="bands"
              label="bands"
              position="top"
              icon="IconBunkerOutlined32"
              onClick={() => setCurrentPath("bands")}
            >
              <DS.Sidebar.SubmenuItem
                path="limp bizkit"
                label="limp bizkit"
                onClick={() => setCurrentPath("limp bizkit")}
              />
              <DS.Sidebar.SubmenuItem
                path="slipknot"
                label="slipknot"
                onClick={() => setCurrentPath("slipknot")}
              >
                <DS.Sidebar.SubmenuItem
                  path="corey taylor"
                  label="corey taylor"
                  onClick={() => setCurrentPath("corey taylor")}
                />
                <DS.Sidebar.SubmenuItem
                  path="mick thompson"
                  label="mick thompson"
                  onClick={() => setCurrentPath("mick thompson")}
                />
                <DS.Sidebar.SubmenuItem
                  path="jim root"
                  label="jim root"
                  onClick={() => setCurrentPath("jim root")}
                />
              </DS.Sidebar.SubmenuItem>
              <DS.Sidebar.SubmenuItem
                path="korn"
                label="korn"
                onClick={() => setCurrentPath("korn")}
              />
            </DS.Sidebar.MenuItem>
            <DS.Sidebar.MenuItem
              path="menu item"
              label="menu item"
              position="top"
              icon="IconLightningStroke32"
              onClick={() => setCurrentPath("menu item")}
            />
            <DS.Sidebar.MenuItem
              path="disabled item"
              label="disabled item"
              position="top"
              icon="IconMapPinaltOutlined32"
              disabled
              onClick={() => setCurrentPath("disabled item")}
            />
            <DS.Sidebar.MenuItem
              path="lorem ipsum"
              label="lorem ipsum"
              position="bottom"
              icon="IconInfoOutlined32"
              onClick={() => setCurrentPath("lorem ipsum")}
            >
              <DS.Sidebar.SubmenuItem
                path="dolor"
                label="dolor"
                onClick={() => setCurrentPath("dolor")}
              />
              <DS.Sidebar.SubmenuItem
                path="sit"
                label="sit"
                onClick={() => setCurrentPath("sit")}
              />
              <DS.Sidebar.SubmenuItem
                path="amet"
                label="amet"
                onClick={() => setCurrentPath("amet")}
              />
            </DS.Sidebar.MenuItem>
          </DS.Sidebar>
        </DS.Grid.Column>
        <DS.Grid.Column width="80%" style={{ zIndex: "-100" }}>
          <DS.Header title="Header" />
          <DS.Grid.Row>
            <DS.Grid.Column width="80%">
              {[...Array(9)].map((_, index) => (
                <DS.Input
                  key={`top-input-${index}`}
                  label={`Input ${index + 1}`}
                />
              ))}
            </DS.Grid.Column>
            <DS.Grid.Column width="20%">
              <DS.Button>Button 1</DS.Button>
              <DS.Button>Button 2</DS.Button>
            </DS.Grid.Column>
          </DS.Grid.Row>
          <DS.Tabs>
            <DS.Tabs.Tab
              label="Входящие"
              active={0 === Number(activeTab)}
              onClick={() => setActiveTab(0)}
            />
            <DS.Tabs.Tab
              label="Мои папки"
              active={1 === Number(activeTab)}
              onClick={() => setActiveTab(1)}
            />
            <DS.Tabs.Tab
              label="Спам"
              active={2 === Number(activeTab)}
              onClick={() => setActiveTab(2)}
              badgeNumber="91"
            >
              <DS.Tabs.Tooltip description="Сюда вы можете добавить текстподсказу для компонента">
                <DS.Tabs.Icon
                  name="IconInfo16"
                  containerSize={16}
                  htmlColor="var(--text-grey-500)"
                />
              </DS.Tabs.Tooltip>
            </DS.Tabs.Tab>
            <DS.Tabs.Tab
              label="Черновики"
              active={3 === Number(activeTab)}
              onClick={() => setActiveTab(3)}
              badgeNumber="2"
            />
          </DS.Tabs>

          <DS.Box width={350}>
            {Number(activeTab) === 0 && (
              <DS.Typography variant="Heading4" color="var(--steel-90)">
                Входящие
              </DS.Typography>
            )}
            {Number(activeTab) === 1 && (
              <DS.Typography variant="Heading4" color="var(--steel-90)">
                Мои папки
              </DS.Typography>
            )}
            {Number(activeTab) === 2 && (
              <DS.Typography variant="Heading4" color="var(--steel-90)">
                Папка с спамом
              </DS.Typography>
            )}
            {Number(activeTab) === 3 && (
              <DS.Typography variant="Heading4" color="var(--steel-90)">
                Черновики
              </DS.Typography>
            )}
          </DS.Box>
          <DS.Grid.Row>
            <DS.Grid.Column width="100%">
              {[...Array(11)].map((_, index) => (
                <DS.Input
                  key={`bottom-input-${index}`}
                  label={`Input ${index + 10}`}
                />
              ))}
            </DS.Grid.Column>
          </DS.Grid.Row>
          <DS.Grid.Row>
            <DS.Grid.Column width="100%">
              <DS.Button>Bottom Button 1</DS.Button>
              <DS.Button>Bottom Button 2</DS.Button>
            </DS.Grid.Column>
          </DS.Grid.Row>
        </DS.Grid.Column>
      </DS.Grid.Row>
    </DS.Grid>
  );
};

export default CustomPage;
