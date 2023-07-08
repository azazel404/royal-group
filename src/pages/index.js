import Section1 from '@/modules/home/section1';
import Section2 from '@/modules/home/section2';
import Section3 from '@/modules/home/section3';
import Section4 from '@/modules/home/section4';
import Section5 from '@/modules/home/section5';
import Footer from '@/components/layouts/footer';
import Meta from '@/components/metaseo';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function Home() {
	const metas = {
		title: 'Royal Group',
		// description:
		// 	'Bringing Gold Mining to the Digital Age. A New Era of Sustainability-Pistol Lake Mine, Our First Acquisition',
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
				<Section5 />
				{/* <Footer /> */}
			</main>
		</>
	);
}
