type Social = {
	label: string
	link: string
}

type Presentation = {
	logo: string
	mail: string
	title: string
	description: string
	socials: Social[]
}

const presentation: Presentation = {
	logo: '',
	mail: '',
	title: '',
	description: '',
	socials: [
		{
			label: 'Twitter',
			link: 'https://twitter.com/i4o_dev',
		},
		{
			label: 'Github',
			link: 'https://github.com/i4o-dev/saas-ui-inspo',
		},
	],
}

export default presentation
