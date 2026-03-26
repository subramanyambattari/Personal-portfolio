"use client";

import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATES_DATA } from "@/lib/data";
import type { Certificate } from "@/lib/types";

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <a
      href={certificate.file}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
      aria-label={`View certificate: ${certificate.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="rounded-lg border border-border bg-bg-secondary/60 p-2 text-text-muted group-hover:text-accent transition-colors">
            <Award size={18} />
          </span>
          <div>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
              {certificate.title}
            </h3>
            {certificate.issuer ? (
              <p className="text-xs text-text-muted">Issued by {certificate.issuer}</p>
            ) : null}
          </div>
        </div>
        <span className="rounded-full border border-border bg-bg-secondary/40 px-2 py-0.5 text-[11px] font-medium text-text-muted">
          PDF
        </span>
      </div>

      {certificate.description ? (
        <p className="mt-3 text-sm text-text-secondary">{certificate.description}</p>
      ) : null}

      <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-text-muted group-hover:text-accent transition-colors">
        View certificate
        <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="bg-bg-primary px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Certificates
          </h2>
          <p className="text-text-secondary">Proof of learning and focus areas.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {CERTIFICATES_DATA.map((certificate) => (
            <CertificateCard key={certificate.file} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
