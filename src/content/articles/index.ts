import { lazy, ComponentType } from 'react'

type ArticleModule = { default: ComponentType }

const articleMap: Record<string, () => Promise<ArticleModule>> = {
    'manutencao-preventiva-vs-corretiva': () => import('./manutencao-preventiva-vs-corretiva'),
    'importancia-termografia-prevenir-incendios': () => import('./importancia-termografia-prevenir-incendios'),
    'sujeira-paineis-fotovoltaicos-reducao-geracao': () => import('./sujeira-paineis-fotovoltaicos-reducao-geracao'),
}

export function getArticleComponent(slug: string) {
    const loader = articleMap[slug]
    if (!loader) return null
    return lazy(loader)
}
