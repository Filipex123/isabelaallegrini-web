import { Clock, Instagram, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import ImagemResponsiva from './ImagemResponsiva.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const procedures = [
    {
      title: 'Microagulhamento com Drug Delivery',
      description:
        'Técnica que utiliza microagulhas para criar canais na pele, permitindo a penetração profunda de ativos potentes. Estimula a produção natural de colágeno e elastina, melhorando textura, cicatrizes e rejuvenescendo a pele.',
    },
    {
      title: 'Toxina Botulínica',
      description: 'Tratamento seguro e eficaz que suaviza linhas de expressão e previne o envelhecimento. Proporciona um aspecto natural e descansado, preservando a expressividade facial.',
    },
    {
      title: 'Bioestimulador de Colágeno',
      description: 'Estimula a produção natural de colágeno da pele, promovendo rejuvenescimento gradual e duradouro. Melhora a firmeza, elasticidade e qualidade da pele de forma natural.',
    },
    {
      title: 'Terapia a Laser',
      description: 'Tecnologia avançada para tratamento de manchas, cicatrizes, rejuvenescimento e textura da pele. Resultados precisos e eficazes com recuperação rápida.',
    },
    {
      title: 'Radiofrequência',
      description: 'Promove o aquecimento controlado das camadas profundas da pele, estimulando colágeno e elastina. Ideal para flacidez, contorno facial e rejuvenescimento sem cirurgia.',
    },
    {
      title: 'Terapia Ultrassônica',
      description: 'Utiliza ondas de ultrassom para lifting não invasivo e rejuvenescimento profundo. Atinge camadas específicas da pele com precisão, promovendo firmeza duradoura.',
    },
    {
      title: 'Peeling',
      description: 'Renovação celular profunda para tratamento de manchas, acne, cicatrizes e fotoenvelhecimento. Revela uma pele mais luminosa, uniforme e rejuvenescida.',
    },
    {
      title: 'Preenchedores',
      description: 'Restauram volume, harmonizam proporções faciais e suavizam rugas. Resultados naturais que realçam a beleza individual, respeitando a anatomia facial.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar uma consulta.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5517997828512?text=${message}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <img src="./assets/favicon.png" alt="Icone" className="w-10 h-10" />
              <div className="text-xl md:text-2xl font-light tracking-wide text-[#c59878]">Dra. Isabela Allegrini Zanelato</div>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#c59878]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#c59878] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#c59878] transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('dermatology')} className="text-gray-700 hover:text-[#c59878] transition-colors">
                Dermatologia
              </button>
              <button onClick={() => scrollToSection('procedures')} className="text-gray-700 hover:text-[#c59878] transition-colors">
                Procedimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#c59878] transition-colors">
                Contato
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-[#c59878] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-[#c59878] transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('dermatology')} className="block w-full text-left py-2 text-gray-700 hover:text-[#c59878] transition-colors">
                Dermatologia
              </button>
              <button onClick={() => scrollToSection('procedures')} className="block w-full text-left py-2 text-gray-700 hover:text-[#c59878] transition-colors">
                Procedimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#c59878] transition-colors">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagemResponsiva />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5ebe5]/75 via-[#f5ebe5]/90 to-[#f5ebe5]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5ebe5]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="text-center">
            <div className=""></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 md:mb-6 tracking-tight">Dra. Isabela Allegrini Zanelato</h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#c59878] mb-6 md:mb-8 font-light">Dermatologia Estética Integrativa</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Cuidado personalizado com foco na saúde e beleza natural da sua pele, unindo ciência, tecnologia e uma abordagem humanizada.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c59878] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg hover:bg-[#b58768] transition-all transform hover:scale-105 shadow-lg"
            >
              Agende sua Consulta
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 text-center mb-8 md:mb-16">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Sou Isabela Allegrini Zanelato, formada pela faculdade de medicina de Catanduva(Fameca). Me especializei em Dermatologia estética e integrativa. Minha paixão é ajudar cada paciente a
                alcançar a melhor versão de si mesmo, combinando técnicas avançadas com uma abordagem personalizada e humanizada.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Acredito que a verdadeira beleza vem do equilíbrio entre saúde, bem-estar e autoestima. Por isso, meu trabalho vai além dos procedimentos estéticos: busco entender as necessidades
                únicas de cada pessoa para oferecer tratamentos que respeitam a individualidade e promovem resultados naturais e duradouros.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Com formação contínua nas mais recentes inovações da dermatologia e um compromisso com a excelência, estou aqui para cuidar da sua pele com dedicação, ética e carinho.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-[#c59878] to-[#d4a990] rounded-2xl aspect-square flex items-center justify-center shadow-xl">
                <img src="./assets/quem_sou_eu.jpg" alt="Quem sou eu" className="w-full h-full object-cover border-2 border-white rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dermatology" className="py-16 md:py-24 bg-gradient-to-br from-[#f5ebe5] to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 text-center mb-8 md:mb-12">Dermatologia Estética Integrativa</h2>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-light text-[#c59878] mb-4">O que é?</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A dermatologia estética integrativa é uma abordagem inovadora que une os avanços científicos da medicina integrativa com uma visão holística do paciente. Vai além do tratamento
                superficial, focando na regeneração celular profunda e no estímulo dos processos naturais de cura e renovação da pele.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-light text-[#c59878] mb-4">Abordagem Integrativa</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Consideramos não apenas os aspectos físicos, mas também os fatores emocionais, nutricionais e de estilo de vida que impactam a saúde da pele. Cada tratamento é personalizado,
                respeitando a individualidade biológica e as expectativas de cada paciente.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-light text-[#c59878] mb-4">Tecnologia e Ciência</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Utilizamos as tecnologias mais avançadas e procedimentos baseados em evidências científicas para promover a regeneração tecidual, estimular a produção de colágeno e elastina, e
                restaurar a vitalidade natural da pele. O resultado é um rejuvenescimento genuíno, duradouro e harmonioso.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-light text-[#c59878] mb-4">Resultados Naturais</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                O objetivo é realçar sua beleza natural, não transformá-la. Trabalhamos para que você se reconheça e se sinta confiante com sua aparência, promovendo bem-estar e autoestima através de
                uma pele saudável, luminosa e revitalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="procedures" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 text-center mb-4 md:mb-6">Procedimentos</h2>
          <p className="text-center text-base md:text-lg text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos avançados, sempre com foco em resultados naturais e duradouros.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-50 to-[#f5ebe5] p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                <h3 className="text-lg md:text-xl font-light text-[#c59878] mb-3 md:mb-4">{procedure.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{procedure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#c59878] to-[#d4a990]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white text-center mb-8 md:mb-12">Agende sua Consulta</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-white relative">
              <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30 rounded-2xl" style={{ backgroundImage: "url('./assets/favicon.png')" }} />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8">Informações de Contato</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light text-sm md:text-base">Telefone</p>
                      <p className="text-base md:text-lg">(17) 99782-8512</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light text-sm md:text-base">E-mail</p>
                      <p className="text-base md:text-lg">allegriniisabela@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light text-sm md:text-base">Endereço</p>
                      <p className="text-base md:text-lg">Av. Barão de Itapura,3284 - Taquaral</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light text-sm md:text-base">Horário de Atendimento</p>
                      <p className="text-base md:text-lg">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-base md:text-lg">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light text-sm md:text-base">Instagram</p>
                      <a href="https://www.instagram.com/draisabelaallegrini" target="_blank" className="text-base md:text-lg">
                        @draisabelaallegrini
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm md:text-base text-gray-700 mb-2 font-light">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c59878] focus:border-transparent text-sm md:text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base text-gray-700 mb-2 font-light">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c59878] focus:border-transparent text-sm md:text-base"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base text-gray-700 mb-2 font-light">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c59878] focus:border-transparent text-sm md:text-base"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base text-gray-700 mb-2 font-light">Mensagem</label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c59878] focus:border-transparent text-sm md:text-base"
                    placeholder="Conte-me um pouco sobre suas necessidades..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c59878] text-white py-3 md:py-4 rounded-lg text-base md:text-lg hover:bg-[#b58768] transition-all transform hover:scale-105 shadow-lg font-light"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-light mb-2">Dra. Isabela Allegrini Zanelato</p>
          <p className="text-sm md:text-base text-gray-400 mb-4">Dermatologia Estética Integrativa</p>
          <p className="text-xs md:text-sm text-gray-500">CRM 252.120 | Todos os direitos reservados © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
