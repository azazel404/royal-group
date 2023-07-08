import Section1 from '@/modules/blockchain/section1';
import Section2 from '@/modules/blockchain/section2';
// import Footer from '@/components/layouts/footer';
import Meta from '@/components/metaseo';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export default function Blockchain() {
	const metas = {
		title: 'Royal Group - Blockchain',
		image: '/images/logo-navbar.png',
	};
	return (
		<>
			<main className={`${urbanist.variable} font-sans`}>
				<Meta data={metas} />
				<Section1 />
				<Section2 />
				{/* <Footer /> */}
			</main>
		</>
	);
}
