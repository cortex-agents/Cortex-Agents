import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { OG_BASE, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import { FadeInUp, AccentBar } from '@/components/ui/Animations';

const PAGE_TITLE = 'Privacy Policy';
const PAGE_DESCRIPTION =
  'How Cortex Agents handles the information you send us: what our forms collect, what our analytics measures, which third parties are involved, and how to have your data removed.';
const PAGE_PATH = '/privacy';

/** Bump this whenever the policy text below changes — it is rendered on the page. */
const LAST_UPDATED = 'September 1, 2026';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    ...OG_BASE,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
  },
};

/** Shared shell so every clause gets the same numbering and rhythm. */
function Clause({
  index,
  heading,
  children,
}: {
  index: number;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <FadeInUp className="border-t border-border pt-10">
      <span className="block font-mono text-xs tracking-widest uppercase text-accent mb-4">
        {String(index).padStart(2, '0')}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6">
        {heading}
      </h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">{children}</div>
    </FadeInUp>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors duration-150 ease-fast"
    >
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: PAGE_TITLE, url: absoluteUrl(PAGE_PATH) },
        ])}
      />

      <Section spacing="loose" className="pt-32 pb-16">
        <FadeInUp className="mb-8">
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            Legal
          </span>
        </FadeInUp>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
          PRIVACY
          <br />
          POLICY
        </h1>
        <FadeInUp delay={0.1}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            We collect very little, we do not sell anything to anyone, and we do not run
            advertising trackers. This page states plainly what we hold, why we hold it, and how
            to make us delete it.
          </p>
        </FadeInUp>
        <AccentBar className="w-16 h-1 bg-accent mt-10" />
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-10">
          Last updated: {LAST_UPDATED}
        </p>
      </Section>

      <Section spacing="tight" className="pt-0 space-y-14">
        <Clause index={1} heading="Who we are">
          <p>
            Cortex Agents is a software and AI engineering agency operating remotely, with its base
            in Karachi, Pakistan, and clients worldwide. This policy covers the website{' '}
            <span className="text-foreground">cortexagents.org</span> and the enquiry forms on it.
          </p>
          <p>
            For anything in this policy, including a request to delete your data, write to{' '}
            <a
              href="mailto:cortexagents@gmail.com"
              className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors duration-150 ease-fast"
            >
              cortexagents@gmail.com
            </a>
            .
          </p>
        </Clause>

        <Clause index={2} heading="What our forms collect">
          <p>
            The site has four forms. Each one sends its contents to our own email inbox and nowhere
            else. <span className="text-foreground">We do not run a database</span>, so there is no
            stored profile of you beyond the email itself.
          </p>
          <ul className="space-y-4 list-none">
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Free audit request
              </span>
              Your name, work email, company or website, the service you are interested in, and the
              bottleneck you describe.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Contact form
              </span>
              Your name, email, subject, and message.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Collaboration enquiry
              </span>
              Your name, email, agency or company name, and message.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Job application
              </span>
              Your name, email, the role applied for, and the CV file you attach.
            </li>
          </ul>
          <p>
            We use this only to reply to you and to carry the conversation forward. We do not add
            you to a marketing list, and we do not pass your details to anyone selling anything.
          </p>
        </Clause>

        <Clause index={3} heading="Analytics and what it does not see">
          <p>
            We use Google Analytics 4 to understand which pages people find useful — how many
            visitors a page gets, which country or city they are in (approximate, derived from IP
            address), which site or search engine sent them, and what device and browser they used.
          </p>
          <p>
            When a form is submitted successfully we record a single event noting{' '}
            <span className="text-foreground">which form</span> was used and, for the audit form,{' '}
            <span className="text-foreground">which service</span> was selected. That event
            deliberately carries no name, no email address, no company name, and no message text —
            none of what you typed reaches Google.
          </p>
          <p>
            Google describes what it does with data from sites using its services here:{' '}
            <Ext href="https://www.google.com/policies/privacy/partners/">
              How Google uses information from sites or apps that use our services
            </Ext>
            .
          </p>
          <p>
            If you would rather not be counted at all, you can install{' '}
            <Ext href="https://tools.google.com/dlpage/gaoptout">
              Google&apos;s Analytics opt-out browser add-on
            </Ext>{' '}
            or block analytics cookies in your browser settings. Nothing on this site breaks if you
            do.
          </p>
        </Clause>

        <Clause index={4} heading="Cookies">
          <p>
            This site sets no advertising cookies and does no cross-site tracking. Two things are
            stored in your browser:
          </p>
          <ul className="space-y-4 list-none">
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Analytics cookies
              </span>
              Google Analytics sets cookies named <span className="font-mono">_ga</span> and{' '}
              <span className="font-mono">_ga_&lt;id&gt;</span> so that a returning visit is not
              counted as a brand-new person. These are set only while analytics is active on the
              site.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Theme preference
              </span>
              Your light or dark theme choice is kept in your browser&apos;s local storage. It never
              leaves your device and is not sent to us.
            </li>
          </ul>
        </Clause>

        <Clause index={5} heading="Who else is involved">
          <p>Three third parties necessarily touch data when you use this site:</p>
          <ul className="space-y-4 list-none">
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Vercel — hosting
              </span>
              Serves the site and keeps standard operational server logs (IP address, browser
              user-agent, requested URL) for security and debugging.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Google (Gmail) — form delivery and storage
              </span>
              Form submissions are delivered as email and stored in our mailbox.
            </li>
            <li className="border-l-2 border-border pl-5">
              <span className="block font-mono text-[11px] tracking-widest uppercase text-accent mb-1">
                Google Analytics — measurement
              </span>
              Receives the usage data described in section 03.
            </li>
          </ul>
          <p>
            We do not sell personal data, and we do not share it with data brokers, ad networks, or
            any other party beyond the three above.
          </p>
        </Clause>

        <Clause index={6} heading="How long we keep it">
          <p>
            Enquiry emails are kept while the conversation is live and for as long as we may
            reasonably need them for the business relationship or our records. Ask us to delete
            yours and we will.
          </p>
          <p>
            CVs sent through the careers form are kept only for the hiring process for that role
            unless you ask us to hold onto yours for future openings.
          </p>
          <p>
            Analytics data is retained for the period configured in our Google Analytics property.
            Google&apos;s default for a standard property is 2 months, with 14 months the maximum
            available.
          </p>
        </Clause>

        <Clause index={7} heading="Your rights">
          <p>
            Wherever you are, you can ask us to show you what we hold about you, correct it, or
            delete it. Depending on where you live — for example under the GDPR in the EU and UK, or
            under state privacy laws in the United States — you may also have the right to object to
            processing, to restrict it, or to receive your data in a portable form.
          </p>
          <p>
            Email{' '}
            <a
              href="mailto:cortexagents@gmail.com"
              className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors duration-150 ease-fast"
            >
              cortexagents@gmail.com
            </a>{' '}
            and we will act on it. We do not charge for this and we will not ask you to justify the
            request.
          </p>
        </Clause>

        <Clause index={8} heading="Children">
          <p>
            This is a business-to-business site. It is not directed at children and we do not
            knowingly collect information from anyone under 16. If you believe a child has sent us
            something, tell us and we will delete it.
          </p>
        </Clause>

        <Clause index={9} heading="Changes to this policy">
          <p>
            If what we collect or who we share it with changes, we will update this page and move
            the &ldquo;last updated&rdquo; date at the top. Material changes will be reflected here
            before they take effect, not after.
          </p>
        </Clause>
      </Section>

      <Section spacing="standard" className="border-t border-border">
        <FadeInUp className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
              Questions?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight uppercase">
              Ask us anything about your data.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Get in Touch
            </Button>
            <Button variant="ghost" href="/">
              ← Back to Home
            </Button>
          </div>
        </FadeInUp>
      </Section>

      <Section spacing="tight" className="border-t border-border pt-10 pb-20">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Cortex Agents &middot; Karachi, Pakistan &middot;{' '}
          <Link
            href="/contact"
            className="text-foreground hover:text-accent transition-colors duration-150 ease-fast"
          >
            Contact
          </Link>
        </p>
      </Section>
    </main>
  );
}
