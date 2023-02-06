import { FC, useContext, useEffect, useState } from "react";
import { UserAgentContext } from "@/stores/userAgent";
import { Nav, Avatar, Dropdown } from "@douyinfe/semi-ui";
import Router, { useRouter } from "next/router";
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

const NAV_LINKS: any = {
  "/": "/",
  "/scheme": "/scheme",
  "/inst": "/inst",
  "/culture": "/culture",
  "/join": "/join",
};
const NavComp = ({}) => {
  const router = useRouter();
  const { userAgent } = useContext(UserAgentContext);
  const { theme } = useContext(ThemeContext);
  const [openSideSheet, setOpenSideSheet] = useState<boolean>(false);
  useEffect(() => {
    console.log("router", router);
  }, [router]);
  const NavMenu = (props: IMode) => {
    const { mode = "horizontal" } = props;
    return (
      <Nav
        style={{ background: "none", border: "none" }}
        selectedKeys={[router?.pathname ?? "/"]}
        mode={mode}
        items={[
          { itemKey: "/", text: "首页", icon: <IconHome /> },
          { itemKey: "/scheme", text: "解决方案", icon: <IconBriefcase /> },
          { itemKey: "/inst", text: "网站实例", icon: <IconGift /> },
          {
            // itemKey: "about-us",
            itemKey: "/culture",
            text: "关于我们",
            icon: <IconUserGroup />,
            // items: [
            //   {
            //     itemKey: "/culture",
            //     text: "公司文化",
            //   },

            //   {
            //     itemKey: "/join",
            //     text: "加入我们",
            //   },
            // ],
          },
        ]}
        onSelect={({ itemKey = "/" }) => {
          console.log("itemKey", itemKey);
          Router.push({ pathname: NAV_LINKS?.[itemKey] });
        }}
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
