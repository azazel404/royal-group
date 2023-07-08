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
			name: 'Defense & Government Industry',
			description: 'Massa elementum vestibulum cursus tortor pretium velit.',
			image: '/images/section4/defence-industry.png',
			link: '/defense-goverment-industry',
		},
		{
			name: 'Healthcare',
			description:
				'Rhoncus eu purus et dictum augue ut augue quis sed. Massa elementum vestibulum cursus tortor pretium velit.',
			image: '/images/section4/healthcare.png',
			link: '/healthcare',
		},
		{
			name: 'Digital Transformations',
			description:
				'Rhoncus eu purus et dictum augue ut augue quis sed. Massa elementum vestibulum cursus tortor pretium velit.',
			image: '/images/section4/digital-transformation.png',
			link: '/digital-transformation',
		},
		{
			name: 'BlockChain',
			description:
				'Rhoncus eu purus et dictum augue ut augue quis sed. Massa elementum vestibulum cursus tortor pretium velit.',
			image: '/images/section4/blockchain.png',
			link: '/blockchain',
		},
		{
			name: 'Identity',
			description:
				'Rhoncus eu purus et dictum augue ut augue quis sed. Massa elementum vestibulum cursus tortor pretium velit.',
			image: '/images/section4/identity.png',
			link: '/identity',
		},
	];

	return (
		<div className='bg-primary relative'>
			{checkIsDesktopOrLaptop && (
				<div className='absolute top-[0px] left-[0px]'>
					<div className='relative w-[400px] h-[400px] md:w-[610px] md:h-[600px]'>
						<Image
							src={'/images/section4/isolate-mode-left.png'}
							alt='isolation-left_mode-section4'
							fill
							priority={true}
						/>
					</div>
				</div>
			)}
			<div id='nft' className='overflow-hidden wrapper'>
				<div className='pt-[120px] relative '>
					<p className='text-[24px] z-10 md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-[200] tracking-tight text-white'>
						Royal Group
					</p>
					<p className='text-[24px] z-10 md:text-[24px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] mt-2 font-bold tracking-tight text-gradient'>
						We Are Royal Group
					</p>
					<div className='mt-10 flex flex-col lg:flex-row lg:flex-wrap'>
						{features.map((item, index) => {
							return (
								<div
									key={index}
									style={{ cursor: 'pointer' }}
									onClick={() => router.push(item.link)}
									className='p-[30px] flex flex-col justify-end  w-[100%] lg:w-[530px] h-[410px] relative  lg:mr-[32px] mb-[32px] '>
									<div className='absolute w-[100%] h-[100%] lg:w-[530px] lg:h-[410px] top-0 left-0 right-0 bottom-0'>
										<div className='relative' style={{ width: '100%', height: '100%', zIndex: 1 }}>
											<Image
												src={item.image}
												alt={`section4-${item.name}`}
												// style={{ objectFit: 'contain ' }}
												fill
												priority={true}
											/>
										</div>
									</div>
									<div className='section4-gradient-cover w-[100%] h-[100%] '></div>
									<div className='relative' style={{ zIndex: 1000 }}>
										<div className='relative w-[100px] h-[100px] md:w-[100px] md:h-[100px]'>
											<Image
												src={'/images/section4/enuba-section4.png'}
												alt='isolation_mode-section2'
												fill
												priority={true}
											/>
										</div>
										<p className='text-[20px] md:text-[24px] lg:text-[36px] xl:text-[36px] 2xl:text-[36px] mt-2 mb-4 font-bold tracking-tight text-white'>
											{item.name}
										</p>
										<p className='text-[16px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] text-white'>
											{item.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{checkIsDesktopOrLaptop && (
				<div className='absolute bottom-[0px] right-[0px]'>
					<div className='relative w-[400px] h-[400px] md:w-[610px] md:h-[600px]'>
						<Image
							src={'/images/section4/isolate-mode-right.png'}
							alt='isolation-right_mode-section4'
							fill
							priority={true}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
