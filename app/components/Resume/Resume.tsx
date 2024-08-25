import { AmountProps } from "@/app/types/AmountProps";
import formatAmount from "@/app/utils/formatAmount";

export default function Resume({
  isRecharge,
  setIsRecharge,
  amount,
  amountSelected,
  setAmountSelected,
  setAmount,
}: AmountProps) {
  return (
    <div className="w-full xl:w-[1000px] rounded p-4 pt-10 relative">
      <h2 className="text-3xl font-bold mb-6">!Saldo añadido!</h2>
      <p className="text-lg font-medium">
        Tu saldo ya está añadido y puedes usarlo para realizar tus compras.
        ¿Listo para ganar?
      </p>

      <article className="[box-shadow:0px_2.5px_13px_0px_#E5E5E5] bg-white w-full mt-6 flex justify-center gap-x-10 items-center p-8">
        <div>
          <p className="text-2xl font-medium">
            {formatAmount(amount - amountSelected)}
          </p>
          <p className="text-xl font-medium">Antes</p>
        </div>

        <div>
          <svg
            width="42"
            height="42"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7549 17.5632L18.8867 12.4314L13.7549 7.29962"
              stroke="black"
              strokeWidth="1.53954"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.57031 12.4314H18.8866"
              stroke="black"
              strokeWidth="1.53954"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <p className="text-3xl  text-[#08875D] font-bold">
            {formatAmount(amount)}
          </p>
          <p className="text-xl font-medium">Ahora</p>
        </div>
      </article>

      <div className="flex items-center justify-end">
        <button
          onClick={() => setIsRecharge(false)}
          className="mt-6 self-end cursor-pointer border w-full max-w-72 py-3 px-2 rounded-md font-semibold text-white bg-[#00A9E0]"
        >
          Ir al inicio
        </button>
      </div>

      <div className="bg-[url('../public/Background.png')] bg-cover bg-no-repeat p-8 mt-8 w-full">
        <div className="bg-[#003A8A] flex flex-col gap-y-4 p-8 rounded-md max-w-[600px] mx-auto">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-y-4 ">
            <div className="flex items-center gap-x-2">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_13632)">
                  <path
                    d="M33.141 16.7846H26.6432C26.6432 14.245 25.5977 11.8095 23.7368 10.0138C21.876 8.21806 19.3521 7.20923 16.7204 7.20923C14.0887 7.20923 11.5648 8.21806 9.70391 10.0138C7.84303 11.8095 6.7976 14.245 6.7976 16.7846H0.296387C0.296387 12.5819 2.02647 8.55136 5.10604 5.57962C8.1856 2.60788 12.3624 0.93837 16.7176 0.93837C21.0727 0.93837 25.2495 2.60788 28.3291 5.57962C31.4086 8.55136 33.1387 12.5819 33.1387 16.7846"
                    fill="white"
                  />
                  <path
                    d="M16.7173 33.7834C12.364 33.7784 8.19053 32.1072 5.11238 29.1367C2.03423 26.1661 0.302779 22.1386 0.297852 17.9377H6.79737C6.81712 20.4648 7.87128 22.8819 9.73007 24.6622C11.5889 26.4424 14.1016 27.4414 16.7204 27.4414C19.3393 27.4414 21.852 26.4424 23.7108 24.6622C25.5696 22.8819 26.6237 20.4648 26.6435 17.9377H33.1413C33.1361 22.1384 31.4045 26.1656 28.3264 29.136C25.2483 32.1063 21.075 33.7773 16.7218 33.7823"
                    fill="white"
                  />
                  <path
                    d="M16.7184 9.17096C15.0396 9.17096 13.3986 9.65134 12.0028 10.5513C10.6069 11.4514 9.51901 12.7306 8.87658 14.2272C8.23415 15.7239 8.06606 17.3708 8.39357 18.9596C8.72107 20.5485 9.52947 22.0079 10.7165 23.1534C11.9036 24.2989 13.416 25.079 15.0625 25.395C16.709 25.7111 18.4156 25.5489 19.9666 24.9289C21.5175 24.309 22.8432 23.2592 23.7758 21.9122C24.7085 20.5652 25.2063 18.9817 25.2063 17.3617C25.2037 15.1901 24.3087 13.1082 22.7174 11.5727C21.1262 10.0371 18.9687 9.17341 16.7184 9.17096ZM16.7184 24.5598C15.6659 24.5599 14.6254 24.3452 13.6651 23.9296C12.7047 23.514 11.8464 22.907 11.1465 22.1486C10.4466 21.3901 9.921 20.4973 9.60414 19.5288C9.28729 18.5603 9.18639 17.5381 9.3081 16.5293C9.42981 15.5205 9.77136 14.548 10.3103 13.6756C10.8492 12.8033 11.5734 12.0509 12.4351 11.4679C13.2969 10.8848 14.2767 10.4844 15.3103 10.2928C16.3438 10.1012 17.4077 10.1229 18.432 10.3563C17.2478 10.1281 16.0181 10.3487 14.9981 10.9725C13.9782 11.5963 13.2464 12.5752 12.9549 13.706C12.6633 14.8368 12.8343 16.0325 13.4324 17.0448C14.0304 18.0571 15.0096 18.8082 16.1665 19.1421C17.3235 19.4759 18.5692 19.3669 19.645 18.8377C20.7208 18.3085 21.544 17.3997 21.9436 16.3001C22.3433 15.2005 22.2886 13.9946 21.791 12.9329C21.2934 11.8712 20.3912 11.0352 19.2716 10.5986C20.919 11.1779 22.3023 12.2987 23.1786 13.7643C24.0549 15.2298 24.3682 16.9464 24.0634 18.6126C23.7587 20.2789 22.8555 21.7883 21.5123 22.8759C20.1691 23.9634 18.4718 24.5596 16.7184 24.5598ZM18.401 10.6487C18.848 10.6487 19.285 10.7766 19.6567 11.0163C20.0285 11.256 20.3182 11.5966 20.4893 11.9952C20.6603 12.3938 20.7051 12.8323 20.6179 13.2554C20.5307 13.6786 20.3154 14.0672 19.9993 14.3723C19.6831 14.6773 19.2804 14.8851 18.8419 14.9692C18.4035 15.0534 17.949 15.0102 17.5359 14.8451C17.1229 14.68 16.7699 14.4004 16.5215 14.0417C16.2732 13.683 16.1406 13.2613 16.1406 12.8299C16.1406 12.2514 16.3787 11.6966 16.8026 11.2876C17.2265 10.8785 17.8015 10.6487 18.401 10.6487Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_13632">
                    <rect
                      width="32.8435"
                      height="32.8435"
                      fill="white"
                      transform="translate(0.297852 0.940491)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-white  font-bold text-sm xl:text-2xl">
                Euromillones
              </p>
            </div>

            <span className="bg-[#F6BD11] py-1 px-4 rounded font-medium flex items-center gap-x-2 text-xs xl:text-base">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4788 4.15137H5.05711C3.92343 4.15137 3.00439 5.0704 3.00439 6.20408V20.5731C3.00439 21.7068 3.92343 22.6258 5.05711 22.6258H21.4788C22.6125 22.6258 23.5316 21.7068 23.5316 20.5731V6.20408C23.5316 5.0704 22.6125 4.15137 21.4788 4.15137Z"
                  stroke="black"
                  strokeWidth="1.02636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.13623 2.09865V6.20408"
                  stroke="black"
                  strokeWidth="1.02636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3999 2.09865V6.20408"
                  stroke="black"
                  strokeWidth="1.02636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Miercoles - 11/11/2023
            </span>
          </div>

          <div className="flex justify-center text-white font-bold text-3xl lg:text-6xl">
            104.000.000€
          </div>

          <div className="flex gap-x-2 items-center text-white text-large">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6142 22.867C18.2826 22.867 22.8778 18.2719 22.8778 12.6035C22.8778 6.93504 18.2826 2.33987 12.6142 2.33987C6.94575 2.33987 2.35059 6.93504 2.35059 12.6035C2.35059 18.2719 6.94575 22.867 12.6142 22.867Z"
                stroke="white"
                strokeWidth="1.53954"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6143 7.47168V12.6035H17.746"
                stroke="white"
                strokeWidth="1.53954"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            10d 10h 10m 10s
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button className="w-full text-xs lg:text-base text-white border py-3 rounded font-medium cursor-pointer">
              Primiabono
            </button>
            <button className="w-full text-xs lg:text-base text-white border py-3 rounded font-medium cursor-pointer">
              Peña primitiva
            </button>
            <button className="w-full text-xs lg:text-base text-white border py-3 rounded font-medium cursor-pointer">
              Individual
            </button>
          </div>

          <button className="border border-gray-200 p-4 rounded absolute right-0 bg-white [box-shadow:0px_2.5px_13px_0px_#E5E5E5] ml-2 mt-20">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.81152 11.8296L11.2327 8.40844L7.81152 4.98724"
                stroke="black"
                strokeWidth="1.53954"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
