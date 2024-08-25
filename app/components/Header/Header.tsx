import CartIcon from "./Icons/CartIcon";
import UserIcon from "./Icons/UserIcon";
import ProductTab from "../ProductTab/ProductTab";
import ArrowIcon from "./Icons/ArrowIcon";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <nav className="bg-[#00A9E0] py-2 md:py-[15px] px-8 flex items-center justify-between w-full">
        <ul className="hidden items-center [&>li>a]:text-white [&>li>a]:font-medium [&>li>a]:text-base [&>li>a]:py-2 [&>li>a]:px-4 md:flex">
          <li>
            <a href="#" className="border-l-2 border-white/50">
              Inicio
            </a>
          </li>
          <li>
            <a href="#">Resultados y Botes</a>
          </li>
          <li>
            <a href="#">Quiénes Somos</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>

        <div className="gap-x-4 items-center flex md:hidden">
          <ArrowIcon />
          <p className="text-white font-bold ">Gestión de Saldo</p>
        </div>

        <div className="flex items-center gap-x-6">
          <div className="flex flex-col items-center">
            <UserIcon />
            <p className="text-white text-base font-semibold">0,00€</p>
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
      </nav>

      <div className="hidden 2xl:flex w-full bg-white px-8 py-2 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((_, index) => (
          <ProductTab key={index} />
        ))}
      </div>
    </header>
  );
}
