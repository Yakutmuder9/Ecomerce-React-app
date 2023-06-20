import { store } from "../../app/store";
// import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    // const products = store.dispatch(productsApiSlice.endpoints.getNotes.initiate());
    // const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      console.log("unsubscribing");
      // products.unsubscribe();
      // users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;
