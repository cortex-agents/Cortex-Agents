import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { FadeInUp, AccentBar } from '@/components/ui/Animations';

export const metadata = {
  title: '404 - System Error | Cortex Agents',
};

export default function NotFound() {
  return (
    <main className="bg-background text-foreground min-h-screen flex items-center justify-center">
      <Section spacing="loose" className="w-full flex flex-col items-center justify-center text-center">
        <FadeInUp className="mb-4">
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1 inline-block">
            System Error
          </span>
        </FadeInUp>
        
        <FadeInUp delay={0.1}>
          <h1 className="font-display text-8xl md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter uppercase leading-[0.8] mb-8 text-foreground/10 select-none relative">
            404
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold text-foreground w-full">
              NOT FOUND
            </span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2} className="flex flex-col items-center">
          <AccentBar className="w-24 h-1 bg-accent mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            The endpoint you are looking for does not exist or has been deprecated. Return to base or contact engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
            <Button variant="primary" size="lg" href="/" className="w-full sm:w-auto">
              Return Home
            </Button>
            <Button variant="secondary" size="lg" href="/contact" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </div>
        </FadeInUp>
      </Section>
    </main>
  );
}
