import Amount from "../Amount/Amount";
import PayMethod from "../PayMethod/PayMethod";
import { AmountProps } from "@/app/types/AmountProps";

export default function BalanceSection({
  amount,
  setAmount,
  amountSelected,
  setAmountSelected,
  isRecharge,
  setIsRecharge,
}: AmountProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAmount(amount + amountSelected);
    console.log(amount);
    setIsRecharge(true);
  };

  return (
    <section className="w-full md:w-[900px]">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 hidden md:block">
          Gestión de Saldo
        </h2>

        <div className="flex items-center [&>button]:p-2 [&>button]:font-medium gap-x-1 justify-between md:justify-normal">
          <button className="border-b-2 border-[#006089] disabled:text-[#7F7F7F] w-full md:w-[200px]">
            Recargar Saldo
          </button>
          <button
            className="disabled:text-[#7F7F7F] w-full md:w-[200px]"
            disabled
          >
            Retirar premios
          </button>
        </div>

        <Amount
          amount={amount}
          setAmount={setAmount}
          amountSelected={amountSelected}
          setAmountSelected={setAmountSelected}
          setIsRecharge={setIsRecharge}
          isRecharge={isRecharge}
        />

        <PayMethod />

        <div className="flex flex-col-reverse lg:flex-row md:flex-wrap md:justify-between mt-6 gap-y-6 px-4 md:p-0">
          <div className="flex items-center gap-x-2 max-w-[530px]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5182 3.09083L5.01549 5.58488C4.60586 5.72084 4.2495 5.98245 3.99707 6.33253C3.74464 6.68262 3.60898 7.10336 3.60938 7.53497V11.3017C3.60831 13.1618 4.06685 14.9933 4.94423 16.6335C5.82161 18.2737 7.09065 19.6716 8.63853 20.7031L12.2821 23.1253C12.4497 23.2357 12.6459 23.2945 12.8466 23.2945C13.0473 23.2945 13.2435 23.2357 13.4111 23.1253L17.0547 20.7031C18.6026 19.6716 19.8716 18.2737 20.749 16.6335C21.6264 14.9933 22.0849 13.1618 22.0838 11.3017V7.53497C22.0842 7.10336 21.9486 6.68262 21.6961 6.33253C21.4437 5.98245 21.0873 5.72084 20.6777 5.58488L13.175 3.09083C12.962 3.01888 12.7312 3.01888 12.5182 3.09083V3.09083Z"
                stroke="black"
                strokeWidth="1.53954"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-medium">
              Todos los pagos en Lotopía son 100% seguros. Web certificada por
              Confianza Online.
            </p>
          </div>

          <button
            type="submit"
            disabled={amountSelected <= 0}
            className="disabled:bg-[#00A9E0]/20 disabled:text-[#1D1D1D]/50 bg-[#00A9E0] py-3 px-6 w-full lg:max-w-72 font-bold text-white text-xl rounded-md hover:bg-[#028AC5] active:[#006089]"
          >
            Recargar Cuenta
          </button>
        </div>
      </form>
    </section>
  );
}
