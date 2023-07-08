import { useEffect } from 'react';
import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return <Component {...pageProps} />;
}
