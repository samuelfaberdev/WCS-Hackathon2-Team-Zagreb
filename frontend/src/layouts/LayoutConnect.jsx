import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <main className="bg-connect bg-no-repeat bg-right h-[100vh] overflow-y-auto">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
