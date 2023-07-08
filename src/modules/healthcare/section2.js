import Image from 'next/image';
export default function Section2() {
	return (
		<div className='bg-white relative'>
			<div className='overflow-hidden wrapper py-[60px]'>
				<p className='font-[400px] text-[48px] text-black mb-[42px]'>Company</p>
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
						<Image src={'/images/detail-product/healthcare-company.png'} alt='digital-company' fill priority={true} />
					</div>
					<div className='pl-0 lg:pl-10 flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<div className='relative w-[148px] h-[72px] md:w-[148px] md:h-[72px]'>
								<Image
									src={'/images/detail-product/healthcare-logo.png'}
									alt='isolation_mode-section2'
									fill
									priority={true}
								/>
							</div>
							<p className='text-[32px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-black'>
								Asaren
							</p>
							<p className='text-[24px] text-black font-[200] mb-[26px] leading-[160%]'>
								In Asaren, we use data science and machine learning the ground truth about yourself. We are the first
								lifestyle based-genetic platform that focus on holistic approach on medical genetics and hope to give
								everyone the opportunity to make the best choice in life
							</p>
							<a href='#' className='text-black font-bold'>
								Visit Website
							</a>
							<div class='w-[20px] border-t border-black mt-2'></div>
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
