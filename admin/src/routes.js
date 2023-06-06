import Dashboard from "./pages/Dashboard";
// import Tables from "views/Dashboard/Tables.js";
// import Billing from "views/Dashboard/Billing.js";
// import RTLPage from "views/RTL/RTLPage.js";
// import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
import Login from "./pages/auth/Login.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Products",
    name: "Products",
    icon: <StatsIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: <CreditIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Orders",
    icon: <SupportIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/users",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/dashboard",
        name: "Sign Out",
        icon: <DocumentIcon color="inherit" />,
        component: Login,
        layout: "/admin",
      },
      {
        path: "/users",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
