/**
 * Every citation on the site, in one list. A reference's number is its position
 * here, so footnote marks (see Cite.astro) and the reference list on the
 * Research page always agree. Add new references at the end to keep existing
 * numbers stable.
 *
 * Journal and conference references link to the DOI. Recent announcements link
 * to the primary post. Each DOI was checked against Crossref for title and year.
 */
export interface Reference {
	id: string;
	/** Authors, or the organization. */
	cite: string;
	title: string;
	/** Venue and year. */
	where: string;
	href: string;
	group: 'verification' | 'rv';
}

export const references: Reference[] = [
	{
		id: 'sel4',
		cite: 'Klein et al.',
		title: 'seL4: Formal verification of an OS kernel',
		where: 'ACM Symposium on Operating Systems Principles, 2009',
		href: 'https://doi.org/10.1145/1629575.1629596',
		group: 'verification',
	},
	{
		id: 'compcert',
		cite: 'Leroy',
		title: 'Formal verification of a realistic compiler',
		where: 'Communications of the ACM, 2009',
		href: 'https://doi.org/10.1145/1538788.1538814',
		group: 'verification',
	},
	{
		id: 'hacl',
		cite: 'Zinzindohoue, Bhargavan, Protzenko, Beurdouche',
		title: 'HACL*: A verified modern cryptographic library',
		where: 'ACM Conference on Computer and Communications Security, 2017',
		href: 'https://doi.org/10.1145/3133956.3134043',
		group: 'verification',
	},
	{
		id: 'signal',
		cite: 'Google DeepMind',
		title: 'Introducing AlphaProof Code: a breakthrough in verifying complex software at depth',
		where: 'Google DeepMind blog, 10 November 2026',
		href: 'https://deepmind.google/blog/introducing-alphaproof-code/',
		group: 'verification',
	},
	{
		id: 'anthropic',
		cite: 'Anthropic',
		title: 'LLMs are making formal software verification feasible at a much larger scale',
		where: 'Anthropic Research, 2026',
		href: 'https://www.anthropic.com/research/formal-verification',
		group: 'verification',
	},
	{
		id: 'bartocci',
		cite: 'Bartocci, Falcone, Francalanza, Reger',
		title: 'Introduction to Runtime Verification',
		where: 'Lectures on Runtime Verification, LNCS 10457, 2018',
		href: 'https://doi.org/10.1007/978-3-319-75632-5_1',
		group: 'rv',
	},
	{
		id: 'leucker',
		cite: 'Leucker, Schallhart',
		title: 'A brief account of runtime verification',
		where: 'Journal of Logic and Algebraic Programming, 2009',
		href: 'https://doi.org/10.1016/j.jlap.2008.08.004',
		group: 'rv',
	},
	{
		id: 'bauer',
		cite: 'Bauer, Leucker, Schallhart',
		title: 'Runtime verification for LTL and TLTL',
		where: 'ACM Transactions on Software Engineering and Methodology, 2011',
		href: 'https://doi.org/10.1145/2000799.2000800',
		group: 'rv',
	},
	{
		id: 'basin',
		cite: 'Basin, Klaedtke, Müller, Zălinescu',
		title: 'Monitoring metric first-order temporal properties',
		where: 'Journal of the ACM, 2015',
		href: 'https://doi.org/10.1145/2699444',
		group: 'rv',
	},
	{
		id: 'schneider',
		cite: 'Schneider',
		title: 'Enforceable security policies',
		where: 'ACM Transactions on Information and System Security, 2000',
		href: 'https://doi.org/10.1145/353323.353382',
		group: 'rv',
	},
	{
		id: 'lamport',
		cite: 'Lamport',
		title: 'Time, clocks, and the ordering of events in a distributed system',
		where: 'Communications of the ACM, 1978',
		href: 'https://doi.org/10.1145/359545.359563',
		group: 'rv',
	},
];

export const refNumber = (id: string): number => {
	const i = references.findIndex((r) => r.id === id);
	if (i < 0) throw new Error(`Unknown reference: ${id}`);
	return i + 1;
};
