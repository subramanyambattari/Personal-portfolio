"use client";

import { ExternalLink, Trophy } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/lib/data";
import type { Achievement } from "@/lib/types";

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="rounded-lg border border-border bg-bg-secondary/60 p-2 text-text-muted group-hover:text-accent transition-colors">
            <Trophy size={18} />
          </span>
          <div>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
              {achievement.title}
            </h3>
          </div>
        </div>
        <span className="rounded-full border border-border bg-bg-secondary/40 px-2 py-0.5 text-[11px] font-medium text-text-muted">
          {achievement.month} {achievement.year}
        </span>
      </div>

      <p className="mt-3 text-sm text-text-secondary">{achievement.description}</p>

      {achievement.link ? (
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-text-muted group-hover:text-accent transition-colors">
          View profile
          <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      ) : null}
    </>
  );

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
        aria-label={`View ${achievement.title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
      {content}
    </div>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-bg-primary px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Achievements
          </h2>
          <p className="text-text-secondary">Milestones and credentials.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {ACHIEVEMENTS_DATA.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
