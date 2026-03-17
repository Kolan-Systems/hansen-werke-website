'use client'

import Image from 'next/image'
import { useLightbox } from '@/lib/LightboxContext'

export default function Lightbox() {
  const { src, alt, close } = useLightbox()

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 touch-none"
      onClick={close}
    >
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
          quality={95}
        />
        {alt && (
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-300 text-sm bg-black/60 px-4 py-1.5 rounded-full whitespace-nowrap max-w-[90vw] truncate">
            {alt}
          </p>
        )}
        <button
          onClick={close}
          className="absolute top-3 right-3 bg-stone-800/80 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition-colors"
          aria-label="Schließen"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
