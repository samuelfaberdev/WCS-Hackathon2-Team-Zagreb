import Navbar from "@components/Navbar";
import PropTypes from "prop-types";

export default function Layout({ children, setIsLogged }) {
  return (
    <>
      <Navbar setIsLogged={setIsLogged} />
      <main className="bg-main bg-no-repeat bg-right h-[100vh] overflow-y-auto ml-64 pt-10">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
