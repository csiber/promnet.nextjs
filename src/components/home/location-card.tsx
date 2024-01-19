'use client'

import { IconMapPinFilled } from '@tabler/icons-react'
import createGlobe from 'cobe'
import { useSpring } from 'framer-motion'
import React from 'react'

const LocationCard = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const pointerInteracting = React.useRef<number | null>(null)
  const pointerInteractionMovement = React.useRef(0)
  const fadeMask =
    'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)'

  const r = useSpring(0, {
    stiffness: 200,
    damping: 40,
    mass: 1,
    restDelta: 0.0001,
    restSpeed: 0.0001
  })

  React.useEffect(() => {
    let width = 0

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize)
      }
    }
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 2.75,
      theta: -0.1,
      dark: 1,
      diffuse: 2,
      mapSamples: 36_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [235 / 255, 35 / 255, 35 / 255],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [47.497_913, 19.040_236], size: 0.1 }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = r.get() + 2.75
        state.width = width * 2
        state.height = width * 2
      }
    })

    return () => {
      globe.destroy()
    }
  }, [r])

  return (
    <div className='relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl bg-background-lighter/60 p-4 shadow-card-border lg:p-6'>
      <div className='flex items-center gap-2'>
        <IconMapPinFilled size={18} />
        <h2 className='text-sm font-light'>Magyarország</h2>
      </div>
      <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]'>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            placeItems: 'center',
            placeContent: 'center',
            overflow: 'visible',
            background: 'rgb(0,0,0)'
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current
                canvasRef.current &&
                  (canvasRef.current.style.cursor = 'grabbing')
              }}
              onPointerUp={() => {
                pointerInteracting.current = null
                canvasRef.current && (canvasRef.current.style.cursor = 'grab')
              }}
              onPointerOut={() => {
                pointerInteracting.current = null
                canvasRef.current && (canvasRef.current.style.cursor = 'grab')
              }}
              onPointerOver={() => {
                canvasRef.current && (canvasRef.current.style.cursor = 'grab')
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  r.set(delta / 200)
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  r.set(delta / 100)
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                cursor: 'auto',
                userSelect: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
