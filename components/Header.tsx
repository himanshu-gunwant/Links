import React from "react";
import Image from "next/image";
import { HeaderConfig } from "@/config/links";
import { Icon } from "./Icons";
import { linksConfig } from "@/config/links";

interface HeaderProps {
  header: HeaderConfig;
}

export function Header({ header }: HeaderProps) {
  return (
    <header className="animate-enter delay-1 flex flex-col items-center text-center space-y-4 pt-8 pb-4">
      {/* Avatar photo: not a clickable link, but preserves native long-press / right-click to open high-res image */}
      <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-[24px]">
        <Image
          src={header.avatar}
          alt={`${header.name}'s profile avatar`}
          width={112}
          height={112}
          priority
          unoptimized
          sizes="(max-width: 640px) 96px, 112px"
          className="w-full h-full rounded-2xl sm:rounded-[24px] object-cover ring-1 ring-white/10 shadow-sm"
        />
      </div>

      {/* Name and Tagline */}
      <div className="space-y-1.5 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {header.name}
        </h1>
        <p className="text-xs sm:text-sm text-muted font-normal tracking-normal leading-snug">
          {header.tagline}
        </p>
      </div>

      {/* Quick Social Icon Strip */}
      <nav aria-label="Social Profiles" className="flex items-center gap-3 pt-1">
        {linksConfig.quickSocials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-muted hover:text-foreground transition-colors p-2 rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
          >
            <Icon name={social.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        ))}
      </nav>
    </header>
  );
}
