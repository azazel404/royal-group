import Section1 from '@/modules/identity/section1';
import Section2 from '@/modules/identity/section2';
import Section3 from '@/modules/identity/section3';
import Section4 from '@/modules/identity/section4';
import Footer from '@/components/layouts/footer';
import Meta from '@/components/metaseo';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function Identity() {
	const metas = {
		title: 'Royal Group - Identity',
		image: '/images/logo-navbar.png',
	};
	return (
		<>
			<main className={`${urbanist.variable} font-sans`}>
				<Meta data={metas} />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Footer />
			</main>
		</>
	);
}
