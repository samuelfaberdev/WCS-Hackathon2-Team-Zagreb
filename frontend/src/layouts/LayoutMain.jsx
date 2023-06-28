import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="h-full overflow-y-auto">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
