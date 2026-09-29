import FloatingLines from '@/components/react-bits/FloatingLines'
import FlipCard from '@/components/react-bits/FlipCard'
import GooeyNav from '@/components/react-bits/GooeyNav'
import GlideSelect from '@/components/react-bits/GlideSelect'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/components/i18n/changeLanguage'
import ShinyText from '@/components/react-bits/ShinyText'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Landing = () => {
  const { i18n } = useTranslation()

  return (
    <main id="home" className="relative min-h-screen w-full overflow-x-hidden bg-[#120F17]">
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
      <header  className="pointer-events-auto fixed inset-x-0 top-6 z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6"
  onClickCapture={(event) => {
    const clickedLink = (event.target as HTMLElement).closest('a[href="#home"]')

    if (clickedLink) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }}
>
        
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
        className="pointer-events-none relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-10 pl-18 pr-6 py-16 md:flex-row md:justify-between"
      >
<div className="pointer-events-auto hero-copy w-full max-w-3xl text-left md:-translate-y-10">
  <p className="mb-3 text-xl text-violet-100 md:text-2xl">
   <h2
  className="mb-3 text-3xl font-semibold tracking-wide text-violet-100 md:text-4xl"
  style={{
    textShadow: '0 0 16px rgba(216, 180, 254, 0.7), 0 2px 10px #120F17',
  }}
>
  Привет! Я
</h2>
  </p>

  <h1 className="my-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl">
  <ShinyText
    text="Full-Stack Developer"
    className="hero-shiny"
    speed={2}
    color="#ffffff"
    shineColor="#f3c8ff"
    spread={120}
    direction="left"
    delay={0}
  />
  <span aria-hidden="true" className="hero-caret" />
</h1>

<div className="max-w-2xl space-y-4 text-lg leading-relaxed text-white md:text-xl">
  <p>
    Изучаю веб-разработку, Python, анализ данных и машинное обучение. Люблю
    разбираться в сложных задачах и превращать идеи в работающие проекты.
  </p>

  <p className="border-l-2 border-violet-400 pl-4 font-medium text-violet-100">
    Для меня программирование — это логика, математика и творчество.
  </p>
</div>

  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
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
        <div className="pointer-events-auto flex w-full justify-center md:w-auto md:-translate-x-24 md:-translate-y-10">
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
{/* Бегущая строка */}
<div className="pointer-events-none relative z-20 w-full overflow-hidden border-y border-white/10 bg-[#120F17]/70 py-3 backdrop-blur-sm md:absolute md:inset-x-0 md:bottom-0">
  <div className="ticker-track">
    {[0, 1].map((copy) => (
      <div
        className="ticker-group"
        aria-hidden={copy === 1}
        key={copy}
      >
        {[
          'BUILD',
          'CREATE',
          'CODE',
          'DESIGN',
          'ANALYZE',
          'MODEL',
          'LEARN',
          'SOLVE',
          'DEPLOY',
        ].map((word) => (
          <span className="ticker-chip" key={word}>
            {word}
          </span>
        ))}
      </div>
    ))}
  </div>
</div>
      </section>

      <section
  id="about"
  className="relative z-10 min-h-screen scroll-mt-28 px-6 py-28 text-white"
>
  <div className="mx-auto max-w-6xl -translate-x-28">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
      01 / Обо мне
    </p>

    <h2 className="mb-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
      Разработка на стыке логики, данных и творчества
    </h2>

    <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-white/80 md:text-xl">
      <p>
        Я Муратова Назылы, развиваюсь в full-stack-разработке. Создаю веб-приложения
        и изучаю Python, анализ данных и машинное обучение.
      </p>

      <p>
        Мне нравится разбираться в сложных задачах, пробовать новые технологии
        и превращать идеи в работающие проекты.
      </p>
    </div>

    <div className="mt-10 flex flex-wrap gap-3">
      {['Web Development', 'Python', 'Data Analytics', 'Machine Learning'].map(
        (skill) => (
          <span
            key={skill}
            className="rounded-full border border-violet-300/25 bg-violet-400/10 px-5 py-2 text-sm text-violet-100"
          >
            {skill}
          </span>
        ),
      )}
    </div>
  </div>
</section>
    </main>
  )
}

export default Landing