export default function SmartPhone() {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-[638px] h-[440px] bg-[#00ACB033] flex flex-row p-4 rounded-lg py-12 px-12">
        <img src="/assets/images/phones/iphone.png" alt="Samsung Galaxy A50" />
        <div className="flex flex-col gap-4 ml-8 w-full">
          <h2 className="font-bold text-3xl pb-7">Samsung Galaxy A50</h2>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Model Number : </strong> testnumber123
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Système d&apos;exploitation : </strong> Android 11
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>RAM : </strong> 4Go
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
          <div className="flex justify-between gap-4">
            <p>
              <strong>Capacité de stockage : </strong> 32Go
            </p>
            <img src="/assets/images/yellow_check.svg" alt="Yellow Check" />
          </div>
        </div>
      </div>
    </div>
  );
}
