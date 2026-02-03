import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Testimonial {
    id: string
    name: string
    profession: string
    rating: number
    description: string
    avatarUrl: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Carlos Mendes",
        profession: "Gerente de Manutenção Industrial",
        rating: 5,
        description:
            "A MIDAS transformou nossa operação. A manutenção preditiva evitou paradas não planejadas que nos custariam milhares. Equipe altamente técnica e profissional.",
        avatarUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    },
    {
        id: "testimonial-2",
        name: "Ana Paula Silva",
        profession: "Engenheira de Energia",
        rating: 5,
        description:
            "Excelente trabalho na manutenção da nossa usina solar. A análise de performance identificou problemas que estavam reduzindo nossa geração em 15%. Recomendo fortemente.",
        avatarUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    },
    {
        id: "testimonial-3",
        name: "Roberto Almeida",
        profession: "Diretor de Operações",
        rating: 5,
        description:
            "Profissionalismo e precisão técnica. Os laudos NR10 foram entregues no prazo e com qualidade impecável. A equipe demonstra profundo conhecimento normativo.",
        avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    },
    {
        id: "testimonial-4",
        name: "Juliana Costa",
        profession: "Coordenadora de Facilities",
        rating: 5,
        description:
            "Atendimento de emergência 24/7 salvou nossa operação. Resposta rápida e solução eficiente. A MIDAS é nosso parceiro estratégico em manutenção.",
        avatarUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
    },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    return (
        <div
            className="group relative bg-slate-900/90 border border-slate-700 p-6 hover:border-secondary transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-slate-300 leading-relaxed mb-6 text-sm">
                "{testimonial.description}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <Avatar className="size-12 border-2 border-slate-700">
                    <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`Foto de ${testimonial.name}`}
                    />
                    <AvatarFallback className="bg-slate-800 text-white font-bold">
                        {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.profession}</p>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-xs font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-3">
                        Validação Técnica
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                        O QUE NOSSOS CLIENTES DIZEM
                    </h2>
                    <p className="text-lg text-slate-400">
                        Depoimentos de profissionais que confiam na MIDAS para manter suas
                        operações críticas funcionando sem interrupções.
                    </p>
                </div>

                {/* Testimonials Grid - Horizontal on Desktop, Vertical on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
