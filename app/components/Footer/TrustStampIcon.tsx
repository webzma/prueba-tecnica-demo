import trustStamps from "@/app/types/trustStamps";

export default function TrustStampIcon({ urlImage, label }: trustStamps) {
  const bgClass = label === "Santander" ? "bg-[#FF0000]" : "bg-white";
  const styleClass = `flex items-center h-auto p-2 rounded-md ${bgClass}`;

  return (
    <div className={`${styleClass}`}>
      <img src={urlImage} alt={`${label} icon`} />
    </div>
  );
}
