import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <SEO
                title="Termos de Uso | MIDAS Serviços"
                description="Termos de uso e condições de serviço da MIDAS Locações e Serviços."
                canonical="/termos"
            />

            {/* Header */}
            <section className="bg-slate-950 text-white py-12 md:py-16">
                <div className="container px-4 sm:px-6">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
                        Termos de Uso
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16 container px-4 sm:px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm prose prose-slate prose-lg hover:prose-a:text-secondary">
                    <h2>1. Termos</h2>
                    <p>
                        Ao acessar ao site <a href="https://www.midaslsltda.com.br">Midas Locações e Serviços Ltda</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                    </p>

                    <h2>2. Uso de Licença</h2>
                    <p>
                        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Midas Locações e Serviços Ltda , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                    </p>
                    <ol>
                        <li>modificar ou copiar os materiais;</li>
                        <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Midas Locações e Serviços Ltda;</li>
                        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                        <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                    </ol>
                    <p>
                        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Midas Locações e Serviços Ltda a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                    </p>

                    <h2>3. Isenção de responsabilidade</h2>
                    <ol>
                        <li>Os materiais no site da Midas Locações e Serviços Ltda são fornecidos 'como estão'. Midas Locações e Serviços Ltda não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                        <li>Além disso, o Midas Locações e Serviços Ltda não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                    </ol>

                    <h2>4. Limitações</h2>
                    <p>
                        Em nenhum caso o Midas Locações e Serviços Ltda ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Midas Locações e Serviços Ltda, mesmo que Midas Locações e Serviços Ltda ou um representante autorizado da Midas Locações e Serviços Ltda tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                    </p>

                    <h2>5. Precisão dos materiais</h2>
                    <p>
                        Os materiais exibidos no site da Midas Locações e Serviços Ltda podem incluir erros técnicos, tipográficos ou fotográficos. Midas Locações e Serviços Ltda não garante que qualquer material em seu site seja preciso, completo ou atual. Midas Locações e Serviços Ltda pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Midas Locações e Serviços Ltda não se compromete a atualizar os materiais.
                    </p>

                    <h2>6. Links</h2>
                    <p>
                        O Midas Locações e Serviços Ltda não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Midas Locações e Serviços Ltda do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                    </p>

                    <h3>Modificações</h3>
                    <p>
                        O Midas Locações e Serviços Ltda pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                    </p>

                    <h3>Lei aplicável</h3>
                    <p>
                        Estes termos e condições são regidos e interpretados de acordo com as leis do Midas Locações e Serviços Ltda e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                    </p>
                </div>
            </section>
        </div>
    )
}
