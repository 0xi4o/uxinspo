import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

type ContentCardProps = {
	alt: string
	aspectRatio: number
	src: string
	width: number
}

export default function ContentCard({ alt, src, width }: ContentCardProps) {
	return (
		<figure className='flex flex-col'>
			<div className='image relative flex h-auto w-full border-2 border-white object-cover shadow-[5px_5px_0_0_rgba(250,238,231,0.9)] transition-all duration-200 hover:shadow-none'>
				<LightGallery download={false} plugins={[lgThumbnail, lgZoom]}>
					<a href={src}>
						<img alt={alt} src={src} width={width} />
					</a>
				</LightGallery>
			</div>
		</figure>
	)
}
