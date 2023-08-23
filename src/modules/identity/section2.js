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
				<p className='font-[400px] text-[28px] lg:text-[48px] text-white mb-[42px]'>Company</p>
				<div className='flex flex-col md:flex-row lg:flex-row relative z-50'>
					<div className='pr-0 lg:pr-[40px] flex'>
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
								src={'/images/detail-product/identity-company1.png'}
								alt='identity-company1'
								fill
								priority={true}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div className=' flex justify-center items-center mt-8 lg:mt-0 '>
						<div className='lg:max-w-3xl'>
							<div className='relative h-full w-full'>
								<img src={'/images/detail-product/identity-logo1.png'} alt='identity-logo1' fill priority={true} />
							</div>
							<p className='text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								TRUSTLINK
							</p>
							<p className='text-[14px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								Trustlink strives to empower your organization to accelerate its business growth by simplifying your
								customer onboarding process. TrustLink offers biometrics based identity verification solutions driven by
								state of the art AI technology that enables our clients to process customer onboarding in a more
								seamless, less time consuming and more cost efficient way.
							</p>
							<a href='https://www.withtrustlink.com/' className='text-white font-bold'>
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
