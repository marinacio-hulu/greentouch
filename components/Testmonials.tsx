export default function Testemonials() {
    return (
        <section id="testimonials" className="py-16 bg-white page-section">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Confira alguns depoimentos de clientes satisfeitos com nossos serviços.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-user text-green-600"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Roberto Silva</h4>
                            <p className="text-gray-600 text-sm">Empresário</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"Contratei a GreenTouch para a limpeza pós-obra do meu novo escritório e fiquei impressionado com a qualidade do serviço. A equipe foi extremamente profissional e cuidadosa."</p>
                    <div className="flex text-yellow-400 mt-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-user text-green-600"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Mariana Costa</h4>
                            <p className="text-gray-600 text-sm">Gerente de Facilities</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"A GreenTouch é nossa parceira há mais de 3 anos. A qualidade do serviço de limpeza comercial é excelente e a equipe sempre muito atenciosa com nossas necessidades específicas."</p>
                    <div className="flex text-yellow-400 mt-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-user text-green-600"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Carlos Eduardo</h4>
                            <p className="text-gray-600 text-sm">Diretor Industrial</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"A consultoria ambiental da GreenTouch nos ajudou a implementar um programa de gestão de resíduos que reduziu nossos custos em 20%. Recomendo fortemente!"</p>
                    <div className="flex text-yellow-400 mt-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}