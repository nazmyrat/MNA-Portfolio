import FloatingLines from '@/components/react-bits/FloatingLines'
import FlipCard from '@/components/react-bits/FlipCard'
import GooeyNav from '@/components/react-bits/GooeyNav'
import GlideSelect from '@/components/react-bits/GlideSelect'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/components/i18n/changeLanguage'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Landing = () => {
  const { i18n } = useTranslation()

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#120F17]">
      {/* Фон */}
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

      {/* Меню и выбор языка — отдельный слой поверх фона и карточки */}
      <header className="pointer-events-auto fixed inset-x-0 top-6 z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 4]}
        />

        <div className="flex items-center gap-2">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>

          <GlideSelect
            options={[
              { value: 'kk', label: 'KZ', tag: 'Қазақша' },
              { value: 'ru', label: 'RU', tag: 'Русский' },
              { value: 'en', label: 'EN', tag: 'English' },
            ]}
            defaultValue={i18n.language.split('-')[0]}
            onChange={(language) => changeLanguage(i18n, language)}
            ariaLabel="Choose language"
            showTags
            accentColor="#f5f5f5"
            surfaceColor="#27272a"
            highlightColor="#3f3f46"
            textColor="#f5f5f5"
            size="md"
            radius={10}
            menuWidth={176}
            placement="bottom"
            align="right"
          />
        </div>
      </header>

      {/* Первый экран */}
      <section
        id="home"
        className="pointer-events-none relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-10 pl-18 pr-6 py-16 md:flex-row md:justify-between"
      >
        <div className="pointer-events-auto w-full max-w-3xl text-left md:-translate-y-10">
          <p
            className="mb-2 text-xl text-violet-200 md:text-2xl"
            style={{ textShadow: '0 2px 12px #120F17' }}
          >
            Hello! My name is Nazily Muratova.
          </p>

          <h1
            className="my-10 text-5xl font-medium leading-tight text-white md:text-7xl"
            style={{
              textShadow:
                '0 0 18px rgba(168, 85, 247, 0.65), 0 3px 18px rgba(0, 0, 0, 0.9)',
            }}
          >
            Full-Stack Developer
            <span aria-hidden="true" className="hero-caret" />
          </h1>

          <p
            className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
            style={{ textShadow: '0 2px 12px #120F17' }}
          >
            I build web applications, from backend systems to user-friendly
            interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View My Projects →
            </a>
          </div>
        </div>

        {/* FlipCard */}
        <div className="pointer-events-auto flex w-full justify-center md:w-auto md:-translate-x-36 md:-translate-y-10">
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
            width={380}
            height={480}
            radius={24}
            background="#17101f"
            color="#f5f5f5"
            ariaLabel="Flip card with Nazily Muratova illustration and MNA logo"
          />
        </div>
      </section>
    </main>
  )
}

export default Landing