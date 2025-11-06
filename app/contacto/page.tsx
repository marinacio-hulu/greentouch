import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactoPage() {
	return (
		<>
			<Header />
			<section id="contact" className="pb-16 pt-32 bg-green-700 text-white page-section">
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