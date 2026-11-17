import React from "react";
import { linksConfig } from "@/config/links";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="animate-enter delay-6 mt-16 pt-8 pb-12 border-t border-white/10 text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>
        © {currentYear} {linksConfig.header.name}
      </p>
      <div className="flex items-center gap-4 text-xs">
        <a
          href={linksConfig.header.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          himanshugunwant.com
        </a>
        <span className="text-white/20">·</span>
        <a
          href={`${linksConfig.header.url}/writing`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          Writing
        </a>
        <span className="text-white/20">·</span>
        <a
          href="https://github.com/himanshu-gunwant"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
