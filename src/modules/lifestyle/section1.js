import { useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import Image from 'next/image';

export default function Section1() {
	return (
		<>
			<Navbar />
			<div className='relative' id='overview'>
				{/* <div style={{ position: 'relative', height: '640px', width: 'auto', zIndex: 1 }}>
					<Image
						src='/images/section1/background-hero.png'
						fill
						alt='hero-background'
						style={{ objectFit: 'cover ' }}
					/>
				</div> */}
				<div className='lifestyle-page-cover'></div>
				<div className='home-gradient-cover'></div>

				<div className='relative wrapper height-container-hero  py-18 lg:py-18  flex flex-col justify-center items-start md:flex-row md:justify-center md:items-center z-50'>
					<div className='flex flex-col justify-center items-center mb-4 lg:mb-[0] leading-relaxed lg:leading-normal'>
						<div className='flex text-[30px] md:text-[30px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>
							<span className='text-white'>Lifestyle</span>
						</div>
						<div className='flex text-[12px] text-center md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px]'>
							<span className='text-white'>
								As society evolves and personal aspirations shift, lifestyle becomes a dynamic canvas upon which
								individuals paint their unique stories. We hope to cater to the diverse needs and preferences of
								individuals seeking assistance, convenience, and enhancement in various aspects of their lives
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
