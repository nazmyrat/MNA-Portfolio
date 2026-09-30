import FloatingLines from '@/components/react-bits/FloatingLines'
import FlipCard from '@/components/react-bits/FlipCard'
import GooeyNav from '@/components/react-bits/GooeyNav'
import GlideSelect from '@/components/react-bits/GlideSelect'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/components/i18n/changeLanguage'
import ShinyText from '@/components/react-bits/ShinyText'
import FolderFloat from '@/components/react-bits/FolderFloat'
import FoldText from '@/components/react-bits/FoldText'
import { useState } from 'react'
import SwipeToast from '@/components/react-bits/SwipeToast'
import TargetCursor from '@/components/react-bits/TargetCursor'

const Landing = () => {
  const { i18n, t } = useTranslation()
  const [toastOpen, setToastOpen] = useState(false)
  const navItems = [
    { label: t('portfolio.navigation.home'), href: '#home' },
    { label: t('portfolio.navigation.about'), href: '#about' },
    { label: t('portfolio.navigation.projects'), href: '#projects' },
    { label: t('portfolio.navigation.contact'), href: '#contact' },
  ]

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#120F17]" >
      <TargetCursor
  spinDuration={2}
  hideDefaultCursor
  hoverDuration={0.2}
  cursorColor="#ffffff"
  cursorColorOnTarget="#B497CF"
/>
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
    const clickedLink = event.target instanceof Element
      ? event.target.closest('a[href="#home"]')
      : null

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
            ariaLabel={t('portfolio.languageLabel')}
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
<div className="pointer-events-auto hero-copy w-full max-w-3xl text-left md:-translate-y-10">

   <h2
  className="mb-3 text-3xl font-semibold tracking-wide text-violet-100 md:text-4xl"
  style={{
    textShadow: '0 0 16px rgba(216, 180, 254, 0.7), 0 2px 10px #120F17',
  }}
>
  {t('portfolio.hero.greeting')}
</h2>


  <h1 className="my-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl">
  <span className="cursor-target inline-block">
    <ShinyText
      text="Full-Stack"
      className="hero-shiny"
      speed={2}
      color="#ffffff"
      shineColor="#f3c8ff"
      spread={120}
      direction="left"
      delay={0}
    />
  </span>{' '}
  <span className="cursor-target inline-block">
    <ShinyText
      text="Developer"
      className="hero-shiny"
      speed={2}
      color="#ffffff"
      shineColor="#f3c8ff"
      spread={120}
      direction="left"
      delay={0}
    />
  </span>
  <span aria-hidden="true" className="hero-caret" />
</h1>

<div className="cursor-target max-w-2xl space-y-4 text-lg leading-relaxed text-white md:text-xl">
  <p>{t('portfolio.hero.description')}</p>

  <p className="border-l-2 border-violet-400 pl-4 font-medium text-violet-100">
    {t('portfolio.hero.motto')}
  </p>
</div>

  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
    <a
      href="#contact"
      className="cursor-target rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
    >
      {t('portfolio.hero.contactCta')}
    </a>

    <a
      href="#projects"
      className="cursor-target rounded-xl border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
    >
      {t('portfolio.hero.projectsCta')}
    </a>
  </div>
</div>

        {/* FlipCard */}
        <div className="cursor-target pointer-events-auto flex w-full justify-center md:w-auto md:-translate-x-24 md:-translate-y-10">
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
                  alt={t('portfolio.hero.avatarAlt')}
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
                  {'MNA'}
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
            ariaLabel={t('portfolio.flipCardAlt')}
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
  <div className="mx-auto grid max-w-6xl  -translate-x-18 items-center gap-12 md:grid-cols-[minmax(0,1fr)_400px]">
    {/* Текст обо мне — слева */}
    <div className="min-w-0">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
        {t('portfolio.about.eyebrow')}
      </p>

      <h2 className="mb-8 max-w-4xl font-bold leading-tight">
  <FoldText
    text={t('portfolio.about.heading')}
    splitBy="line"
    hinge="top"
    trigger="scroll"
    duration={2}
    stagger={0.3}
    ease="power3.out"
    perspective={700}
    creaseShading={0.55}
    fontSize="clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight={800}
    color="#ffffff"
  />
</h2>

      <div className="cursor-target max-w-3xl space-y-5 text-lg leading-relaxed text-white/80 md:text-xl">
        <p>
          {t('portfolio.about.paragraph1')}
        </p>

        <p>
          {t('portfolio.about.paragraph2')}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {['Web Development', 'Python', 'Data Analytics', 'Machine Learning'].map(
          (skill) => (
            <span
              key={skill}
              className="cursor-target rounded-full border border-violet-300/25 bg-violet-400/10 px-5 py-2 text-sm text-violet-100"
            >
              {skill}
            </span>
          ),
        )}
      </div>
    </div>

    {/* FolderFloat — справа */}
    <div className="flex justify-center md:justify-end">
      <FolderFloat
        items={[
          t('portfolio.about.stackProgramming'),
          'HTML · CSS · React',
          'Node.js · PostgreSQL',
          'Pandas· NumPy',
        ]}
        label={t('portfolio.about.stackLabel')}
        sublabel={t('portfolio.about.stackCount')}
        trigger="hover"
        closeOnSelect
        physics
        drift={0.5}
        folderColor="#3f3f46"
        frontColor="#52525b"
        paperColor="#f5f5f5"
        itemColor="#f5f5f5"
        itemTextColor="#18181b"
        labelColor="#f5f5f5"
        width={200}
        height={148}
        radius={14}
        spread={180}
        lift={26}
        tilt={8}
        flapAngle={34}
        restAngle={16}
        openDuration={520}
        stagger={45}
        bounce={0.3}
      />
    </div>
  </div>
</section>
<section
  id="projects"
  className="relative z-10 min-h-screen scroll-mt-28 px-6 py-28 text-white"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
      {t('portfolio.projects.eyebrow')}
    </p>

    <h2 className="cursor-target mb-12 text-4xl font-bold md:text-6xl">
      {t('portfolio.projects.title')}
    </h2>

    <div className="grid gap-6 lg:grid-cols-2">
      {/* Neuro-Affirmations */}
      <article className="rounded-3xl border border-white/10 bg-[#120F17]/70 p-7 backdrop-blur-md lg:col-span-2">
        <p className="mb-3 text-sm font-medium text-violet-300">
          {t('portfolio.projects.neuroCategory')}
        </p>

        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
          {'Neuro-Affirmations'}
        </h3>

        <p className="mb-6 max-w-3xl leading-relaxed text-white/75">
          {t('portfolio.projects.neuroDescription')}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-white/75">
          <li>{t('portfolio.projects.neuroBullet1')}</li>
          <li>{t('portfolio.projects.neuroBullet2')}</li>
          <li>{t('portfolio.projects.neuroBullet3')}</li>
          <li>{t('portfolio.projects.neuroBullet4')}</li>
        </ul>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://neuroaffirmathion.shop/"
            target="_blank"
            rel="noreferrer"
            className="cursor-target rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
          >
            {t('portfolio.projects.openSite')}
          </a>

          <a
            href="https://t.me/neuro_affirmation_bot"
            target="_blank"
            rel="noreferrer"
            className="cursor-target rounded-xl border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
          >
            {t('portfolio.projects.openBot')}
          </a>
        </div>
      </article>

      {/* Data Analytics */}
      <article className="rounded-3xl border border-white/10 bg-[#120F17]/70 p-7 backdrop-blur-md">
        <p className="mb-3 text-sm font-medium text-violet-300">
          {t('portfolio.projects.analyticsCategory')}
        </p>

        <h3 className="mb-4 text-2xl font-bold">{t('portfolio.projects.analyticsTitle')}</h3>

        <p className="mb-4 leading-relaxed text-white/75">
          {t('portfolio.projects.analyticsDescription')}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-white/75">
          <li>{t('portfolio.projects.analyticsBullet1')}</li>
          <li>{t('portfolio.projects.analyticsBullet2')}</li>
          <li>{t('portfolio.projects.analyticsBullet3')}</li>
        </ul>

        <p className="text-sm text-violet-200">
          {'Python · Pandas · NumPy · Seaborn · Scikit-learn'}
        </p>

        <a
          href="https://github.com/nazmyrat/Stroke-prediction"
          target="_blank"
          rel="noreferrer"
          className="cursor-target mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
        >
          {t('portfolio.projects.researchCta')}
        </a>
      </article>

      {/* Online Store */}
      <article className="rounded-3xl border border-white/10 bg-[#120F17]/70 p-7 backdrop-blur-md">
        <p className="mb-3 text-sm font-medium text-violet-300">
          {t('portfolio.projects.storeCategory')}
        </p>

        <h3 className="mb-4 text-2xl font-bold">{'Online Store'}</h3>

        <p className="mb-4 leading-relaxed text-white/75">
          {t('portfolio.projects.storeDescription')}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-white/75">
          <li>{t('portfolio.projects.storeBullet1')}</li>
          <li>{t('portfolio.projects.storeBullet2')}</li>
          <li>{t('portfolio.projects.storeBullet3')}</li>
        </ul>

        <p className="text-sm text-violet-200">
          {'React · JavaScript · HTML5 · CSS · Git · GitHub'}
        </p>

        <a
          href="https://github.com/nazmyrat/Online-Store"
          target="_blank"
          rel="noreferrer"
          className="cursor-target mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
        >
          {t('portfolio.projects.storeCta')}
        </a>
      </article>
    </div>
  </div>
</section>

<section
  id="contact"
  className="relative z-10 scroll-mt-28 px-6 py-28 text-white"
>
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-10 rounded-3xl border border-white/10 bg-[#0b0b12]/90 p-6 shadow-2xl backdrop-blur-md md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
      {/* Контакты слева */}
      <div>
        <h2 className="mb-4 text-3xl font-bold text-violet-400 md:text-4xl">
          {t('portfolio.contact.title')}
        </h2>

        <p className="mb-7 max-w-md leading-relaxed text-white/65">
          {t('portfolio.contact.description')}
        </p>

        <div className="space-y-5 text-white/85">
          <a
            href="mailto:naz20112006@gmail.com"
            className="flex items-center gap-4 hover:text-violet-300"
          >
            <span aria-hidden="true">{'✉'}</span>
            {'naz20112006@gmail.com'}
          </a>

          <a
            href="https://github.com/nazmyrat"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 hover:text-violet-300"
          >
            <svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  className="h-5 w-5 fill-current"
>
  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
</svg>
            {'github.com/nazmyrat'}
          </a>
        </div>
      </div>

      {/* Форма справа */}
      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault()

          const data = new FormData(event.currentTarget)
          const nameValue = data.get('name')
          const emailValue = data.get('email')
          const messageValue = data.get('message')
          const name = typeof nameValue === 'string' ? nameValue : ''
          const email = typeof emailValue === 'string' ? emailValue : ''
          const message = typeof messageValue === 'string' ? messageValue : ''

          const subject = t('portfolio.contact.emailSubject', { name })
          const body = `${t('portfolio.contact.emailName')}: ${name}\n${t('portfolio.contact.email')}: ${email}\n\n${message}`
          setToastOpen(true)

          globalThis.location.href =
            `mailto:naz20112006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder={t('portfolio.contact.name')}
            aria-label={t('portfolio.contact.name')}
            required
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 outline-none placeholder:text-white/60 focus:border-violet-500"
          />

          <input
            name="email"
            type="email"
            placeholder={t('portfolio.contact.email')}
            aria-label={t('portfolio.contact.email')}
            required
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 outline-none placeholder:text-white/60 focus:border-violet-500"
          />
        </div>

        <textarea
          name="message"
          placeholder={t('portfolio.contact.message')}
          aria-label={t('portfolio.contact.message')}
          rows={5}
          required
          className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 outline-none placeholder:text-white/60 focus:border-violet-500"
        />

        <button
          type="submit"
          className="cursor-target rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
        >
          {t('portfolio.contact.submit')}
        </button>
      </form>
    </div>

    <footer className="flex items-center justify-between px-2 py-6 text-sm text-white/55">
      <span>{`© ${new Date().getFullYear()} Muratova Nazyly`}</span>

      <a
        href="#home"
        aria-label={t('portfolio.contact.backToTop')}
        className="grid h-12 w-12 place-items-center rounded-full bg-violet-600 text-2xl text-white transition hover:bg-violet-500"
      >
        {'↑'}
      </a>
    </footer>
  </div>
</section>
<SwipeToast
  open={toastOpen}
  onClose={() => setToastOpen(false)}
  title={t('portfolio.contact.toastTitle')}
  description={t('portfolio.contact.toastDescription')}
  actionLabel={t('portfolio.contact.toastOk')}
  background="#27272a"
  color="#f5f5f5"
  fuseColor="#A855F7"
  duration={4500}
  fuse="bottom"
  pauseOnHover
/>
    </main>
  )
}

export default Landing
