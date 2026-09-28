import FloatingLines from '@/components/react-bits/FloatingLines'
import FlipCard from '@/components/react-bits/FlipCard'

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

    <section className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row">
      <div className="pointer-events-auto flex-1 text-center md:text-left">
        <p className="mb-3 text-lg text-violet-200">Hello, I’m</p>

        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Nazily Muratova
        </h1>

        <p className="mt-4 text-2xl font-semibold text-violet-300">
          Full-Stack Developer
        </p>

        <p className="mt-4 max-w-xl text-gray-200">
          I build web applications, from backend systems to user-friendly
          interfaces.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          View my projects
        </a>
      </div>

      <div className="pointer-events-auto flex flex-1 justify-center">
        <FlipCard
          front={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                background:
                  'radial-gradient(circle, #48206b 0%, #17101f 72%)',
              }}
            >
              <img
                src="/nazily-avatar.png"
                alt="Illustration of Nazily Muratova"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          }
          back={
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(145deg, #251333, #100c16)',
              }}
            >
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 800,
                  letterSpacing: 8,
                  color: '#d7b5ff',
                  textShadow: '0 0 30px #a855f7',
                }}
              >
                MNA
              </span>
            </div>
          }
          axis="y"
          flipOnClick
          draggable
          tilt
          glare
          width={320}
          height={420}
          radius={24}
          background="#17101f"
          color="#f5f5f5"
          ariaLabel="Flip card with Nazily Muratova illustration and MNA logo"
        />
      </div>
    </section>
  </main>
)

export default Landing