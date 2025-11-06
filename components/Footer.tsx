import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	const data = new Date();
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between md:items-center">
					<div className="mb-6 md:mb-0">
						<div className="flex items-center">
							<i className="fas fa-spa text-green-400 text-2xl mr-2"></i>

							<Link href="/">
								<Image
									className='w-32'
									src="/logo.png"
									width={100}
									height={100}
									alt="GREENTOUCH"
								/>
							</Link>
						</div>
						<p className="text-gray-400 mt-2">Serviços Especializados em Limpeza e Ambiente</p>
					</div>

					<div>
						<h4 className="font-bold mb-2">Links Úteis</h4>
						<ul className="text-gray-400 space-y-1">
							<li><Link href="/" className="hover:text-white">Início</Link></li>
							<li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
							<li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
							<li><Link href="/contacto" className="hover:text-white">Contato</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-2">Links Úteis</h4>
						<ul className="text-gray-400 space-y-1">
							<li><Link href="/" className="hover:text-white">Início</Link></li>
							<li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
							<li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
							<li><Link href="/contacto" className="hover:text-white">Contato</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-2">Links Úteis</h4>
						<ul className="text-gray-400 space-y-1">
							<li><Link href="/" className="hover:text-white">Início</Link></li>
							<li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
							<li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
							<li><Link href="/contacto" className="hover:text-white">Contato</Link></li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white mt-8 pt-6 text-center text-gray-400">
					<p>&copy; {data.getFullYear()} GTS. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
