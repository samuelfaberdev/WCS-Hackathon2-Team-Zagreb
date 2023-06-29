import PropTypes from "prop-types";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup z-10">
      <div className="popup-inner flex flex-col justify-center items-center rounded-xl">
        <div>
          <img src="../assets/images/clapping_popup.jpg" alt="clapping" />
        </div>
        <div className="mb-10 font-bold text-3xl text-center">
          <h2>Le téléphone [votre produit] a bien été ajouté au stock !</h2>
        </div>
        <div>
          <button
            className="close-btn mb-5 bg-[#00ACB0] px-5 py-2 text-white rounded-3xl text-lg font-medium"
            onClick={() => props.setTrigger(false)}
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};
