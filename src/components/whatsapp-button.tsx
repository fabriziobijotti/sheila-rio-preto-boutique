import { MessageCircle } from "lucide-react";

import { wa } from "@/lib/loja-config";

interface WhatsAppButtonProps {
  mensagem: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  icon?: boolean;
  onClick?: () => void;
}

export function WhatsAppButton({
  mensagem,
  children,
  className = "",
  variant = "primary",
  icon = true,
  onClick,
}: WhatsAppButtonProps) {
  return (
    <a
      href={wa(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-base ${variant === "primary" && "btn-primary"} ${
        variant === "outline" && "btn-outline"
      } ${variant === "ghost" && "btn-ghost-light"} ${className}`}
      onClick={(e) => {
        onClick?.();
      }}
    >
      {icon && (
        <MessageCircle
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
          strokeWidth={1.5}
        />
      )}
      {children}
    </a>
  );
}
