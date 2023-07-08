import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({ data }) => {
	const router = useRouter();

	// let url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`;
	let url = 'https://naturesgoldtoken.io';
	return (
		<>
			<Head>
				<title property='title'>{data.title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='title' content={data.title} />
				<meta property='description' name='description' content={data.description} />
				<meta property='author' content='naturesgoldtoken.io' />
				{/* facebook */}
				<meta property='og:url' content={url} />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={data.title} />
				<meta property='og:description' content={data.description} />
				<meta property='og:image' content={data.image} />
				<meta property='og:image:secure_url' content={data.image} />
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='400' />
				<meta property='og:image:height' content='300' />
				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={url} />
				<meta property='twitter:title' content={data.title} />
				<meta property='twitter:description' content={data.description} />
				<meta property='twitter:image' content={data.image} />
			</Head>
		</>
	);
};

export default Meta;
