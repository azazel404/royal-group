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
			<div className='overflow-hidden wrapper pt-[60px]'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:pr-8 flex justify-center items-center '>
						<div className='lg:max-w-3xl'>
							<p className='font-[400px] text-[24px] text-white'>About Us</p>
							<p className='text-[24px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-white'>
								We Are From The Collaboration
							</p>
							<p className='text-[24px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[42px] mt-2 font-bold tracking-tight text-gradient mb-[24px]'>
								Business Partners
							</p>
							<p className='text-[18px] text-white font-[200] mb-[26px] leading-[160%]'>
								Royal Group was established in Jakarta on September 2013 The company's creation resulted from a synergy
								of long-time business partners who decided to team up to offer their customers a more comprehensive
								solution to their needs
							</p>
							<p className='text-[18px] text-white font-[200] leading-[160%]'>
								Royal Group owns and operates subsidiaries that cover several segments, which include Radika Karya
								Utama, Royal Anram Industries, Fazza Royal Yantasir Simulasi, Interbio, Royal Garuda Meta Semesta,
								Cakrawala Data Integrasi, and Asa Ren.
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-end items-center relative'>
						<div
							// data-aos='zoom-in'
							// data-aos-offset='200'
							// data-aos-delay='50'
							// data-aos-duration='1000'
							// data-aos-easing='ease-in-out'
							// data-aos-mirror='true'
							// data-aos-once='true'
							// data-aos-anchor-placement='top-center'
							className='relative w-[350px] h-[350px] md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px] xl:w-[660px] xl:h-[660px]'
							style={{ zIndex: 1 }}>
							<Image src={'/images/section2/female-vr.png'} alt='female-vr' fill priority={true} />
						</div>
					</div>
				</div>
			</div>
			<div className='absolute top-[640px] lg:top-[100px] 2xl:top-[200px] right-[4px] lg:right-[0px]'>
				<div className='relative w-[380px] h-[380px] md:w-[750px] md:h-[614px]'>
					<Image
						src={'/images/section2/isolation_mode-section2.png'}
						alt='isolation_mode-section2'
						fill
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
}
