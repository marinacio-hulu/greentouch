import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SobrePage() {
	return (
		<>
			<Header />
			<section id="about" className="pb-16 pt-32 bg-green-50 page-section h-screen flex items-center">
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
			<Footer />
		</>
	);
}