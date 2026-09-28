/** Careers page — docs/SITE-BLUEPRINT.md §12. Real roles only; never placeholders. */

export type Role = {
  title: string;
  type: string;
  location: string;
  /** mailto: or an application form URL. */
  applyHref: string;
};

export const howWeWork = ["Named ownership.", "A demo every week.", "Nothing unnecessary."];

/** TODO(content): add open roles here. An empty list shows the open-application state. */
export const roles: Role[] = [];
