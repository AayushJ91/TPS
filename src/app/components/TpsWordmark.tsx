/**
 * TpsWordmark
 * Typography-based brand mark — no image, no SVG, pure text.
 *
 * Inspired by Bentley Systems / BlackRock institutional tone:
 *   TRIPARNA SYSTEMS
 *   Infrastructure • Energy • Resilience
 */

interface TpsWordmarkProps {
  /** "light"  → navy text (for use on white/light backgrounds)
   *  "dark"   → white text (for use on dark backgrounds) */
  variant?: "light" | "dark";
  /** Show the secondary tagline below the primary mark */
  showTagline?: boolean;
  /** Extra class names applied to the outer wrapper */
  className?: string;
}

export default function TpsWordmark({
  variant = "light",
  showTagline = false,
  className = "",
}: TpsWordmarkProps) {
  const isLight = variant === "light";

  return (
    <div className={`tps-wordmark ${className}`} aria-label="Triparna Systems">
      {/* Primary wordmark */}
      <span
        className="tps-wordmark__primary"
        style={{
          display: "block",
          fontFamily: "'Crimson Pro', serif",
          fontWeight: 600,
          fontSize: "inherit",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          lineHeight: 1,
          color: isLight ? "#071625" : "#ffffff",
          whiteSpace: "nowrap",
          transition: "opacity 0.2s ease",
        }}
      >
        Triparna Systems
      </span>

      {/* Optional secondary tagline */}
      {showTagline && (
        <span
          className="tps-wordmark__tagline"
          style={{
            display: "block",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "0.55em",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: isLight ? "#8a7d6b" : "#9b9080",
            marginTop: "0.45em",
            whiteSpace: "nowrap",
          }}
        >
          Infrastructure&nbsp;•&nbsp;Energy&nbsp;•&nbsp;Resilience
        </span>
      )}
    </div>
  );
}
