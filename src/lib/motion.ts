/**
 * The site's spring easing lived as a hand-copied object literal in ~13
 * components, with the damping value deliberately varying by UI weight
 * (24 for small icon buttons, 26 for general CTAs/links, 28 for the menu
 * icon, 30 for chevrons/tags) but the stiffness always 420. `spring()`
 * keeps that per-element tuning while removing the literal duplication.
 * `SPRING` is the plain damping-26 case, used as-is in most places.
 */
export function spring(damping = 26) {
  return { type: "spring", stiffness: 420, damping } as const;
}

export const SPRING = spring(26);
