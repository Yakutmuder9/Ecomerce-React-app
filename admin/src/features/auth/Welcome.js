import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import { motion } from "framer-motion";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  useTitle(`techProducts: ${username}`);

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <section className="welcome">
        <p>{today}</p>

        <h1>Welcome {username}!</h1>

        <p>
          <Link to="/dash/products">View techProducts</Link>
        </p>

        <p>
          <Link to="/dash/products/new">Add New techProduct</Link>
        </p>

        {(isManager || isAdmin) && (
          <p>
            <Link to="/dash/users">View User Settings</Link>
          </p>
        )}

        {(isManager || isAdmin) && (
          <p>
            <Link to="/dash/users/new">Add New User</Link>
          </p>
        )}
      </section>
    </motion.div>
  );
};
export default Welcome;
