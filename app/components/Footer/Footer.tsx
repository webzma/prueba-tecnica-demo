import Logo from "../../../public/devTalenty-logo.png";
import Image from "next/image";
import PayMethodIcon from "./PayMethodIcon";
import { PAY_METHODS } from "@/app/consts/PAY_METHODS";
import { TRUST_STAMPS } from "../../consts/TRUST_STAMPS";
import TrustStampIcon from "./TrustStampIcon";

export default function Footer() {
  return (
    <footer className="bg-[#000] py-10 px-24  gap-x-24 hidden lg:flex">
      <div className="flex items-center h-auto">
        <Image src={Logo} alt="Logo de DevTalenty" />
      </div>

      <div className="text-white gap-y-6 flex flex-col">
        <div>
          <p className="text-2xl font-bold mb-4">Links de Interés</p>
          <div className="flex gap-x-10">
            <div>
              <ul className="flex flex-col gap-y-4 [&>li>a]:underline gap-8 [&>li]:text-sm [&>li]:font-medium">
                <li>
                  <a href="#">Quienes Somos</a>
                </li>
                <li>
                  <a href="#">Preguntas Frecuentes</a>
                </li>
                <li>
                  <a href="#">Premios Repartidos</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-4 [&>li>a]:underline gap-8 [&>li]:text-sm [&>li]:font-medium">
                <li>
                  <a href="#">Ayuda</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Mapa Web</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mb-4">Otros Links</p>

          <div>
            <ul className="flex flex-col gap-y-4 [&>li>a]:underline gap-8 [&>li]:text-sm [&>li]:font-medium">
              <li>
                <a href="#">Comprar Lotería De Navidad</a>
              </li>
              <li>
                <a href="#">Comprar Lotería Del Niño</a>
              </li>
              <li>
                <a href="#">Lotería De Navidad Para Empresas</a>
              </li>
              <li>
                <a href="#">Bote XX Millones Euromillones</a>
              </li>
              <li>
                <a href="#">Lotería Sorteo Especial</a>
              </li>
              <li>
                <a href="#">Lotería Jueves y sábado</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white gap-y-6 flex flex-col">
        <div>
          <p className="text-2xl font-bold mb-4">Confianza y Seguridad</p>
          <div className="flex gap-x-10 flex-col">
            <p className="text-lg font-medium">Sellos de Confianza</p>
            <div className="flex gap-4 flex-wrap mt-2">
              {TRUST_STAMPS.map((elem, index) => (
                <a href="#" key={index}>
                  <TrustStampIcon label={elem.label} urlImage={elem.urlImage} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-x-10 flex-col max-w-[480px] mt-8">
            <p className="text-lg font-medium">Métodos de Pago </p>
            <div className="flex gap-4 flex-wrap mt-2">
              {PAY_METHODS.map((elem, index) => (
                <a href="#" key={index}>
                  <PayMethodIcon label={elem.label} urlImage={elem.urlImage} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-white gap-y-6 flex flex-col">
        <div>
          <p className="text-2xl font-bold mb-4">Textos Legales</p>
          <div className="flex gap-x-10">
            <div>
              <ul className="flex flex-col gap-y-4 [&>li>a]:underline gap-8 [&>li]:text-sm [&>li]:font-medium">
                <li>
                  <a href="#">Condiciones Generales</a>
                </li>
                <li>
                  <a href="#">Política De Privacidad</a>
                </li>
                <li>
                  <a href="#">Política De Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mb-4">Contacto</p>
          <div className="flex gap-x-10">
            <div>
              <ul className="flex flex-col gap-y-4 [&>li>a]:underline [&>li]:text-sm [&>li]:font-medium gap-8">
                <li>
                  <a href="#">hello@devtalenty.com</a>
                </li>
                <li>+506 124 356 789</li>
                <li>
                  <a href="#">Chat</a>
                </li>
                <li>De lunes a viernes de 9:00 a 19:00h</li>
                <li className="flex items-center gap-x-2">
                  Siguenos en:
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_13786)">
                      <g clipPath="url(#clip1_1_13786)">
                        <mask
                          id="mask0_1_13786"
                          maskUnits="userSpaceOnUse"
                          x="6"
                          y="0"
                          width="13"
                          height="26"
                        >
                          <path
                            d="M18.0806 0.559387H6.71045V25.192H18.0806V0.559387Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1_13786)">
                          <path
                            d="M9.29087 25.192H14.2508V12.7707H17.7113L18.0806 8.6117H14.2508V6.24383C14.2508 5.26273 14.4478 4.87521 15.3965 4.87521H18.0806V0.559387H14.6448C10.955 0.559387 9.29087 2.18463 9.29087 5.29643V8.6117H6.71045V12.8225H9.29087V25.192Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13786">
                        <rect
                          width="24.6326"
                          height="24.6326"
                          fill="white"
                          transform="translate(0.0791016 0.559387)"
                        />
                      </clipPath>
                      <clipPath id="clip1_1_13786">
                        <rect
                          width="11.3702"
                          height="24.6326"
                          fill="white"
                          transform="translate(6.71045 0.559387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_13787)">
                      <g clipPath="url(#clip1_1_13787)">
                        <mask
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="25"
                          height="26"
                        >
                          <path
                            d="M24.7659 0.559387H0.133301V25.192H24.7659V0.559387Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1_13787)">
                          <path
                            d="M12.449 2.77864C15.7374 2.77864 16.127 2.79044 17.4265 2.84946C18.2073 2.85938 18.9806 3.0031 19.7128 3.27438C20.2483 3.47076 20.7324 3.78548 21.1293 4.19505C21.5387 4.59223 21.8537 5.07627 22.0511 5.61146C22.3238 6.34365 22.4672 7.11767 22.4749 7.89897C22.5339 9.19735 22.5469 9.58686 22.5469 12.8753C22.5469 16.1637 22.5339 16.5533 22.4749 17.8516C22.4672 18.6329 22.3238 19.4069 22.0511 20.1391C21.8462 20.6702 21.5324 21.1525 21.1299 21.555C20.7274 21.9575 20.2451 22.2713 19.714 22.4762C18.9818 22.7475 18.2085 22.8912 17.4277 22.9011C16.1293 22.9602 15.7386 22.972 12.4502 22.972C9.16175 22.972 8.77342 22.9602 7.47386 22.9011C6.69305 22.8914 5.91971 22.7476 5.18753 22.4762C4.65234 22.2794 4.16827 21.9647 3.77112 21.5555C3.36181 21.1583 3.0468 20.6743 2.84927 20.1391C2.57891 19.4063 2.43561 18.6327 2.42553 17.8516C2.36651 16.5533 2.35353 16.1637 2.35353 12.8753C2.35353 9.58686 2.36651 9.19735 2.42553 7.89897C2.43523 7.11798 2.57813 6.34438 2.84809 5.61146C3.0459 5.07649 3.36088 4.59254 3.76994 4.19505C4.16709 3.78585 4.65116 3.4712 5.18635 3.27438C5.91853 3.00296 6.69187 2.85924 7.47268 2.84946C8.77106 2.79044 9.16175 2.77864 12.449 2.77864ZM12.449 0.558411C9.10392 0.559591 8.68607 0.573755 7.37235 0.632772C6.35063 0.653971 5.33982 0.847513 4.38254 1.20524C3.56115 1.51323 2.81677 1.99659 2.20126 2.62165C1.57405 3.23862 1.08905 3.98505 0.780129 4.80883C0.421964 5.76558 0.228406 6.77608 0.207662 7.79746C0.146285 9.11118 0.133301 9.53021 0.133301 12.8753C0.133301 16.2204 0.146285 16.6394 0.207662 17.9508C0.228273 18.9726 0.421833 19.9835 0.780129 20.9406C1.08843 21.7618 1.57175 22.5061 2.19654 23.1219C2.81205 23.7469 3.55642 24.2303 4.37782 24.5383C5.3351 24.896 6.34591 25.0895 7.36763 25.1107C8.68135 25.1698 9.10037 25.1839 12.4431 25.1839C15.7858 25.1839 16.2072 25.1698 17.5186 25.1107C18.5403 25.0895 19.5511 24.896 20.5084 24.5383C21.3264 24.2217 22.0693 23.7377 22.6894 23.1174C23.3096 22.497 23.7933 21.754 24.1096 20.9359C24.4684 19.9788 24.6624 18.9679 24.6833 17.9461C24.7423 16.6323 24.7565 16.2133 24.7565 12.8706C24.7565 9.52785 24.7423 9.10646 24.6833 7.7951C24.6646 6.77491 24.4734 5.76524 24.1179 4.80883C23.8017 3.99048 23.318 3.24722 22.6979 2.62667C22.0777 2.00611 21.3348 1.52196 20.5167 1.20524C19.5594 0.847513 18.5486 0.653971 17.5268 0.632772C16.2131 0.573755 15.7953 0.559591 12.449 0.559591M12.449 6.5522C11.1982 6.5522 9.97545 6.92311 8.93543 7.61803C7.8954 8.31295 7.0848 9.30067 6.60613 10.4563C6.12746 11.6119 6.00222 12.8835 6.24625 14.1103C6.49027 15.3371 7.0926 16.464 7.97707 17.3484C8.86153 18.2329 9.98841 18.8352 11.2152 19.0792C12.442 19.3233 13.7136 19.198 14.8692 18.7194C16.0248 18.2407 17.0125 17.4301 17.7075 16.3901C18.4024 15.35 18.7733 14.1273 18.7733 12.8765C18.773 11.1993 18.1066 9.59085 16.9206 8.40488C15.7346 7.21892 14.1262 6.55251 12.449 6.5522ZM12.449 16.9817C11.6371 16.9817 10.8434 16.7409 10.1683 16.2899C9.49316 15.8388 8.96698 15.1976 8.65627 14.4475C8.34555 13.6974 8.26425 12.8719 8.42265 12.0756C8.58106 11.2793 8.97204 10.5478 9.54617 9.97364C10.1203 9.39951 10.8518 9.00853 11.6481 8.85013C12.4445 8.69172 13.2699 8.77302 14.02 9.08374C14.7701 9.39445 15.4113 9.92063 15.8624 10.5957C16.3135 11.2708 16.5542 12.0645 16.5542 12.8765C16.5542 13.9653 16.1217 15.0094 15.3519 15.7793C14.582 16.5492 13.5378 16.9817 12.449 16.9817ZM20.5025 6.30196C20.503 6.00955 20.4167 5.72357 20.2547 5.48014C20.0927 5.23672 19.8622 5.04679 19.5922 4.93435C19.3223 4.82191 19.0251 4.79201 18.7382 4.84843C18.4513 4.90485 18.1875 5.04505 17.9802 5.25132C17.773 5.45759 17.6315 5.72067 17.5737 6.00732C17.5159 6.29396 17.5444 6.59131 17.6556 6.86177C17.7667 7.13224 17.9555 7.36368 18.1982 7.52687C18.4408 7.69005 18.7264 7.77764 19.0188 7.77857C19.4108 7.77857 19.7868 7.62292 20.0642 7.34581C20.3415 7.06871 20.4975 6.69283 20.4978 6.30078"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13787">
                        <rect
                          width="24.6326"
                          height="24.6326"
                          fill="white"
                          transform="translate(0.133301 0.559387)"
                        />
                      </clipPath>
                      <clipPath id="clip1_1_13787">
                        <rect
                          width="24.6326"
                          height="24.6326"
                          fill="white"
                          transform="translate(0.133301 0.559387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_13788)">
                      <g clipPath="url(#clip1_1_13788)">
                        <mask
                          id="mask0_1_13788"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="2"
                          width="25"
                          height="21"
                        >
                          <path
                            d="M24.8206 2.86633H0.187988V22.8851H24.8206V2.86633Z"
                            fill="white"
                          />
                        </mask>

                        <g mask="url(#mask0_1_13788)">
                          <path
                            d="M0.187988 20.6138C2.4987 22.0987 5.18813 22.8869 7.93484 22.8841C9.88169 22.8963 11.8105 22.5106 13.603 21.7508C15.3955 20.991 17.0139 19.873 18.3589 18.4654C19.7039 17.0579 20.7473 15.3904 21.4249 13.5653C22.1026 11.7401 22.4003 9.79579 22.2997 7.8515C23.2887 7.13599 24.1423 6.25002 24.8206 5.2351C23.8983 5.64354 22.9202 5.91166 21.9186 6.03055C22.9744 5.3997 23.7641 4.4058 24.1402 3.23478C23.148 3.82335 22.0628 4.2384 20.9311 4.46207C20.1697 3.65053 19.1618 3.11283 18.0638 2.93233C16.9657 2.75182 15.8387 2.9386 14.8576 3.4637C13.8765 3.9888 13.096 4.82289 12.6371 5.83668C12.1783 6.85047 12.0666 7.98732 12.3196 9.07099C10.3101 8.97066 8.34429 8.44866 6.54979 7.5389C4.75529 6.62913 3.17229 5.35198 1.90366 3.79042C1.25695 4.90263 1.05825 6.21944 1.348 7.47296C1.63775 8.72647 2.39417 9.82251 3.46337 10.5381C2.66059 10.5126 1.87552 10.2957 1.17353 9.90544C1.1591 11.0832 1.55608 12.2291 2.296 13.1456C3.03593 14.062 4.07244 14.6916 5.22681 14.9257C4.48286 15.1274 3.70273 15.1567 2.94574 15.0115C3.26837 16.0156 3.89681 16.8937 4.74314 17.5229C5.58948 18.1522 6.61136 18.5011 7.66579 18.5209C5.5487 20.1812 2.8594 20.9339 0.187988 20.6138Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13788">
                        <rect
                          width="24.6326"
                          height="24.6326"
                          fill="white"
                          transform="translate(0.187988 0.559387)"
                        />
                      </clipPath>
                      <clipPath id="clip1_1_13788">
                        <rect
                          width="24.6326"
                          height="20.0188"
                          fill="white"
                          transform="translate(0.187988 2.86633)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
