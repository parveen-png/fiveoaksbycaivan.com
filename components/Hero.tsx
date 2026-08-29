import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { images } from "@/lib/project-data";

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

      <Container className="relative grid items-center gap-8 py-12 sm:py-14 lg:min-h-[32rem] lg:grid-cols-[minmax(0,1fr)_26.5rem] lg:gap-12 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/75">
            Coming soon · Oakville
          </p>
          <h1
            id="page-title"
            className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="block">Five Oaks Oakville</span>
            <span className="mt-2 block text-[1.45rem] font-normal text-paper/85 sm:text-3xl">
              by Caivan Communities
            </span>
          </h1>
          <p id="answer" className="mt-5 max-w-md text-base leading-7 text-paper/88">
            Coming-soon detached homes and townhomes. Official prices are not
            published yet — register for verified updates.
          </p>
        </div>
        <LeadForm
          idPrefix="hero"
          heading="Get Project Updates"
          support="We’ll email you when official pricing, plans and launch details are published."
        />
      </Container>
    </section>
  );
}
