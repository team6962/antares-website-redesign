import type { Route } from "next";

import { internalDoc } from "@/content/internal";

/**
 * The single list of header links. Add a route here when it should appear in
 * the header and the footer.
 */
export const siteNavigation: { href: Route; label: string }[] = [
  { href: "/about" as Route, label: "About" },
  { href: "/season" as Route, label: "Season" },
  { href: "/history" as Route, label: "History" },
  { href: "/training" as Route, label: "Training" },
  { href: "/sponsors" as Route, label: "Sponsors" },
];

/** The header's call to action, kept separate so it can be styled as a button. */
export const primaryAction = { href: "/donate" as Route, label: "Donate" };

/** Links that only make sense to team members. Not in the main navigation. */
export const internalNavigation: { href: Route; label: string }[] = [
  { href: "/internal" as Route, label: "Team internal" },
];

/**
 * The header's team-only link. It goes straight to the document in Google
 * Docs rather than to /internal, because the framed copy on that page does
 * not render for everyone: see the note at the top of app/(site)/internal.
 * A member clicking this from the header gets the document either way.
 */
export const internalAction = { href: internalDoc.openUrl, label: "Internal" };
