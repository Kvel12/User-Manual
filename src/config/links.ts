import { NavbarItem } from "@docusaurus/theme-common";
import { IAction } from "../components/Header/index";

interface ILinkConfig {
    actions: IAction[];
    navigators: NavbarItem[];
}

export const linksConfig: ILinkConfig = {
    actions: [
        {
            label: "Empezar",
            to: "/docs/introduction",
        },
    ],
    navigators: [
        {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentación",
        },
        {
            label: "GitHub",
            position: "right",
            href: "https://github.com/Kvel12/User-Manual",
        },
    ],
};
