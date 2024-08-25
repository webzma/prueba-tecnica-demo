import { useState } from "react";

export default function PayMethod() {
  return (
    <div className="px-4 md:p-0">
      <h2 className="text-md font-bold my-4">Método de pago</h2>

      <div className="p-4 border [box-shadow:0px_0px_3px_0px_#00A9E0] border-[#00A9E0] rounded-lg flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2">
            <input type="radio" name="" id="" />
            <label htmlFor="" className="font-medium">
              Tarjeta Bancaria
            </label>
          </div>

          <span className="text-sm text-[#7F7F7F] font-medium">
            Instántaneo
          </span>
        </div>

        <div className="pl-4 flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <input type="radio" name="payMethod" id="" />
            <label htmlFor="" className="font-medium">
              Tarjeta terminada en 0909
            </label>
          </div>
          <div className="flex gap-x-2">
            <input type="radio" name="payMethod" id="" />
            <label htmlFor="" className="font-medium">
              Utilizar otra tarjeta
            </label>
          </div>
        </div>

        <select
          name=""
          id=""
          className="appearence-none outline outline-1 outline-[#666666] p-4 rounded placeholder:text-[#666666] bg-[#CCEEF9]/10 focus-visible:outline text-[#666666] focus-visible:text-[#000000] focus-visible:outline-[#1184E0] font-medium"
        >
          <option value="Sabadell">Sabadell</option>
        </select>
      </div>

      <div className="flex items-center justify-between border p-4 rounded-lg my-4">
        <div className="flex gap-x-2 form-group">
          <input type="radio" name="payMethod" id="bizum" />
          <label htmlFor="bizum" className="font-medium">
            <span className="radio-button-1">Bizum</span>
          </label>
        </div>

        <span className="text-sm text-[#7F7F7F] font-medium">
          Importe mínimo de 10 €
        </span>
      </div>

      <div className="flex items-center justify-between border p-4 rounded-lg my-4">
        <div className="flex gap-x-2">
          <input type="radio" name="payMethod" id="" />
          <label htmlFor="" className="font-medium">
            Tarjeta Bancaria
          </label>
        </div>

        <span className="text-sm text-[#7F7F7F] font-medium">
          No instántaneo
        </span>
      </div>
    </div>
  );
}
