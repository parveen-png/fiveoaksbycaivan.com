import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, heroChips, images } from "@/lib/project-data";
import { homePage } from "@/lib/pages";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0 max-lg:bg-[linear-gradient(180deg,rgba(28,23,18,0.78)_0%,rgba(28,23,18,0.5)_38%,rgba(28,23,18,0.72)_100%)] lg:bg-[linear-gradient(90deg,#1c1712_0%,rgba(28,23,18,0.88)_34%,rgba(28,23,18,0.45)_62%,rgba(28,23,18,0.18)_100%)]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative grid items-center gap-10 py-14 sm:py-16 lg:min-h-[38rem] lg:grid-cols-[minmax(0,1fr)_26.5rem] lg:gap-12 lg:py-24">
        <div className="max-w-2xl">
          <ul className="flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="border border-paper/25 bg-ink/35 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-paper backdrop-blur-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
          <h1
            id="page-title"
            className="mt-6 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="block">Five Oaks Oakville</span>
            <span className="mt-2 block text-[1.55rem] font-normal text-paper/85 sm:text-3xl lg:text-[2rem]">
              by Caivan Communities
            </span>
          </h1>
          <p
            id="answer"
            className="mt-6 max-w-xl text-base leading-7 text-paper/90 sm:text-lg sm:leading-8"
          >
            {homePage.answer}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-paper/70">
            {copy.independentDisclosure}
          </p>
        </div>
        <LeadForm idPrefix="hero" />
      </Container>
    </section>
  );
}
