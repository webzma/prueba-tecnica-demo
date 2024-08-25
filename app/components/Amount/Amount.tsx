"use client";

import { ChangeEvent, useState } from "react";
import { AmountProps } from "@/app/types/AmountProps";
import formatAmount from "@/app/utils/formatAmount";

export default function Amount({
  amount,
  setAmount,
  setAmountSelected,
  amountSelected,
}: AmountProps) {
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    setAmountSelected(parseFloat(value));
  }

  function buttonClickHandler(amount: number) {
    setAmountSelected(amount);
  }

  return (
    <div className="px-4 md:px-0">
      <div className="mt-10 w-full flex justify-center flex-col items-center gap-y-2">
        <p className="text-4xl font-bold">{formatAmount(amount)}</p>
        <p className="text-sm font-medium">Tu Saldo</p>
      </div>

      <div className="mt-4 space-y-4 flex flex-col">
        <label className="text-base font-bold" htmlFor="amount">
          Seleccione Importe a añadir:
        </label>

        <span
          className={`hidden text-xs bg-[#f6fcfe] font-medium rounded z-20 px-2 absolute translate-y-4 translate-x-3 transition-all`}
        >
          Importe (€)
        </span>

        <input
          id="amount"
          value={amountSelected}
          onChange={(e) => inputHandler(e)}
          type="number"
          placeholder="Importe (€)"
          className="appearence-none outline outline-1 outline-[#666666] p-4 rounded placeholder:text-[#666666] bg-[#CCEEF9]/10 focus-visible:outline text-[#666666] focus-visible:text-[#000000] focus-visible:outline-[#1184E0] font-medium"
        />

        <p className="text-sm font-medium text-[#333333]">
          Importe mínimo de 1€
        </p>
      </div>

      <div className="flex items-center [&>button]:py-3 [&>button]:font-bold [&>button]:px-6  [&>button]:items-center [&>button]:justify-center md:[&>button]:text-base [&>button]:text-sm [&>button]:w-full [&>button]:rounded mt-2 gap-x-4">
        <button
          type="button"
          className={
            amountSelected == 5
              ? "bg-[#006089] text-white flex"
              : "bg-[#CCEEF9] text-black flex"
          }
          onClick={() => buttonClickHandler(5)}
        >
          5 €
        </button>
        <button
          type="button"
          className={
            amountSelected == 10
              ? "bg-[#006089] text-white flex"
              : "bg-[#CCEEF9] text-black flex"
          }
          onClick={() => buttonClickHandler(10)}
        >
          10 €
        </button>
        <button
          type="button"
          className={
            amountSelected == 20
              ? "bg-[#006089] text-white flex"
              : "bg-[#CCEEF9] text-black flex"
          }
          onClick={() => buttonClickHandler(20)}
        >
          20 €
        </button>
        <button
          type="button"
          className={
            amountSelected == 50
              ? "bg-[#006089] text-white flex"
              : "bg-[#CCEEF9] text-black flex"
          }
          onClick={() => buttonClickHandler(50)}
        >
          50 €
        </button>
        <button
          type="button"
          className={
            amountSelected == 100
              ? "bg-[#006089] text-white hidden md:flex"
              : "bg-[#CCEEF9] text-black hidden md:flex"
          }
          onClick={() => buttonClickHandler(100)}
        >
          100 €
        </button>
      </div>
    </div>
  );
}
