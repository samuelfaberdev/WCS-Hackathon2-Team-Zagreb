import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-main bg-no-repeat bg-right h-[100vh] overflow-y-auto ml-64">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
