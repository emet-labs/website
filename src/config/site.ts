/**
 * Single source of truth for site metadata, navigation, and external links.
 * Change a value here rather than in individual components.
 */

export const site = {
	name: 'Emet Labs',
	url: 'https://emetlabs.ai',
	description:
		'Emet Labs builds runtime verification infrastructure for services, applications and AI agents: formal rules for the protocols between them, checked against what happened, with the evidence behind every verdict.',
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
	{ href: '/sentinel/', label: 'Sentinel' },
	{ href: '/research/', label: 'Research' },
	{ href: '/trace-grab/', label: 'Share traces' },
	{ href: '/about/', label: 'About' },
	{ href: links.docs, label: 'Docs', external: true },
];

/** Footer links in two groups: the site's own pages, then external and legal links. */
export const footerNav: NavItem[][] = [
	[
		{ href: '/sentinel/', label: 'Sentinel' },
		{ href: '/research/', label: 'Research' },
		{ href: '/trace-grab/', label: 'Share traces' },
		{ href: '/about/', label: 'About' },
		{ href: '/careers/', label: 'Careers' },
	],
	[
		{ href: links.docs, label: 'Docs', external: true },
		{ href: links.github, label: 'GitHub', external: true },
		{ href: links.linkedin, label: 'LinkedIn', external: true },
		{ href: '/privacy/', label: 'Privacy' },
		{ href: '/legal/', label: 'Legal' },
	],
];
