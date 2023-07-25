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
				<div className='home-first-page-cover'></div>
				<div className='home-gradient-cover'></div>

				<div className='relative wrapper height-container-hero  py-18 lg:py-18  flex flex-col justify-center items-start md:flex-row md:justify-center md:items-center z-50'>
					<div className='flex lg:grow-[1] flex-col min-h-0 lg:min-h-[30%]'>
						<div className='text-[20px] md:text-[20px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px]'>
							<span className='text-white'>Introduce</span>
						</div>
					</div>
					<div className='flex flex-col justify-center mb-4 lg:mb-[0] leading-relaxed lg:leading-normal'>
						<div className='flex text-[30px] md:text-[30px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>
							<span className='text-white'>Empowering Progress</span>
						</div>
						<div className='flex text-[30px] md:text-[30px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>
							<span className='text-white'>Through Comprehensive</span>
						</div>
						<div className='flex text-[30px] md:text-[30px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>
							<span className='text-gradient'>Expertise</span>
						</div>
					</div>
					{/* <div className='flex lg:grow-[1] flex-row justify-center mt-4 lg:mt-20'>
						<div className='flex flex-col items-center justify-center text-white bg-white  w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] shadow-sm hover:bg-white rounded-[50%]'>
							<div
								className='w-[30px] h-[30px] lg:w-[70px] lg:h-[70px] flex flex-col justify-center items-center rounded-[50%] mb-4'
								style={{ backgroundColor: '#F2F2F2' }}>
								<div className='relative w-[14px] h-[14px] lg:w-[20px] lg:h-[20px]'>
									<Image
										src='/images/section1/start-video-logo.png'
										style={{ objectFit: 'contain' }}
										fill
										alt='start-video-logo'
									/>
								</div>
							</div>
							<span className='text-[12px] md:text-[24px] lg:text-[24px] font-bold text-black'>About Us</span>
							<span className='text-[10px] md:text-[12px] lg:text-[18px]  text-black'>15mins</span>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}
