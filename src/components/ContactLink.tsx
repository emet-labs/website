interface ContactLinkProps {
	class?: string;
	label?: string;
}

export default function ContactLink(props: ContactLinkProps) {
	return (
		<a
			class={props.class}
			href="mailto:contact@emetlabs.com"
			aria-label="Contact Emet Labs by email"
		>
			{props.label ?? 'Contact us'}
		</a>
	);
}
