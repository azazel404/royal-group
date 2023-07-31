import Section1 from '@/modules/lifestyle/section1';
import Section2 from '@/modules/lifestyle/section2';
import Section3 from '@/modules/lifestyle/section3';
import Footer from '@/components/layouts/footer';
import Meta from '@/components/metaseo';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function Lifestyle() {
	const metas = {
		title: 'Royal Group - Lifestyle',
		image: '/images/logo-navbar.png',
	};
	return (
		<>
			<main className={`${urbanist.variable} font-sans`}>
				<Meta data={metas} />
				<Section1 />
				<Section2 />
				<Section3 />
				<Footer />
			</main>
		</>
	);
}
