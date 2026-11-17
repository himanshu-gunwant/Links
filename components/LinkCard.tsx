import React from "react";
import { LinkItem } from "@/config/links";
import { Icon } from "./Icons";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  // Stagger delays matching home site animation scale
  const delayClasses = [
    "delay-2",
    "delay-3",
    "delay-4",
    "delay-5",
    "delay-6",
    "delay-7",
    "delay-8",
  ];
  const delayClass = delayClasses[Math.min(index, delayClasses.length - 1)];

  const isExternal = link.isExternal !== false;
  const isMailto = link.href.startsWith("mailto:");

  return (
    <a
      href={link.href}
      target={isExternal && !isMailto ? "_blank" : undefined}
      rel={isExternal && !isMailto ? "noopener noreferrer" : undefined}
      className={`animate-enter ${delayClass} group block w-full p-3.5 -mx-3.5 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30`}
    >
      <div className="flex items-start gap-3.5">
        {/* Seamless Icon */}
        <div className="shrink-0 mt-0.5 text-muted group-hover:text-foreground transition-colors">
          <Icon name={link.icon} className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-medium text-foreground group-hover:text-white transition-colors">
              {link.label}
            </span>

            {/* Optional Monospace Tag */}
            {link.tag && (
              <span className="text-xs text-muted/75 font-mono whitespace-nowrap shrink-0">
                {link.tag}
              </span>
            )}
          </div>

          {/* Optional Short Description */}
          {link.description && (
            <p className="text-sm text-muted mt-0.5 leading-relaxed">
              {link.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
