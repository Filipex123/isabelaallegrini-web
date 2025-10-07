export default function ImagemResponsiva() {
  return (
    <div>
      {/* Imagem para mobile */}
      <img src="./assets/capa_mobile.jpeg" alt="Versão Mobile" className="w-full h-lvh block lg:hidden object-cover" />

      {/* Imagem para telas maiores */}
      <img src="./assets/capa_desktop.jpg" alt="Versão Desktop" className="w-full h-lvh  object-cover" />
    </div>
  );
}
