import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <SEO
                title="Política de Privacidade | MIDAS Serviços"
                description="BPolítica de Privacidade da MIDAS Locações e Serviços."
                canonical="/privacidade"
            />

            {/* Header */}
            <section className="bg-slate-950 text-white py-12 md:py-16">
                <div className="container px-4 sm:px-6">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
                        Política de Privacidade
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16 container px-4 sm:px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm prose prose-slate prose-lg hover:prose-a:text-secondary">
                    <p>
                        A sua privacidade é importante para nós. É política do Midas Locações e Serviços Ltda respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.midaslsltda.com.br">Midas Locações e Serviços Ltda</a>, e outros sites que possuímos e operamos.
                    </p>
                    <p>
                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </p>
                    <p>
                        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                    </p>
                    <p>
                        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                    </p>
                    <p>
                        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank">políticas de privacidade</a>.
                    </p>
                    <p>
                        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                    </p>
                    <p>
                        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                    </p>

                    <h3>Compromisso do Usuário</h3>
                    <p>
                        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Midas Locações e Serviços Ltda oferece no site e com caráter enunciativo, mas não limitativo:
                    </p>
                    <ul>
                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Midas Locações e Serviços Ltda, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                    </ul>

                    <h3>Mais informações</h3>
                    <p>
                        Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                    </p>

                    <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-100">
                        Esta política é efetiva a partir de <strong>3 February 2026 19:02</strong>
                    </p>
                </div>
            </section>
        </div>
    )
}
