export default function HeroSection() {
  return (
    <section id="home" className="hero-bg h-[700px] pt-24 pb-32 text-white page-section">
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluções Profissionais em Limpeza e Ambiente</h1>
          <p className="text-xl mb-8">Oferecemos serviços especializados de limpeza para residências, empresas e indústrias, com foco na sustentabilidade e qualidade.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center font-medium transition duration-300">Solicitar Orçamento</a>
            <a href="#services" className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-lg text-center font-medium transition duration-300">Nossos Serviços</a>
          </div>
        </div>
      </div>
    </section>
  );
}