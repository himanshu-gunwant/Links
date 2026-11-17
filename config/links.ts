export type IconName =
  | "website"
  | "github"
  | "linkedin"
  | "instagram"
  | "x"
  | "youtube"
  | "email"
  | "medium"
  | "devto"
  | "hashnode"
  | "discord"
  | "aboutme"
  | "gravatar"
  | "soloto";

export interface LinkItem {
  /** Unique key for React rendering */
  id: string;
  /** Primary label displayed on the card */
  label: string;
  /** Destination URL or mailto link */
  href: string;
  /** Short optional description matching the home site tone */
  description?: string;
  /** Monospace badge or handle on the right side */
  tag?: string;
  /** Icon key corresponding to SVG icons in components/Icons.tsx */
  icon: IconName;
  /** Whether the link opens in a new tab (defaults to true) */
  isExternal?: boolean;
  /** Optional highlight styling */
  highlight?: boolean;
}

export interface HeaderConfig {
  name: string;
  tagline: string;
  avatar: string;
  url: string;
  location?: string;
}

export interface LinksPageConfig {
  header: HeaderConfig;
  quickSocials: {
    label: string;
    href: string;
    icon: IconName;
  }[];
  links: LinkItem[];
}

/**
 * =============================================================================
 * LINKS CONFIGURATION
 * Edit, add, or reorder links in this array. Each entry is a single object.
 * To add a new link, simply append an entry to the `links` array below.
 * =============================================================================
 */
export const linksConfig: LinksPageConfig = {
  header: {
    name: "Himanshu Gunwant",
    tagline: "Developer · Builder · Student @ IIIT Tiruchirappalli",
    avatar: "/profile.jpg",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://himanshugunwant.com",
    location: "IIIT Tiruchirappalli",
  },

  // Quick social icons displayed in the hero section below the tagline
  quickSocials: [
    {
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/himanshu-gunwant",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://www.linkedin.com/in/himanshugunwant/",
      icon: "linkedin",
    },
    {
      label: "X (Twitter)",
      href: process.env.NEXT_PUBLIC_SOCIAL_X || "https://x.com/himanshugg_",
      icon: "x",
    },
    {
      label: "Discord",
      href: "https://discord.com/users/1166774375001890917",
      icon: "discord",
    },
    {
      label: "YouTube",
      href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://www.youtube.com/@Himanshu-Gunwant",
      icon: "youtube",
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/himanshugunwant_",
      icon: "instagram",
    },
    {
      label: "Email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "hello@himanshugunwant.com"}`,
      icon: "email",
    },
  ],

  // Main vertical stack of full-width link cards
  links: [
    {
      id: "website",
      label: "My website",
      href: process.env.NEXT_PUBLIC_SITE_URL || "https://himanshugunwant.com",
      description: "Personal portfolio, writings, and selected projects.",
      tag: "himanshugunwant.com",
      icon: "website",
      highlight: true,
    },
    {
      id: "github",
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/himanshu-gunwant",
      description: "Open-source projects, developer tools, and backend experiments.",
      tag: "@himanshu-gunwant",
      icon: "github",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://www.linkedin.com/in/himanshugunwant/",
      description: "Professional updates, engineering experience, and career network.",
      tag: "in/himanshugunwant",
      icon: "linkedin",
    },
    {
      id: "x",
      label: "X / Twitter",
      href: process.env.NEXT_PUBLIC_SOCIAL_X || "https://x.com/himanshugg_",
      description: "Thoughts on software engineering, building products, and tech.",
      tag: "@himanshugg_",
      icon: "x",
    },
    {
      id: "discord",
      label: "Discord",
      href: "https://discord.com/users/1166774375001890917",
      description: "Connect, collaborate, or chat directly on Discord.",
      tag: "himanshugunwant",
      icon: "discord",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://www.youtube.com/@Himanshu-Gunwant",
      description: "Development walkthroughs, tech guides, and project demos.",
      tag: "@Himanshu-Gunwant",
      icon: "youtube",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/himanshugunwant_",
      description: "Behind-the-scenes, campus life, and casual updates.",
      tag: "@himanshugunwant_",
      icon: "instagram",
    },
    {
      id: "medium",
      label: "Medium",
      href: "https://medium.com/@himanshugunwant",
      description: "Long-form articles on technology, systems, and programming.",
      tag: "@himanshugunwant",
      icon: "medium",
    },
    {
      id: "devto",
      label: "Dev.to",
      href: "https://dev.to/himanshugunwant",
      description: "Technical writeups, coding tutorials, and dev community discussions.",
      tag: "himanshugunwant",
      icon: "devto",
    },
    {
      id: "hashnode",
      label: "Hashnode",
      href: "https://hashnode.com/@himanshugunwant",
      description: "Developer blog and software engineering publications.",
      tag: "@himanshugunwant",
      icon: "hashnode",
    },
    {
      id: "aboutme",
      label: "About.me",
      href: "https://about.me/himanshugunwant",
      description: "Public bio and personal introduction page.",
      tag: "himanshugunwant",
      icon: "aboutme",
    },
    {
      id: "soloto",
      label: "solo.to",
      href: "https://solo.to/himanshugunwant",
      description: "Digital card and bio link directory.",
      tag: "himanshugunwant",
      icon: "soloto",
    },
    {
      id: "gravatar",
      label: "Gravatar",
      href: "https://gravatar.com/gunwanthimanshu",
      description: "Verified globally recognized avatar profile.",
      tag: "gunwanthimanshu",
      icon: "gravatar",
    },
  ],
};
