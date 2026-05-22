"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url?: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-matte-beige)] text-[var(--color-warm-gray)] hover:text-[var(--color-rich-charcoal)] hover:border-[var(--color-rich-charcoal)] transition-colors"
      aria-label="Share product"
      title="Share"
    >
      {copied ? <Check size={18} /> : <Share2 size={18} />}
    </button>
  );
}
