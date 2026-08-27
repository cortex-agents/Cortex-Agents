"use client";

// src/components/TeamMemberCard.tsx
// A team member rendered as a two-faced card. The portrait panel is a 3D flip
// stage: front = portrait, back = bio / focus areas / profile links.
//
// Why the flip lives on the PORTRAIT PANEL only (not the whole card): the panel
// has a fixed 3/4 aspect ratio, so both faces share identical bounds and the
// name + role below never shift when it turns. Flipping the whole card would
// need a hardcoded height and would fight the responsive grid.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { memberProfiles, type TeamMember } from "@/lib/team-data";
import {
  FacebookIcon,
  GitHubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./ui/BrandIcons";

type IconComponent = (props: { size?: number; className?: string }) => React.ReactElement;

// Keyed lowercase so `team-data` labels stay human-readable ("GitHub", "X").
const SOCIAL_ICONS: Record<string, IconComponent> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  x: XIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

function iconFor(label: string): IconComponent {
  return SOCIAL_ICONS[label.toLowerCase()] ?? GlobeIcon;
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);
  const openRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Only move focus after a real interaction — never on first paint.
  const interacted = useRef(false);

  useEffect(() => {
    if (!interacted.current) return;
    // The face being turned away becomes `inert`, which would drop focus to
    // <body>. Hand it to the face now facing the user instead.
    const target = flipped ? closeRef.current : openRef.current;
    target?.focus({ preventScroll: true });
  }, [flipped]);

  function turn(next: boolean) {
    interacted.current = true;
    setFlipped(next);
  }

  const index = String(member.id).padStart(2, "0");
  const profiles = memberProfiles(member);

  return (
    <div id={member.slug} className="group relative flex flex-col scroll-mt-28">
      {/* 3D stage */}
      <div className="relative aspect-[3/4] mb-6 [perspective:1400px]">
        <div
          className="relative h-full w-full transition-transform duration-700 ease-fast [transform-style:preserve-3d] motion-reduce:transition-none"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* ── FRONT ───────────────────────────────────────────────────── */}
          <div
            className="absolute inset-0 overflow-hidden bg-muted border border-border [backface-visibility:hidden]"
            inert={flipped}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Whole-panel flip trigger. Sits below the LinkedIn shortcut so
                that shortcut stays independently clickable. */}
            <button
              ref={openRef}
              type="button"
              onClick={() => turn(true)}
              aria-expanded={flipped}
              aria-label={`View ${member.name}'s profile details`}
              className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 z-20 bg-accent px-2 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-opacity duration-300 ease-fast opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              Profile +
            </span>

            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 z-20 bg-black text-white p-3 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 flex items-center justify-center"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <LinkedInIcon size={24} />
            </Link>
          </div>

          {/* ── BACK ────────────────────────────────────────────────────── */}
          <div
            className="absolute inset-0 flex flex-col bg-muted border border-border [backface-visibility:hidden] [transform:rotateY(180deg)]"
            inert={!flipped}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                {index} / Profile
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => turn(false)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") turn(false);
                }}
                aria-label={`Close ${member.name}'s profile details`}
                className="-mr-1 p-1 text-muted-foreground transition-colors duration-150 ease-fast hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {member.bio}
              </p>

              <p className="mt-5 mb-2.5 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Focus
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {member.expertise.map((skill) => (
                  <li
                    key={skill}
                    className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-4 py-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Connect
              </p>
              <div className="flex flex-wrap gap-2">
                {profiles.map((profile) => {
                  const Icon = iconFor(profile.label);
                  return (
                    <Link
                      key={profile.url}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${profile.label}`}
                      className="border border-border p-2 text-foreground transition-colors duration-150 ease-fast hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <Icon size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-display text-2xl font-bold tracking-tight mb-1 group-hover:text-accent transition-colors duration-150 ease-fast">
        {member.name}
      </h3>
      <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
        {member.role}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {member.ownership}
      </p>
    </div>
  );
}
