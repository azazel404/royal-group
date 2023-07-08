import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='overflow-hidden wrapper py-[60px]'>
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
						<Image src={'/images/detail-product/defense-company3.png'} alt='defense-company3' fill priority={true} />
					</div>
					<div className='pl-0 lg:pl-10 flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<div className='relative w-[200px] h-[72px] md:w-[200px] md:h-[72px]'>
								<Image src={'/images/detail-product/defense-logo3.png'} alt='defense-logo3' fill priority={true} />
							</div>
							<p className='text-[32px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								ROYAL ANRAM
							</p>
							<p className='text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								PT Royal Anram Industries is a company associated with the Indonesian Ministry of Defense in building
								the small caliber ammunition factory by bringing foreign investors to invest in the defense industry of
								Indonesia
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
