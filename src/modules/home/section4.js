import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

export default function Section4() {
	const router = useRouter();
	const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

	const desktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});

	useEffect(() => {
		if (typeof window !== undefined) {
			setIsDesktopOrLaptop(true);
		}
	}, []);
	const checkIsDesktopOrLaptop = isDesktopOrLaptop ? desktopOrLaptop : true;
	const features = [
		{
			name: 'Defense & Security',
			description:
				'In an ever-changing global landscape, defense and security play vital roles in safeguarding nations and ensuring the well being of their citizens. We act as a one stop solution regarding defense and security providing what it is that matters in this field',
			image: '/images/section4/defence-industry.png',
			logo: {
				path: '/images/section4/logo1.png',
				width: '100px',
				height: '77px',
			},
			link: '/defense-goverment-industry',
		},
		{
			name: 'BlockChain',
			description:
				'With the purpose of unlocking the full potential of blockchain technology, we plunged into the industry by delivering its immense potential and promise for revolutionizing various business sectors',
			image: '/images/section4/blockchain.png',
			logo: {
				path: '/images/detail-product/blockchain-logo.png',
				width: '100px',
				height: '77px',
			},
			link: '/blockchain',
		},
		{
			name: 'Identity',
			description:
				'Advancements in identity technology such as biometrics to decentralized identity platforms, hungers the needs for robust and secure identity systems. We strive to revolutionize the way individuals established and manage their digital identities',
			image: '/images/section4/identity.png',
			logo: {
				path: '/images/section4/logo2.png',
				width: '100px',
				height: '77px',
			},
			link: '/identity',
		},
		{
			name: 'Healthcare',
			description:
				'Healthcare plays a pivotal role in promoting and preserving the well-being of individuals and societies.Our services comes with a wide range of services aimed at preventing, diagnosing, and managing diseases, as well as promoting overall health.',
			image: '/images/section4/healthcare.png',
			logo: {
				path: '/images/detail-product/healthcare-logo.png',
				width: '100px',
				height: '77px',
			},
			link: '/healthcare',
		},
		{
			name: 'Digital Transformations',
			description:
				'We take part in digital transformation industry because it has become an integral part of our society, driving innovation, enhancing efficiency, and transforming the way we live and work.It offers immense potential for business to thrive, enables individuals to access new opportunities, and empowers governments to deliver public services with more effect',
			image: '/images/section4/digital-transformation.png',
			logo: {
				path: '/images/section4/logo4.png',
				width: '100px',
				height: '77px',
			},
			link: '/digital-transformation',
		},

		{
			name: 'Lifestyle',
			description:
				'We hope to cater to individuals desire for personal expression, well being, and experience that enhance their quality of life as the lifestyle industry emerged as a dynamic and influential sector in our daily lives',
			image: '/images/section4/lifestyle.png',
			logo: {
				path: '/images/section4/logo3.png',
				width: '100px',
				height: '77px',
			},
			link: '/lifestyle',
		},
	];

	return (
		<div className='bg-primary relative' id='companies'>
			{checkIsDesktopOrLaptop && (
				<div className='absolute top-[110px] right-[0px]'>
					<div className='relative w-full h-full'>
						<img src={'/images/section4/clippath.svg'} alt='isolation-left_mode-section4' fill priority={true} />
					</div>
				</div>
			)}
			<div className='overflow-hidden wrapper'>
				<div className='pt-[120px] relative '>
					<p className='text-[24px] z-10 md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-[200] tracking-tight text-white'>
						Royal Group
					</p>
					<p className='text-[24px] z-10 md:text-[24px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] mt-2 font-bold tracking-tight text-gradient'>
						Our Companies
					</p>
					<div className='mt-10 flex flex-col lg:flex-row flex-wrap'>
						{features.map((item, index) => {
							return (
								<div
									key={index}
									style={{ cursor: item.link === '/#lifestyle' ? 'default' : 'pointer' }}
									onClick={() => router.push(item.link)}
									className='p-[30px] flex flex-col justify-end  w-[100%] h-[350px] lg:w-[330px] xl:w-[430px] 2xl:w-[530px]  lg:h-[310px] xl:h-[410px] 2xl:h-[410px] relative  lg:mr-[32px] mb-[32px] '>
									<div className='absolute w-[100%] h-[100%] lg:w-[330px] xl:w-[430px] 2xl:w-[530px]  lg:h-[310px] xl:h-[410px] 2xl:h-[410px] top-0 left-0 right-0 bottom-0'>
										<div className='relative' style={{ width: '100%', height: '100%', zIndex: 1 }}>
											<img src={item.image} alt={`section4-${item.name}`} style={{ width: '100%', height: '100%' }} />
										</div>
									</div>
									<div className='section4-gradient-cover w-[100%] h-[100%] '></div>
									<div className='relative' style={{ zIndex: 1000 }}>
										<div className='relative w-[100%] h-[auto] md:w-[100%] md:h-[auto]'>
											<img src={item.logo.path} alt='isolation_mode-section2' fill priority={true} />
										</div>
										<p className='text-[20px] md:text-[24px] lg:text-[20px] xl:text-[36px] 2xl:text-[36px] mt-2 mb-4 font-bold tracking-tight text-white'>
											{item.name}
										</p>
										<p className='line-clamp-3 text-[12px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-white'>
											{item.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* {checkIsDesktopOrLaptop && (
				<div className='absolute bottom-[0px] right-[0px]'>
					<div className='relative  h-full w-full'>
						<img
							src={'/images/section4/isolate-mode-right.png'}
							alt='isolation-right_mode-section4'
							fill
							priority={true}
						/>
					</div>
				</div>
			)} */}
		</div>
	);
}
