import FloatingLines from '@/components/react-bits/FloatingLines'

const Landing = () => (
  <main className="relative min-h-screen w-screen overflow-hidden bg-[#120F17]">
    <div className="absolute inset-0 z-0">
      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={8}
        lineDistance={8}
        bendRadius={8}
        bendStrength={-2}
        interactive
        parallax
        animationSpeed={1}
        linesGradient={['#E945F5', '#896ABD', '#A855F7']}
        backgroundColor="#120F17"
      />
    </div>

    <section className="pointer-events-none relative z-10 min-h-screen">
      {/* Позже добавим сюда текст и изображение девушки */}
    </section>
  </main>
)

export default Landing