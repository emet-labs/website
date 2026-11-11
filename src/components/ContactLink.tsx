import { links } from '../config/site';

interface ContactLinkProps {
	class?: string;
	label?: string;
}

export default function ContactLink(props: ContactLinkProps) {
	return (
		<a class={props.class} href={links.email}>
			{props.label ?? 'Contact us'}
		</a>
	);
}
