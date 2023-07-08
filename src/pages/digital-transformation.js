import Section1 from '@/modules/digital-transformation/section1';
import Section2 from '@/modules/digital-transformation/section2';
import Footer from '@/components/layouts/footer';
import Meta from '@/components/metaseo';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function DigitalTransformation() {
	const metas = {
		title: 'Royal Group - Digital Transformation',
		image: '/images/logo-navbar.png',
	};
	return (
		<>
			<main className={`${urbanist.variable} font-sans`}>
				<Meta data={metas} />
				<Section1 />
				<Section2 />
				<Footer />
			</main>
		</>
	);
}
