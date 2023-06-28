import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <main className="h-full overflow-y-auto">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
