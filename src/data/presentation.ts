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
			link: 'https://twitter.com/uxinspo_',
		},
		{
			label: 'Github',
			link: 'https://github.com/i4o-dev/uxinspo',
		},
	],
}

export default presentation
