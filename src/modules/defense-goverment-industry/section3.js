import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-primary relative'>
			<div className='overflow-hidden wrapper py-[60px]'>
				<div className='flex flex-col md:flex-row lg:flex-row relative z-50'>
					<div className='flex justify-start items-start pr-0 lg:pr-[40px]'>
						<div className='lg:max-w-3xl'>
							<div className='relative h-full w-full'>
								<img src={'/images/detail-product/defense-logo2.png'} alt='defense-logo2' fill priority={true} />
							</div>
							<p className='text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								FRYS
							</p>
							<p className='text-[14px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] lg:text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								PT. Fazza Royal Yantasir Simulasi is a dynamic, innovative and creative company based in Jakarta that
								established in 2019 from a synergy of two business partners that have a lot of experience in simulation
								and technology. With the concept of Total Solution for simulations, we specialize in Advance Innovative
								Simulation Technologies with advance simulation development platform.
							</p>
							<a href='https://frys.co.id/' className='text-white font-bold'>
								Visit Website
							</a>
							<div class='w-[20px] border-t border-white mt-2'></div>
						</div>
					</div>
					<div className='flex mt-8 lg:mt-0'>
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
								src={'/images/detail-product/defense-company2.png'}
								alt='defense-company2'
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
