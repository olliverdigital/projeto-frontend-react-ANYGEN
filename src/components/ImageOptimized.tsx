import { ImgHTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils'

interface ImageOptimizedProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number | string
    height?: number | string
    priority?: boolean
    className?: string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

/**
 * Optimized Image Component
 * 
 * Features:
 * - Native lazy loading
 * - Explicit width/height to prevent CLS
 * - Loading state with blur placeholder
 * - Priority loading for above-the-fold images
 * - Automatic aspect ratio preservation
 */
export function ImageOptimized({
    src,
    alt,
    width,
    height,
    priority = false,
    className,
    objectFit = 'cover',
    ...props
}: ImageOptimizedProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        setHasError(true)
        setIsLoaded(true)
    }

    return (
        <div
            className={cn('relative overflow-hidden', className)}
            style={{
                width: width || '100%',
                height: height || 'auto',
                aspectRatio: width && height ? `${width} / ${height}` : undefined
            }}
        >
            {/* Blur placeholder while loading */}
            {!isLoaded && !hasError && (
                <div
                    className="absolute inset-0 bg-muted animate-pulse"
                    aria-hidden="true"
                />
            )}

            {/* Actual image */}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                onLoad={handleLoad}
                onError={handleError}
                className={cn(
                    'transition-opacity duration-300',
                    isLoaded ? 'opacity-100' : 'opacity-0',
                    hasError && 'opacity-50',
                    className
                )}
                style={{
                    objectFit,
                    width: '100%',
                    height: '100%'
                }}
                {...props}
            />

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <p className="text-sm text-muted-foreground">Falha ao carregar imagem</p>
                </div>
            )}
        </div>
    )
}
