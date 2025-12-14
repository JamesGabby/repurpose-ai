// src/components/ui/icons.tsx
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  FileText,
  Mic,
  Video,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Check,
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Quote,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Loader2,
  Copy,
  Download,
  RefreshCw,
  Settings,
  BarChart3,
  Globe,
  Palette,
  Calendar,
  type LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  mail: Mail,
  fileText: FileText,
  mic: Mic,
  video: Video,
  sparkles: Sparkles,
  zap: Zap,
  clock: Clock,
  trendingUp: TrendingUp,
  users: Users,
  shield: Shield,
  check: Check,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  play: Play,
  star: Star,
  quote: Quote,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  loader: Loader2,
  copy: Copy,
  download: Download,
  refresh: RefreshCw,
  settings: Settings,
  chart: BarChart3,
  globe: Globe,
  palette: Palette,
  calendar: Calendar,
  // Platform specific
  tiktok: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  ),
  threads: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.167 1.09-.017 2.086.163 2.994.479l.008-.091c-.005-1.593-.276-2.746-.806-3.424-.49-.626-1.24-.93-2.295-.93h-.009c-.882.006-1.583.282-2.08.82-.37.4-.613.943-.727 1.617l-2.032-.275c.186-1.103.612-2.01 1.266-2.702.93-.982 2.24-1.5 3.573-1.5h.017c1.735 0 3.085.578 3.912 1.673.755.999 1.138 2.443 1.14 4.295v.141c1.139.6 2.036 1.41 2.616 2.664.828 1.79.714 4.327-1.395 6.395C18.806 23.1 15.929 23.98 12.186 24zm.082-8.856c-1.452.083-2.556.69-2.482 1.894.044.703.467 1.216 1.194 1.45.427.138.91.2 1.404.178.931-.05 1.66-.39 2.17-1.012.402-.49.67-1.145.803-1.96-.923-.333-1.99-.556-3.089-.55z" />
    </svg>
  ),
};