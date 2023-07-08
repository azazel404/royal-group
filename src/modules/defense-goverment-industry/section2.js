import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='absolute top-[-20px] lg:top-[-20px] left-[0] lg:left-[0]'>
				<div className='relative w-[400px] h-[400px] md:w-[460px] md:h-[460px]'>
					<Image
						src={'/images/detail-product/Isolation_mode-top.png'}
						alt='isolation_mode-detail-top-product'
						fill
						priority={true}
					/>
				</div>
			</div>
			<div className='overflow-hidden wrapper py-[60px]'>
				<p className='font-[400px] text-[48px] text-white mb-[42px]'>Company</p>
				<div className='mx-auto grid max-w-2xl grid-cols-1  gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div
						// data-aos='zoom-in'
						// data-aos-offset='200'
						// data-aos-delay='50'
						// data-aos-duration='1000'
						// data-aos-easing='ease-in-out'
						// data-aos-mirror='true'
						// data-aos-once='true'
						// data-aos-anchor-placement='top-center'
						className='relative w-[100%] h-[320px] lg:w-[100%] lg:h-[520px]'
						style={{ zIndex: 1 }}>
						<Image src={'/images/detail-product/digital-company.png'} alt='digital-company' fill priority={true} />
					</div>
					<div className='pl-0 lg:pl-10 flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<div className='relative w-[120px] h-[120px] md:w-[120px] md:h-[120px]'>
								<Image src={'/images/section4/enuba-section4.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[32px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								EMPAT NUSA BANGSA
							</p>
							<p className='text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								PT Empat Nusa Bangsa also known as ENUBA is a company engages in information technology that offer
								comprehensive solutions for all business sectors. Our portfolio also includes state-of-the-art solutions
								for start-ups, enterprises & government agencies or institutions.
							</p>
							<a href='#' className='text-white font-bold'>
								Visit Website
							</a>
							<div class='w-[20px] border-t border-white mt-2'></div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='absolute top-[562px] lg:top-[562px] right-[0] lg:right-[0]'>
				<div className='relative w-[400px] h-[400px] md:w-[650px] md:h-[200px]'>
					<Image
						src={'/images/detail-product/Isolation_mode-bot.png'}
						alt='isolation_mode-detail-bot-product'
						fill
						priority={true}
					/>
				</div>
			</div> */}
		</div>
	);
}
