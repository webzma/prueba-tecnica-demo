export default function BottomNav() {
  return (
    <nav className="px-10 py-4 border-t flex w-full justify-between bottom-0 lg:hidden [&>button]:flex [&>button]:gap-y-1 [&>button]:flex-col [&>button]:items-center [box-shadow:0px_-2px_13px_0px_#E5E5E5] fixed bg-white">
      <button>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 10L11.25 3C11.6047 2.71599 12.0456 2.56125 12.5 2.56125C12.9544 2.56125 13.3953 2.71599 13.75 3L22.5 10"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 8.5V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8.5"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium">Inicio</span>
      </button>
      <button>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.49 17H12.51"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 10C9.5 9.40666 9.67595 8.82664 10.0056 8.33329C10.3352 7.83994 10.8038 7.45543 11.3519 7.22836C11.9001 7.0013 12.5033 6.94189 13.0853 7.05765C13.6672 7.1734 14.2018 7.45912 14.6213 7.87868C15.0409 8.29824 15.3266 8.83279 15.4424 9.41473C15.5581 9.99667 15.4987 10.5999 15.2716 11.1481C15.0446 11.6962 14.6601 12.1648 14.1667 12.4944C13.6734 12.8241 13.0933 13 12.5 13V14"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium">Resultados</span>
      </button>
      <button>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 22C14.7091 22 16.5 17.5228 16.5 12C16.5 6.47715 14.7091 2 12.5 2C10.2909 2 8.5 6.47715 8.5 12C8.5 17.5228 10.2909 22 12.5 22Z"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 16C18.0228 16 22.5 14.2091 22.5 12C22.5 9.79086 18.0228 8 12.5 8C6.97715 8 2.5 9.79086 2.5 12C2.5 14.2091 6.97715 16 12.5 16Z"
            stroke="black"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium">Ayuda</span>
      </button>
    </nav>
  );
}
