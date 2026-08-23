// src/components/ui/JsonLd.tsx
// Renders a JSON-LD structured-data block. Server component — no "use client".
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
