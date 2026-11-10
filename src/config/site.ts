/**
 * Single source of truth for site metadata, navigation, and external links.
 * Change a value here rather than in individual components.
 */

export const site = {
	name: 'Emet Labs',
	url: 'https://emetlabs.ai',
	description:
		'Emet Labs builds verification infrastructure for AI agents: establishing what an autonomous system actually did, whether it was allowed to, and how strong the evidence is.',
	email: 'founders@emetlabs.ai',
} as const;

export const links = {
	email: `mailto:${site.email}`,
	docs: 'https://docs.emetlabs.ai',
	github: 'https://github.com/emet-labs',
	linkedin: 'https://www.linkedin.com/company/emetlabsai/',
	traceGrabRepo: 'https://github.com/emet-labs/trace-grab',
	traceGrabNpm: 'https://www.npmjs.com/package/@emetlabs/trace-grab',
	traceGrabDocs: 'https://docs.emetlabs.ai/trace-grab',
	traceGrabThreatModel: 'https://docs.emetlabs.ai/trace-grab/threat-model',
	traceGrabTransfer: 'https://docs.emetlabs.ai/trace-grab/transfer',
} as const;

export interface NavItem {
	href: string;
	label: string;
	external?: boolean;
}

export const primaryNav: NavItem[] = [
	{ href: '/sentinel', label: 'Sentinel' },
	{ href: '/research', label: 'Research' },
	{ href: '/trace-grab', label: 'trace-grab' },
	{ href: '/about', label: 'About' },
	{ href: links.docs, label: 'Docs', external: true },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
	{
		heading: 'Work',
		items: [
			{ href: '/sentinel', label: 'Sentinel' },
			{ href: '/research', label: 'Research' },
			{ href: '/trace-grab', label: 'trace-grab' },
			{ href: links.docs, label: 'Documentation', external: true },
		],
	},
	{
		heading: 'Company',
		items: [
			{ href: '/about', label: 'About' },
			{ href: '/careers', label: 'Careers' },
			{ href: '/blog', label: 'Blog' },
			{ href: links.email, label: 'Contact' },
		],
	},
	{
		heading: 'Elsewhere',
		items: [
			{ href: links.github, label: 'GitHub', external: true },
			{ href: links.linkedin, label: 'LinkedIn', external: true },
			{ href: '/privacy', label: 'Privacy' },
			{ href: '/legal', label: 'Legal' },
		],
	},
];

/**
 * Adobe Fonts web project ID for Minerva Modern (the brand display face).
 *
 * Minerva Modern is licensed through Adobe Fonts and must be served from Adobe's
 * CDN; font files must not be committed to this repository. To enable it:
 *   1. In Adobe Fonts, add Minerva Modern (Regular 400, plus Italic) to a web project.
 *   2. Add emetlabs.ai and localhost to the project's allowed domains.
 *   3. Paste the project ID (the `xxxxxxx` in use.typekit.net/xxxxxxx.css) into
 *      ADOBE_FONTS_KIT_ID below. PUBLIC_ADOBE_FONTS_KIT_ID overrides it for a local build.
 *
 * The ID is public by design (it appears in page source); it is not a secret.
 * Until it is set, display type renders in the fallback stack defined in global.css.
 */
const ADOBE_FONTS_KIT_ID = '';

export const adobeFontsKitId: string =
	import.meta.env.PUBLIC_ADOBE_FONTS_KIT_ID || ADOBE_FONTS_KIT_ID;
