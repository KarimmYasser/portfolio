import en, { type Content } from "./en";

// In the future, you can add other locales (e.g., import ar from './ar')
// and switch based on user setting or i18n provider.

export type { Content };

export const locale = "en";
export const content: Content = en;
