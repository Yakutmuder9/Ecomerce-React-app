import * as Pages from "../pages";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../components/Icons/Icons";
import { FaClipboardList, FaHandPaper, FaUsers } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import {
  FcCancel,
  FcCustomerSupport,
  FcSalesPerformance,
} from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { BsBarChartFill, BsCart2, BsSegmentedNav } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";

let sideNavitems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
    component: Pages.Dashboard,
    layout: "/admin/dashboard",
  },
  {
    name: "Orders",
    category: "orders",
    icon: FaClipboardList,
    layout: "/admin/orders",
    views: [
      {
        path: "/all-orders",
        name: "All Orders",
        icon: FaClipboardList,
        component: Pages.AllOrders,
      },
      {
        path: "/cancelled-orders",
        name: "Cancelled Orders",
        icon: FcCancel,
        component: Pages.CancelledOrders,
      },
      {
        path: "/completed-orders",
        name: "Completed Orders",
        icon: GrCompliance,
        component: Pages.CompletedOrders,
      },
      {
        path: "/on-hold-orders",
        name: "On Hold Orders",
        icon: FaHandPaper,
        component: Pages.OnHoldOrders,
      },
    ],
  },

  {
    name: "Customers",
    category: "customers",
    icon: PersonIcon,
    layout: "/admin/customers",
    views: [
      {
        path: "/all-cusomers",
        name: "All Customers",
        icon: FaUsers,
        component: Pages.AllCustomers,
      },
      {
        path: "/add-customer",
        name: "Add Customer",
        icon: FiUserPlus,
        component: Pages.AddCustomer,
      },
      {
        path: "/customer-segmentation",
        name: "Customer Segmentation",
        icon: BsSegmentedNav,
        component: Pages.CustomerSegmentation,
      },
      {
        path: "/customer-support",
        name: "Customer Support",
        icon: FcCustomerSupport,
        component: Pages.CustomerSupport,
      },
    ],
  },

  {
    name: "Products",
    category: "products",
    icon: BsCart2,
    layout: "/admin/products",
    views: [
      {
        path: "/all-products",
        name: "All Products",
        icon: PersonIcon,
        component: Pages.AllProducts,
        layout: "/admin",
      },
      {
        path: "/add-product",
        name: "Add Product",
        icon: DocumentIcon,
        component: Pages.AddProduct,
        layout: "/admin",
      },
      {
        path: "/brands",
        name: "Brands",
        icon: DocumentIcon,
        component: Pages.Brands,
        layout: "/admin",
      },
      {
        path: "/categories",
        name: "Categories",
        icon: DocumentIcon,
        component: Pages.Categories,
        layout: "/admin",
      },
      {
        path: "/inventory-management",
        name: "Inventory Management",
        icon: PersonIcon,
        component: Pages.InventoryManagement,
        layout: "/admin",
      },
      {
        path: "/product-attributes",
        name: "Product Attributes",
        icon: DocumentIcon,
        component: Pages.ProductAttributes,
        layout: "/admin",
      },
      {
        path: "/product-reviews",
        name: "Product Reviews",
        icon: DocumentIcon,
        component: Pages.ProductReviews,
        layout: "/admin",
      },
      {
        path: "/product-variationst",
        name: "Product Variations",
        icon: DocumentIcon,
        component: Pages.ProductVariations,
        layout: "/admin",
      },
    ],
  },

  {
    name: "Marketing",
    category: "marketing",
    icon: SiMarketo,
    layout: "/admin/marketing",
    views: [
      {
        path: "/all-coupons",
        name: "All Coupons",
        icon: PersonIcon,
        component: Pages.AllCoupons,
      },
      {
        path: "/add-coupons",
        name: "Add Coupon",
        icon: DocumentIcon,
        component: Pages.AddCoupon,
      },
      {
        path: "/promotions",
        name: "Promotions",
        icon: DocumentIcon,
        component: Pages.Promotions,
      },
      {
        path: "/discount",
        name: "Discounts",
        icon: DocumentIcon,
        component: Pages.Discounts,
      },
    ],
  },

  {
    name: "Sales",
    category: "sales",
    icon: BsBarChartFill,
    layout: "/admin/sales",
    views: [
      {
        path: "/analytics",
        name: "Analytics",
        icon: PersonIcon,
        component: Pages.Analytics,
      },
      {
        path: "/average-order-value",
        name: "Average Order Value",
        icon: DocumentIcon,
        component: Pages.AverageOrderValue,
      },
      {
        path: "/conversion",
        name: "Conversion",
        icon: DocumentIcon,
        component: Pages.Conversion,
      },
      {
        path: "/overview",
        name: "Overview",
        icon: DocumentIcon,
        component: Pages.Overview,
      },
      {
        path: "/revenue",
        name: "Revenue",
        icon: DocumentIcon,
        component: Pages.Revenue,
      },
    ],
  },
];
export default sideNavitems;
