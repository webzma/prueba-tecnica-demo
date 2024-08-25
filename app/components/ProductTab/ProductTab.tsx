import ProductTabIcon from "./Icons/ProductTabIcon";

export default function ProductTab() {
  return (
    <article className="text-center flex flex-col justify-center items-center py-4 px-8">
      <ProductTabIcon />
      <p className="text-xs font-medium mt-1">Euromillones</p>
      <p className="text-xs font-bold">17.000.000 €</p>
    </article>
  );
}
