import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-transparent to-violet-50/40 dark:from-blue-950/30 dark:via-transparent dark:to-violet-950/20" />
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20" />
      <div className="absolute bottom-0 left-0 -z-10 h-56 w-56 rounded-full bg-violet-100/50 blur-3xl dark:bg-violet-900/20" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Strategic FP&amp;A &amp; Finance Leadership
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Hi, I&apos;m Tamara Golubov
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Strategic FP&amp;A leader with 10+ years building modern,
            data-driven finance functions in AI and technology. I stand up
            forecasting, budgeting, and KPI frameworks from scratch and
            translate complex analysis into clear narratives for boards,
            investors, and executives.
          </p>
          <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 hover:shadow-md dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              View My Work
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:shadow-md dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
