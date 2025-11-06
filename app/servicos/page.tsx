import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicosPage() {
	return (
		<>
			<Header />
			<section id="services" className="py-32 bg-white page-section">
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
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-blue-100 flex items-center justify-center">
								<i className="fa-solid fa-filter text-blue-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desinfecção de Tanques de Água</h3>
								<p className="text-gray-600 mb-4">Higienização completa de reservatórios, garantindo água limpa e livre de contaminações.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-purple-100 flex items-center justify-center">
								<i className="fa-solid fa-wind text-purple-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desinfecção de Condutas de Ar Condicionado</h3>
								<p className="text-gray-600 mb-4">Remoção de poeiras e microrganismos das condutas, melhorando Link qualidade do ar.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-yellow-100 flex items-center justify-center">
								<i className="fa-solid fa-bug text-yellow-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Gestão Integrada de Pragas</h3>
								<p className="text-gray-600 mb-4">Soluções ecológicas para controle de pragas e monitoramento microbiológico.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-red-100 flex items-center justify-center">
								<i className="fa-solid fa-fire-extinguisher text-red-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Desentupimento de Caixas, Fossas e Esgotos</h3>
								<p className="text-gray-600 mb-4">Serviços de manutenção e desobstrução com equipamentos modernos e seguros.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-indigo-100 flex items-center justify-center">
								<i className="fas fa-recycle text-indigo-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza de Tanques de Combustível</h3>
								<p className="text-gray-600 mb-4">Limpeza técnica de tanques, removendo impurezas e evitando contaminação de combustíveis.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-green-100 flex items-center justify-center">
								<i className="fa-solid fa-soap text-green-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza de Fachadas</h3>
								<p className="text-gray-600 mb-4">Lavagem e tratamento de fachadas para manter Link estética e prolongar Link durabilidade.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-blue-100 flex items-center justify-center">
								<i className="fa-solid fa-brush text-blue-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Restauro, Limpeza e Polimento de Pisos</h3>
								<p className="text-gray-600 mb-4">Renovação e brilho de pisos em pedra, madeira ou cerâmica.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-purple-100 flex items-center justify-center">
								<i className="fa-solid fa-wind text-purple-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Qualidade do Ar Interior</h3>
								<p className="text-gray-600 mb-4">Análise dos parâmetros físico-químicos para garantir ambientes saudáveis.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-yellow-100 flex items-center justify-center">
								<i className="fa-solid fa-broom text-yellow-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Descontaminação de Sistema de Exaustão de Cozinhas (Hotts)</h3>
								<p className="text-gray-600 mb-4">Limpeza profunda de dutos e exaustores para maior segurança e eficiência.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-red-100 flex items-center justify-center">
								<i className="fa-solid fa-phone-volume text-red-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Consultoria Ambiental</h3>
								<p className="text-gray-600 mb-4">Planeamento e gestão sustentável de resíduos, da recolha ao descarte.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>

						<div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
							<div className="h-48 bg-indigo-100 flex items-center justify-center">
								<i className="fa-solid fa-chair text-indigo-600 text-5xl"></i>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-3">Limpeza e Tratamento Anti-Manchas de Tecidos</h3>
								<p className="text-gray-600 mb-4">Proteção e revitalização de sofás, cadeiras e carpetes com produtos especializados.</p>
								<Link href="/contacto" className="text-green-600 font-medium hover:text-green-700">Solicitar Orçamento <i className="fas fa-arrow-right ml-1"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
