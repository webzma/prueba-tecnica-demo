import { AmountProps } from "@/app/types/AmountProps";
import formatAmount from "@/app/utils/formatAmount";
export default function UserInfoCard({ amount, setAmount }: AmountProps) {
  return (
    <article className="bg-white [box-shadow:0px_2.5px_13px_0px_#E5E5E5] rounded-xl p-4">
      <header className="flex justify-between items-center mb-8">
        <p className="text-base font-bold">Hilla Amanda</p>
        <span className="bg-[#F6BD11] py-2 px-3 rounded-sm text-sm font-semibold">
          Saldo: {formatAmount(amount)}
        </span>
      </header>

      <div className="flex items-center gap-x-4 justify-between">
        <button className="cursor-pointer border w-full py-3 px-2 rounded-md font-semibold border-[#1D1D1D]">
          Retirar Premios
        </button>
        <button className="cursor-pointer border w-full py-3 px-2 rounded-md font-semibold text-white bg-[#00A9E0]">
          Recargar Saldo
        </button>
      </div>
    </article>
  );
}
