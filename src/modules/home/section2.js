import Image from 'next/image';

export default function Section2() {
	return (
		<div className='bg-primary relative'>
			{/* <div className='absolute top-[-20px] lg:top-[-20px] left-[0] lg:left-[0]'>
				<div className='relative h-full w-full'>
					<img
						src={'/images/detail-product/Isolation_mode-top.png'}
						alt='isolation_mode-detail-top-product'
						fill
						priority={true}
					/>
				</div>
			</div> */}
			<div className='overflow-hidden  pt-[90px] min-h-[908px] lg:min-h-[640px]'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:pr-8 flex  items-center wrapper '>
						<div className='lg:max-w-3xl'>
							<p className='font-[400px] text-[24px] text-white'>About Us</p>
							<p className='text-[24px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								Achieving Excellence through Collaboration
							</p>
							{/* <p className='text-[24px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-gradient mb-[24px]'>
								Business Partners
							</p> */}
							<div className='max-w-[600px]'>
								<p className='text-[18px] text-white font-[200] mb-[26px] leading-[160%]'>
									Royal Group was established in Jakarta on September 2013 The company's creation resulted from a
									synergy of long-time business partners who decided to team up to offer their customers a more
									comprehensive solution to their needs.
								</p>
								<p className='text-[18px] text-white font-[200] leading-[160%]'>
									Royal Group owns and operates subsidiaries that cover several industries such as Defense and Security,
									Healthcare, Digital Transformation, Blockchain, Identity, and Lifestyle.
								</p>
							</div>
						</div>
					</div>
					<div className='relative lg:absolute lg:top-[67px] 2xl:top-[66px] right-[4px] lg:right-[0px]'>
						<div
							// data-aos='zoom-in'
							// data-aos-offset='200'
							// data-aos-delay='50'
							// data-aos-duration='1000'
							// data-aos-easing='ease-in-out'
							// data-aos-mirror='true'
							// data-aos-once='true'
							// data-aos-anchor-placement='top-center'
							className='relative w-full h-full lg:h-[700px] lg:w-[700px]'
							style={{ zIndex: 1 }}>
							<img src={'/images/section2/female-vr.svg'} alt='female-vr' fill priority={true} />
						</div>
					</div>
				</div>
			</div>
			{/* <div className='absolute top-[640px] lg:top-[100px] 2xl:top-[200px] right-[4px] lg:right-[0px]'>
				<div className='relative w-[380px] h-[380px] md:w-[750px] md:h-[614px]'>
					<Image
						src={'/images/section2/isolation_mode-section2.png'}
						alt='isolation_mode-section2'
						fill
						priority={true}
					/>
				</div>
			</div> */}
		</div>
	);
}
