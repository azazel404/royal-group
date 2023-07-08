import Image from 'next/image';

export default function Section2() {
	return (
		<div className='bg-white relative'>
			<div className='overflow-hidden wrapper py-[80px]'>
				<div className='flex flex-col md:flex-row justify-between relative' style={{ zIndex: 1 }}>
					<div className='shrink-0 pr-[0px] md:pr-[100px] lg:pr-[100px] mb-[20px] md:mb-[0px] lg:mb-[0px]'>
						<p className='font-bold text-[24px] text-center md:text-start lg:text-start'>Our Ideas</p>
					</div>
					<div className='grid items-center gap-6  grid-cols-1 md:grid-cols-2'>
						<div className='p-[30px] rounded-[24px]' style={{ backgroundColor: '#F4F4F4', width: '100%' }}>
							<div className='relative w-[74px] h-[74px] md:w-[74px] md:h-[74px]'>
								<Image src={'/images/section3/left-star.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[24px] md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] mt-2 mb-4 font-bold tracking-tight text-black'>
								Our Vision
							</p>
							<p className='text-[16px] text-black'>
								To be leader, build robust and outstandingsolutions, and achieve beyond limits in thetechnology and
								manufacturing industries across the nation.
							</p>
						</div>
						<div className='p-[30px] rounded-[24px]' style={{ backgroundColor: '#F4F4F4', width: '100%' }}>
							<div className='relative w-[74px] h-[74px] md:w-[74px] md:h-[74px]'>
								<Image src={'/images/section3/right-star.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[24px] md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] mt-2 mb-4 font-bold tracking-tight text-black'>
								Our Mission
							</p>
							<p className='text-[16px] text-black'>
								We are committed to ensuring that our subsidiaries can provide solutions that meet customers’
								requirements and create a sustainable business environment for our subsidiaries.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute top-[134px] right-[24px]'>
				<div className='relative w-[400px] h-[400px] md:w-[300px] md:h-[300px]'>
					<Image
						src={'/images/section3/isolate-mode-section3.png'}
						alt='isolation_mode-section2'
						fill
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
}
