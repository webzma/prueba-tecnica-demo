"use client";
import { useState } from "react";
import BalanceSection from "./components/BalanceSection/BalanceSection";
import SettingsCard from "./components/SettingsCard/SettingsCard";
import UserInfoCard from "./components/UserInfoCard/UserInfoCard";
import Resume from "./components/Resume/Resume";

export default function Home() {
  const [amount, setAmount] = useState(20);
  const [amountSelected, setAmountSelected] = useState(0);
  const [isRecharge, setIsRecharge] = useState(false);

  return (
    <main className="relative flex h-[calc(105vh)] justify-between md:py-8 md:px-24">
      <svg
        className="hidden 2xl:flex absolute right-0 top-0 -translate-y-[140px] -z-10"
        width="509"
        height="470"
        viewBox="0 0 509 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M467.171 0.00195312C210.077 0.00195312 0.908203 210.729 0.908203 469.781H185.448C185.448 313.246 311.819 185.895 467.171 185.895C622.523 185.895 748.946 313.246 748.946 469.781H933.433C933.433 210.729 724.282 0.00195312 467.171 0.00195312Z"
          fill="#E5F6FB"
        />
      </svg>

      <svg
        className="hidden 2xl:flex absolute right-0 bottom-20 -z-10"
        width="509"
        height="471"
        viewBox="0 0 509 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M467.171 470.727C210.077 470.727 0.908203 259.999 0.908203 0.947266H185.448C185.448 157.482 311.819 284.834 467.171 284.834C622.522 284.834 748.946 157.482 748.946 0.947266H933.433C933.433 259.999 724.281 470.727 467.171 470.727Z"
          fill="#E5F6FB"
        />
      </svg>

      {isRecharge === false && (
        <BalanceSection
          amount={amount}
          setAmount={setAmount}
          amountSelected={amountSelected}
          setAmountSelected={setAmountSelected}
          isRecharge={isRecharge}
          setIsRecharge={setIsRecharge}
        />
      )}

      {isRecharge === true && (
        <Resume
          isRecharge={isRecharge}
          setIsRecharge={setIsRecharge}
          amount={amount}
          setAmount={setAmount}
          setAmountSelected={setAmountSelected}
          amountSelected={amountSelected}
        />
      )}

      <aside className="w-[380px] flex-col gap-y-6 mr-10 hidden 2xl:flex">
        <UserInfoCard
          amount={amount}
          setAmount={setAmount}
          setAmountSelected={setAmountSelected}
          amountSelected={amountSelected}
          isRecharge={isRecharge}
          setIsRecharge={setIsRecharge}
        />
        <SettingsCard />
      </aside>
    </main>
  );
}
