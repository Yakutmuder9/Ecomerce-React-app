import { Routes, Route } from "react-router-dom";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import ProductsList from "./features/products/ProductsList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditProduct from "./features/products/EditProduct";
import NewProduct from "./features/products/NewProduct";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";
import { useLocation } from "react-router-dom";
import { Dashboard } from "./pages";
import * as Pages from "./pages";

const App = () => {
  useTitle("Zilla Shopping");
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="/forgot-password" element={<Pages.ForgotPassword />} />
      <Route
        path="/reset-password/:resetToken"
        element={<Pages.ResetPassword />}
      />

      <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Dashboard />} />
              {/* <Route path="welcome" element={<Welcome />} /> */}

              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                {/* <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route> */}
                <Route path="orders">
                  <Route path="all-orders" element={<Pages.AllOrders />} />
                  <Route
                    path="cancelled-orders"
                    element={<Pages.CancelledOrders />}
                  />
                  <Route
                    path="completed-orders"
                    element={<Pages.CompletedOrders />}
                  />
                  <Route
                    path="on-hold-orders"
                    element={<Pages.OnHoldOrders />}
                  />
                  <Route
                    path="pending-orders"
                    element={<Pages.PendingOrders />}
                  />
                </Route>

                <Route path="customers">
                  <Route path="all-cusomers" element={<UsersList />} />
                  <Route path="add-customer" element={<Pages.AddCustomer />} />
                  <Route
                    path="customer-segmentation"
                    element={<Pages.CustomerSegmentation />}
                  />
                  <Route
                    path="customer-support"
                    element={<Pages.CustomerSupport />}
                  />
                </Route>

                <Route path="products">
                  <Route path="all-products" element={<Pages.AllProducts />} />
                  <Route path="add-product" element={<Pages.AddProduct />} />
                  <Route path="brands" element={<Pages.Brands />} />
                  <Route path="categories" element={<Pages.Categories />} />
                  <Route
                    path="inventory-management"
                    element={<Pages.InventoryManagement />}
                  />
                  <Route
                    path="product-attributes"
                    element={<Pages.ProductAttributes />}
                  />
                  <Route
                    path="product-reviews"
                    element={<Pages.ProductReviews />}
                  />
                  <Route
                    path="product-variationst"
                    element={<Pages.ProductVariations />}
                  />
                </Route>

                <Route path="marketing">
                  <Route path="all-coupons" element={<Pages.AllCoupons />} />
                  <Route path="add-coupons" element={<Pages.AddCoupon />} />
                  <Route path="promotions" element={<Pages.Promotions />} />
                  <Route path="discount" element={<Pages.Discounts />} />
                </Route>

                <Route path="sales">
                  <Route path="analytics" element={<Pages.Analytics />} />
                  <Route
                    path="average-order-value"
                    element={<Pages.AverageOrderValue />}
                  />
                  <Route path="conversion" element={<Pages.Conversion />} />
                  <Route path="overview" element={<Pages.Overview />} />
                  <Route path="revenue" element={<Pages.Revenue />} />
                </Route>

                <Route path="inventory">
                  <Route index element={<Pages.Warehouses />} />
                  <Route path="suppliers" element={<Pages.Suppliers />} />
                  <Route
                    path="purchased-order"
                    element={<Pages.PurchaseOrders />}
                  />
                  <Route path="stock-alert" element={<Pages.StockAlerts />} />
                  <Route
                    path="stock-management"
                    element={<Pages.StockManagement />}
                  />
                </Route>

                <Route path="payment">
                  <Route index element={<Pages.PaymentLogs />} />
                  <Route path="gateways" element={<Pages.PaymentGateways />} />
                  <Route path="setting" element={<Pages.PaymentSettings />} />
                  <Route path="refunds" element={<Pages.Refunds />} />
                </Route>

                <Route path="shipping">
                  <Route index element={<Pages.Tracking />} />
                  <Route path="classes" element={<Pages.ShippingClasses />} />
                  <Route path="methods" element={<Pages.ShippingMethods />} />
                  <Route path="zones" element={<Pages.ShippingZones />} />
                </Route>

                <Route path="settings">
                  <Route index element={<Pages.GeneralSettings />} />
                  <Route path="currency" element={<Pages.CurrencySettings />} />
                  <Route path="email" element={<Pages.EmailSettings />} />
                  <Route path="tax" element={<Pages.TaxSettings />} />
                </Route>

                <Route path="support">
                  <Route index element={<Pages.Documentation />} />
                  <Route path="faqs" element={<Pages.FAQs />} />
                </Route>
              </Route>

              {/* <Route path="products">
                <Route index element={<ProductsList />} />
                <Route path=":id" element={<EditProduct />} />
                <Route path="new" element={<NewProduct />} />
              </Route> */}
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
