import { PayMethod } from "@/app/types/payMethods";

export default function PayMethodIcon({ urlImage, label }: PayMethod) {
  let bgClass = label === "Santander" ? "bg-[#FF0000]" : "bg-white";

  if (label === "Santander") {
    bgClass = "bg-[#FF0000]";
  } else if (label === "Telepago") {
    bgClass = "bg-[#004F89]";
  } else {
    bgClass = "bg-white";
  }

  const styleClass = `flex items-center h-auto p-2 rounded-md ${bgClass}`;

  return (
    <div className={`${styleClass}`}>
      <img src={urlImage} alt={`${label} icon`} />
    </div>
  );
}
