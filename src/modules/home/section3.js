import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Section2() {
	const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
	const desktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	useEffect(() => {
		if (typeof window !== undefined) {
			setIsDesktopOrLaptop(true);
		}
	}, []);
	const checkIsDesktopOrLaptop = isDesktopOrLaptop ? desktopOrLaptop : true;
	return (
		<div className='bg-white relative'>
			<div className='overflow-hidden wrapper py-[80px]'>
				<div className='flex flex-col md:flex-row 2xl:justify-around  relative' style={{ zIndex: 1 }}>
					{/* <div className='shrink-0 pr-[0px] md:pr-[126px] lg:pr-[126px] mb-[20px] md:mb-[0px] lg:mb-[0px]'>
						<p className='font-bold text-[24px] 2xl:text-[32px] text-center md:text-start lg:text-start'>Our Ideas</p>
					</div> */}
					<div className='grid items-center gap-12  grid-cols-1 md:grid-cols-2'>
						<div
							className='p-[30px] rounded-[24px]'
							style={{ backgroundColor: '#F4F4F4', maxWidth: '687px', height: '382px' }}>
							<div className='relative w-[74px] h-[74px] md:w-[74px] md:h-[74px]'>
								<Image src={'/images/section3/left-star.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[24px] md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] mt-2 mb-4 font-bold tracking-tight text-black'>
								Our Vision
							</p>
							<p className='text-[16px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] leading-[39px] text-black'>
								To be a leading company that builds robust and outstanding solutions across the worldwide nation, by
								empowering lives and simplify futures.
							</p>
						</div>
						<div
							className='p-[30px] rounded-[24px]'
							style={{ backgroundColor: '#F4F4F4', maxWidth: '687px', height: '382px' }}>
							<div className='relative w-[74px] h-[74px] md:w-[74px] md:h-[74px]'>
								<Image src={'/images/section3/right-star.png'} alt='isolation_mode-section2' fill priority={true} />
							</div>
							<p className='text-[24px] md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] mt-2 mb-4 font-bold tracking-tight text-black'>
								Our Mission
							</p>
							<p className='text-[16px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] leading-[39px]  text-black'>
								We are committed to ensure our subsidiaries can provide solutions that meet customer’s requirements and
								create a sustainable business environment.
							</p>
						</div>
					</div>
				</div>
			</div>
			{checkIsDesktopOrLaptop && (
				<div className='absolute top-[106px] right-[24px]'>
					<div className='relative h-full w-full'>
						<img
							src={'/images/section3/isolate-mode-section3.png'}
							alt='isolation_mode-section2'
							fill
							priority={true}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
