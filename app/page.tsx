import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Testemonials from '@/components/Testmonials';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <section id="services" className="py-16 bg-white page-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Oferecemos uma ampla gama de serviços de limpeza profissional para atender às suas necessidades específicas.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <i className="fa-solid fa-bacteria text-green-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Desinfecção de Espaços</h3>
                <p className="text-gray-600 mb-4">Eliminação eficaz de vírus, bactérias e fungos em ambientes residenciais, comerciais e industriais.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <i className="fa-solid fa-filter text-blue-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desinfecção de Tanques de Água</h3>
                <p className="text-gray-600 mb-4">Higienização completa de reservatórios, garantindo água limpa e livre de contaminações.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <i className="fa-solid fa-wind text-purple-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desinfecção de Condutas de Ar Condicionado</h3>
                <p className="text-gray-600 mb-4">Remoção de poeiras e microrganismos das condutas, melhorando Link qualidade do ar.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-yellow-100 flex items-center justify-center">
                <i className="fa-solid fa-bug text-yellow-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Gestão Integrada de Pragas</h3>
                <p className="text-gray-600 mb-4">Soluções ecológicas para controle de pragas e monitoramento microbiológico.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-red-100 flex items-center justify-center">
                <i className="fa-solid fa-fire-extinguisher text-red-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desentupimento de Caixas, Fossas e Esgotos</h3>
                <p className="text-gray-600 mb-4">Serviços de manutenção e desobstrução com equipamentos modernos e seguros.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <i className="fas fa-recycle text-indigo-600 text-5xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza de Tanques de Combustível</h3>
                <p className="text-gray-600 mb-4">Limpeza técnica de tanques, removendo impurezas e evitando contaminação de combustíveis.</p>
                <Link href="#" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <Link href="/servicos" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center font-medium transition duration-300">Ver todos os serviços</Link>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-green-50 page-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre a GreenTouch</h2>
              <p className="text-gray-600 mb-4">Há mais de X anos no mercado, a GreenTouch é referência em serviços especializados de limpeza e consultoria ambiental.</p>
              <p className="text-gray-600 mb-4">Nossa missão é proporcionar ambientes limpos, saudáveis e sustentáveis para nossos clientes, utilizando tecnologias avançadas e produtos ecologicamente corretos.</p>
              <p className="text-gray-600 mb-6">Contamos com uma equipe altamente qualificada e treinada para atender às mais diversas necessidades, desde residências até grandes complexos industriais.</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  <span className="text-gray-700">Equipe Qualificada</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  <span className="text-gray-700">Produtos Ecológicos</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  <span className="text-gray-700">Tecnologia Avançada</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-2"></i>
                  <span className="text-gray-700">Atendimento 24h</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nossos Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-leaf text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Sustentabilidade</h4>
                      <p className="text-gray-600">Priorizamos o uso de produtos e métodos que minimizam o impacto ambiental.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-award text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Qualidade</h4>
                      <p className="text-gray-600">Comprometemo-nos com a excelência em todos os serviços prestados.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <i className="fas fa-users text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Compromisso Social</h4>
                      <p className="text-gray-600">Valorizamos nossa equipe e contribuímos para o desenvolvimento da comunidade.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testemonials />
      <section id="contact" className="py-16 bg-green-700 text-white page-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Entre em Contato</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">Solicite um orçamento ou tire suas dúvidas sobre nossos serviços. Nossa equipe está pronta para atendê-lo.</p>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300" placeholder="Seu nome" />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300" placeholder="seu@email.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">Telefone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300" placeholder="(244) 923 000 000" />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2">Serviço de Interesse</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300">
                    <option value="">Selecione um serviço</option>
                    <option value="1">Desinfecção de Espaços</option>
                    <option value="2">Limpeza e Desinfecção de Tanques de Água</option>
                    <option value="3">Limpeza e Desinfecção de Condutas de Ar Condicionado</option>
                    <option value="4">Gestão Integrada de Pragas</option>
                    <option value="5">Limpeza e Desentupimento de Caixas, Fossas e Esgotos</option>
                    <option value="6">Limpeza de Tanques de Combustível</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300" placeholder="Descreva sua necessidade..."></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-green-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Enviar Mensagem</button>
              </form>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <div className="bg-green-800 rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-green-300 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">Endereço</h4>
                      <p className="text-green-100">Angola<br />Luanda, 0000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-phone text-green-300 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">Telefone</h4>
                      <p className="text-green-100">(244) 923 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-envelope text-green-300 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">E-mail</h4>
                      <p className="text-green-100">contato@greentouch.ao</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-clock text-green-300 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">Horário de Atendimento</h4>
                      <p className="text-green-100">Segunda Link Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#" className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="#" className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#" className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
