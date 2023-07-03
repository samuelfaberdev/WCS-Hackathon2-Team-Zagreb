import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <main className="bg-connect bg-no-repeat bg-right h-[100vh] overflow-y-auto">
        <img
          className="absolute top-14 left-14"
          src="/assets/images/ImageConnexion.png"
          alt=""
        />
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
