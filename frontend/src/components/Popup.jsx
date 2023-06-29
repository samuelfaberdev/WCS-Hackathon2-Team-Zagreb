import "../App.css";


export default function Popup(props) {

    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner flex flex-col justify-center items-center">
          <div>
            <img
              src="../assets/images/clapping_popup.jpg"
              alt="clapping"
            />
          </div>
          <div className="mb-10 font-bold text-3xl">
            <h2>Le téléphone [votre produit] a bien été ajouté au stock !</h2>
          </div>
          <div>
            <button className="close-btn mb-5 bg-[#00ACB0] px-5 py-2 text-white rounded-3xl text-lg font-medium" onClick={() => props.setTrigger(false)}>Continuer</button>
            {props.children}
          </div>
        </div>
      </div>
    ) : (
      ''
    );
}