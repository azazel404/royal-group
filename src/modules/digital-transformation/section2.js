import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='absolute top-[-20px] lg:top-[-20px] left-[0] lg:left-[0]'>
				<div className='relative h-full w-full'>
					<img
						src={'/images/detail-product/Isolation_mode-top.png'}
						alt='isolation_mode-detail-top-product'
						fill
						priority={true}
					/>
				</div>
			</div>
			<div className='absolute top-[-20px] lg:top-[-20px] left-[0] lg:left-[0]'>
				<div className='relative h-full w-full'>
					<img
						src={'/images/detail-product/Isolation_mode-top.png'}
						alt='isolation_mode-detail-top-product'
						fill
						priority={true}
					/>
				</div>
			</div>
			<div className='overflow-hidden wrapper py-[60px]'>
				<p className='font-[400px] text-[28px] lg:text-[48px] text-white mb-[42px]'>Company</p>
				<div className='flex flex-col md:flex-row lg:flex-row relative z-50'>
					<div className='flex pr-0 lg:pr-[40px]'>
						<div
							// data-aos='zoom-in'
							// data-aos-offset='200'
							// data-aos-delay='50'
							// data-aos-duration='1000'
							// data-aos-easing='ease-in-out'
							// data-aos-mirror='true'
							// data-aos-once='true'
							// data-aos-anchor-placement='top-center'
							className='relative h-full w-full'
							style={{ zIndex: 1 }}>
							<img
								src={'/images/detail-product/digital-company.png'}
								alt='digital-company'
								fill
								priority={true}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className='flex justify-center items-center mt-8 lg:mt-0 '>
						<div className='lg:max-w-3xl'>
							<div className='relative h-full w-full'>
								<img src={'/images/section4/enuba-section4.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[32px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								EMPAT NUSA BANGSA
							</p>
							<p className='text-[14px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								PT Empat Nusa Bangsa also known as ENUBA is a company engages in information technology that offer
								comprehensive solutions for all business sectors. Our portfolio also includes state-of-the-art solutions
								for start-ups, enterprises & government agencies or institutions.
							</p>
							<a href='https://www.empatnusabangsa.com/' className='text-white font-bold'>
								Visit Website
							</a>
							<div class='w-[20px] border-t border-white mt-2'></div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute top-[590px] lg:top-[562px] right-[20px] lg:right-[20px]'>
				<div className='relative h-full w-full'>
					<img src={'/images/detail-product/Isolation_mode-bot.png'} alt='isolation_mode-detail-bot-product' />
				</div>
			</div>
		</div>
	);
}
