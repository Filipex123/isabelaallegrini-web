import desktop from '../assets/capa_desktop.jpg';
import mobile from '../assets/capa_mobile.jpeg';

export default function ImagemResponsiva() {
  return (
    <div>
      {/* Imagem para mobile */}
      <img src={mobile} alt="Versão Mobile" className="w-full h-lvh block lg:hidden object-cover" />

      {/* Imagem para telas maiores */}
      <img src={desktop} alt="Versão Desktop" className="w-full h-lvh  object-cover" />
    </div>
  );
}
