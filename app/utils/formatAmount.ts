export default function formatAmount(amount: number) {
  // Convertimos el número a una cadena para manipularlo
  const cantidadStr = amount.toString();
  const partes = cantidadStr.split(".");
  partes[1] = partes[1] || "00";
  partes[1] = partes[1].padEnd(2, "0");
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return partes.join(",") + " €";
}
