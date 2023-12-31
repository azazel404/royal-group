import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='overflow-hidden wrapper py-[60px]'>
				<div className='flex flex-col md:flex-row lg:flex-row relative z-50'>
					<div className='flex justify-start items-start '>
						<div className='lg:max-w-3xl pr-0 lg:pr-10'>
							<div className='relative h-full w-full'>
								<img src={'/images/detail-product/identity-logo2.png'} alt='identity-logo2' fill priority={true} />
							</div>
							<p className='text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								TOTM
							</p>
							<p className='text-[14px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								TOTM Technologies provides end-to-end identity management and biometrics products, powering Digital
								identity and Digital onboarding solutions. That includes NIST-rated core biometrics matching software
								that is proven in ultra large scale identity deployments. Our in-house expertise comprises innovators,
								disruptors and technologists providing best-of-breed, integrated and highly-scalable solutions that span
								across domains and use-cases such as national ID, automated border control, finance & fintech,
								healthcare and critical infrastructure access control
							</p>
							<a href='https://totmtechnologies.com/' className='text-white font-bold'>
								Visit Website
							</a>
							<div class='w-[20px] border-t border-white mt-2'></div>
						</div>
					</div>
					<div className=' flex mt-8 lg:mt-0'>
						<div
							// data-aos='zoom-in'
							// data-aos-offset='200'
							// data-aos-delay='50'
							// data-aos-duration='1000'
							// data-aos-easing='ease-in-out'
							// data-aos-mirror='true'
							// data-aos-once='true'
							// data-aos-anchor-placement='top-center'
							className=' flex relative h-full w-full'
							style={{ zIndex: 1 }}>
							<img
								src={'/images/detail-product/identity-company2.png'}
								alt='identity-company2'
								fill
								priority={true}
								style={{ objectFit: 'cover' }}
							/>
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
