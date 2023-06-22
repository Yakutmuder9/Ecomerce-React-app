import * as Pages from "../pages";
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
    icon: FaUsers,
    component: Pages.Dashboard,
    layout: "/dash/dashboard",
  },
  {
    name: "Orders",
    category: "orders",
    icon: FaClipboardList,
    layout: "/dash/orders",
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
    icon: FaUsers,
    layout: "/dash/customers",
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
    layout: "/dash/products",
    views: [
      {
        path: "/all-products",
        name: "All Products",
        icon: FaUsers,
        component: Pages.AllProducts,
        layout: "/dash",
      },
      {
        path: "/add-product",
        name: "Add Product",
        icon: FaUsers,
        component: Pages.AddProduct,
        layout: "/dash",
      },
      {
        path: "/brands",
        name: "Brands",
        icon: FaUsers,
        component: Pages.Brands,
        layout: "/dash",
      },
      {
        path: "/categories",
        name: "Categories",
        icon: FaUsers,
        component: Pages.Categories,
        layout: "/dash",
      },
      {
        path: "/inventory-management",
        name: "Inventory Management",
        icon: FaUsers,
        component: Pages.InventoryManagement,
        layout: "/dash",
      },
      {
        path: "/product-attributes",
        name: "Product Attributes",
        icon: FaUsers,
        component: Pages.ProductAttributes,
        layout: "/dash",
      },
      {
        path: "/product-reviews",
        name: "Product Reviews",
        icon: FaUsers,
        component: Pages.ProductReviews,
        layout: "/dash",
      },
      {
        path: "/product-variationst",
        name: "Product Variations",
        icon: FaUsers,
        component: Pages.ProductVariations,
        layout: "/dash",
      },
    ],
  },

  {
    name: "Marketing",
    category: "marketing",
    icon: SiMarketo,
    layout: "/dash/marketing",
    views: [
      {
        path: "/all-coupons",
        name: "All Coupons",
        icon: FaUsers,
        component: Pages.AllCoupons,
      },
      {
        path: "/add-coupons",
        name: "Add Coupon",
        icon: FaUsers,
        component: Pages.AddCoupon,
      },
      {
        path: "/promotions",
        name: "Promotions",
        icon: FaUsers,
        component: Pages.Promotions,
      },
      {
        path: "/discount",
        name: "Discounts",
        icon: FaUsers,
        component: Pages.Discounts,
      },
    ],
  },

  {
    name: "Sales",
    category: "sales",
    icon: BsBarChartFill,
    layout: "/dash/sales",
    views: [
      {
        path: "/analytics",
        name: "Analytics",
        icon: FaUsers,
        component: Pages.Analytics,
      },
      {
        path: "/average-order-value",
        name: "Average Order Value",
        icon: FaUsers,
        component: Pages.AverageOrderValue,
      },
      {
        path: "/conversion",
        name: "Conversion",
        icon: FaUsers,
        component: Pages.Conversion,
      },
      {
        path: "/overview",
        name: "Overview",
        icon: FaUsers,
        component: Pages.Overview,
      },
      {
        path: "/revenue",
        name: "Revenue",
        icon: FaUsers,
        component: Pages.Revenue,
      },
    ],
  },
];
export default sideNavitems;
