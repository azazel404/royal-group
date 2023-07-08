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
						<Image src={'/images/detail-product/defense-company1.png'} alt='defense-company1' fill priority={true} />
					</div>
					<div className='pl-0 lg:pl-10 flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<div className='relative w-[350px] h-[72px] md:w-[350px] md:h-[72px]'>
								<Image src={'/images/detail-product/defense-logo1.png'} alt='defense-logo1' fill priority={true} />
							</div>
							<p className='text-[32px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								RADIKA KARYA UTAMA
							</p>
							<p className='text-[24px] text-white font-[200] mb-[26px] leading-[160%]'>
								Since inception in 1998, PT Radika Karya Utama has grown into a well-recognized provider of
								infrastructure, advanced networking, unified communications, security, servers and hardware sales and
								support, which aid our customers achieve their organizational target
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
