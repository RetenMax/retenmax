import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Logo and Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image 
                            src="/images/logo.svg" 
                            alt="RetenMax Logo" 
                            width={187} 
                            height={40}
                            className="mb-4"
                            loading="lazy"
                        />
                        <p className="text-sm text-gray-400 mt-4">
                            Retenção máxima de clientes e colaboradores para a sua empresa
                        </p>
                    </div>

                    {/* Main Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-orange-500 pb-2">Navegação</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#verticais" className="hover:text-orange-500 transition-colors">Verticais</Link></li>
                            <li><Link href="/#podcast" className="hover:text-orange-500 transition-colors">Podcast</Link></li>
                            <li><Link href="/#sobre" className="hover:text-orange-500 transition-colors">Empresa</Link></li>
                            <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Vertical Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-orange-500 pb-2">Verticais</h3>
                        <ul className="space-y-2">
                            <li><Link href="/maxia" className="hover:text-orange-500 transition-colors">Max IA</Link></li>
                            <li><Link href="/finmax" className="hover:text-orange-500 transition-colors">FinMax</Link></li>
                            <li><Link href="/rmax" className="hover:text-orange-500 transition-colors">RMax</Link></li>
                            <li><Link href="/rmaster" className="hover:text-orange-500 transition-colors">RMaster</Link></li>
                            <li><Link href="/elevamax" className="hover:text-orange-500 transition-colors">ElevaMax</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-orange-500 pb-2">Contato & Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#contact" className="hover:text-orange-500 transition-colors">Contato</Link></li>
                            <li><Link href="/termos-de-servico" className="hover:text-orange-500 transition-colors">Termos de Serviço</Link></li>
                            <li><Link href="/politicas-de-privacidade" className="hover:text-orange-500 transition-colors">Políticas de Privacidade</Link></li>
                            <li><Link href="https://dna.retenmax.com.br/login" className="hover:text-orange-500 transition-colors">Login</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-zinc-800 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} RetenMax - Todos os direitos reservados
                </div>
            </div>
        </footer>
    )
}

export default Footer
