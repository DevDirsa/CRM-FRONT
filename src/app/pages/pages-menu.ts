import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Agentes",
    icon: "person-add-outline",
    link: "/agents/list",
    home: true,
  },
  {
    title: "Administradores",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
    home: true,
  },
  {
    title: "Cargas",
    icon: "cloud-upload-outline",
    link: "/loads/list",
    home: true,
  },
];
