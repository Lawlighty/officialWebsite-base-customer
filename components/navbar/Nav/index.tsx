import { FC, useContext, useState } from "react";
import { UserAgentContext } from "@/stores/userAgent";
import { Nav, Avatar, Dropdown } from "@douyinfe/semi-ui";
import {
  IconMenu,
  IconHome,
  IconGift,
  IconUserGroup,
  IconBriefcase,
} from "@douyinfe/semi-icons";
import { SideSheet } from "@douyinfe/semi-ui";
import { Environment, Themes } from "@/constants/enum";
import { ThemeContext } from "@/stores/theme";

interface IMode {
  mode?: "horizontal" | "vertical";
}
const NavComp = ({}) => {
  const { userAgent } = useContext(UserAgentContext);
  const { theme } = useContext(ThemeContext);
  const [openSideSheet, setOpenSideSheet] = useState<boolean>(false);
  const NavMenu = (props: IMode) => {
    const { mode = "horizontal" } = props;
    return (
      <Nav
        style={{ background: "none", border: "none" }}
        mode={mode}
        items={[
          { itemKey: "home", text: "首页", icon: <IconHome /> },
          { itemKey: "scheme", text: "解决方案", icon: <IconBriefcase /> },
          { itemKey: "inst", text: "网站实例", icon: <IconGift /> },
          {
            itemKey: "about-us",
            text: "关于我们",
            icon: <IconUserGroup />,
            items: [
              {
                itemKey: "enterprise-culture",
                text: "公司文化",
              },

              {
                itemKey: "join-us",
                text: "加入我们",
              },
            ],
          },
        ]}
        onSelect={(key) => console.log(key)}
      />
    );
  };
  return (
    <div
      className={
        theme === Themes.dark ? "semi-always-dark" : "semi-always-light"
      }
    >
      {userAgent !== Environment.mobile ? (
        <NavMenu></NavMenu>
      ) : (
        <div className="flex items-center pr-4 cursor-pointer">
          <IconMenu
            onClick={() => {
              setOpenSideSheet(true);
            }}
          />

          <>
            <SideSheet
              title="~/(^v^)\~"
              visible={openSideSheet}
              width="16rem"
              onCancel={() => setOpenSideSheet(!openSideSheet)}
            >
              <NavMenu mode="vertical"></NavMenu>
            </SideSheet>
          </>
        </div>
      )}
    </div>
  );
};

export default NavComp;
