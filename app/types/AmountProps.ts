export interface AmountProps {
  amount: number;
  setAmount: (amount: number) => void;
  amountSelected: number;
  setAmountSelected: (amount: number) => void;
  isRecharge: boolean;
  setIsRecharge: (isRecharge: boolean) => void;
}
