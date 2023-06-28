import { useState } from "react"
import "../App.css"

export default function Model() {
    const [modele, setModele] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        modele != '' ? alert(`le modèle est ${modele}`) : alert('please enter a valid model')
    }
    return (
        <div className="flex flex-col items-center gap-12">
        <h1 className="text-center font-bold text-[40px]">Veuillez renseigner le numéro de <br/> modèle du téléphone</h1>
        <form onSubmit={handleSubmit}>
        <input 
        className="w-[400px] border-b border-black"
        type="text" 
        id="modele" 
        value={modele} 
        placeholder="Numéro de modèle"
        onChange={(e) => setModele(e.target.value)}
        />
        </form>
        <div className="flex gap-40">
        <button
        className="bg-[#a7a7a7] px-8 py-3 rounded-full text-white font-bold text-lg ">Retour</button>
        
        <button onClick={handleSubmit} className="bg-[#00acb0] px-8  rounded-full text-white font-bold text-lg">Valider</button>
        </div>
        </div>
    )
}