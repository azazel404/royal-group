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
				<div className='healthcare-page-cover'></div>
				<div className='home-gradient-cover'></div>

				<div className='relative wrapper height-container-hero  py-18 lg:py-18  flex flex-col justify-center items-start md:flex-row md:justify-center md:items-center z-50'>
					<div className='flex flex-col justify-center items-center mb-4 lg:mb-[0] leading-relaxed lg:leading-normal'>
						<div className='flex text-[30px] md:text-[30px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>
							<span className='text-white'>Health Services</span>
						</div>
						<div className='flex text-[12px] text-center md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px]'>
							<span className='text-white'>
								Healthcare plays a pivotal role in promoting and preserving the well-being of individuals and
								societies.Our services comes with a wide range of services aimed at preventing, diagnosing, and managing
								diseases, as well as promoting overall health.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
