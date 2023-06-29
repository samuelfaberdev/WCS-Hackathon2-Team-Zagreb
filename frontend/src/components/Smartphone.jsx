export default function SmartPhone({
  selectedMarque,
  selectedModel,
  selectedCouleur,
  selectedRam,
  selectedStockage,
  os,
  antutu,
}) {
  return (
    <>
      <div className="w-[650px] h-[400px] bg-[#00ACB033] flex flex-row p-4 rounded-lg py-12 px-12">
        <img
          width="200"
          // src="/assets/images/phones/iphone_13.png"
          src={`/assets/images/phones/${selectedModel}.png`}
          alt={`${selectedMarque} - ${selectedModel}`}
        />
        <div className="flex flex-col gap-4 ml-8 w-full">
          <h2 className="font-bold text-3xl pb-7">
            {selectedMarque} - {selectedModel}
          </h2>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Couleur : </strong>
              {selectedCouleur}
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Système d&apos;exploitation : </strong>
              {os}
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>RAM : </strong>
              {selectedRam} Go
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Capacité de stockage : </strong>
              {selectedStockage} Go
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Score Antutu : </strong>
              {antutu}
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
        </div>
      </div>
    </>
  );
}
