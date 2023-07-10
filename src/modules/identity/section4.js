import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='overflow-hidden wrapper py-[60px]'>
				<div className='flex flex-col md:flex-row lg:flex-row relative z-50'>
					<div className=' flex  pr-0 lg:pr-[40px]'>
						<div
							// data-aos='zoom-in'
							// data-aos-offset='200'
							// data-aos-delay='50'
							// data-aos-duration='1000'
							// data-aos-easing='ease-in-out'
							// data-aos-mirror='true'
							// data-aos-once='true'
							// data-aos-anchor-placement='top-center'
							className='relative h-full w-full '
							style={{ zIndex: 1 }}>
							<img
								src={'/images/detail-product/identity-company3.png'}
								alt='identity-company3'
								fill
								priority={true}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className=' flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<div className='relative h-full w-full'>
								<img src={'/images/detail-product/identity-logo3.png'} alt='identity-logo3' fill priority={true} />
							</div>
							<p className='text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								INTERBIO
							</p>
							<p className='text-[14px] text-white font-[200] mb-[26px] leading-[160%]'>
								Identification, authentication, authorization interBIO is the leading identity management biometric
								software solutions company with state of the art technology, robust platform and its core team in
								Indonesia and India, working together with partners from US, Europe and ASEAN. Our platforms are based
								on core technologies like face, finger and iris biometrics listed in top tier in NIST benchmark.
							</p>
							<a href='#' className='text-white font-bold'>
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
