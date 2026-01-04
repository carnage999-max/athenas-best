'use client';

import {
  LayoutGrid,
  AlertCircle,
  RefreshCw,
  Leaf,
  Star,
  Package,
  HelpCircle,
  Info,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  home: LayoutGrid,
  problem: AlertCircle,
  process: RefreshCw,
  ingredients: Leaf,
  why: Star,
  products: Package,
  faq: HelpCircle,
  about: Info,
  shop: ShoppingCart,
};

export { LayoutGrid, AlertCircle, RefreshCw, Leaf, Star, Package, HelpCircle, Info, ShoppingCart };

export const LogoWordmark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 40" className={className} fill="currentColor">
    <text x="0" y="28" fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif">
      ATHENA'S BEST®
    </text>
  </svg>
);

