"use client";
import React, { useState } from "react";
import {

  FacebookOutlined,
  HomeOutlined,
  MailOutlined,

} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: (<a href="/">
      Home
    </a>),
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: (<a href="/facebook">
      Facebook
    </a>),
    key: "facebook",
    icon: <FacebookOutlined />,
  },
  {
    label: (<a href="/zalo">
      Zalo
    </a>),
    key: "zalo",
    icon: <MailOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </header>
  );
};

export default Header;
