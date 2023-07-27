import Image from 'next/image';

export default function Section5() {
	return (
		<div className='bg-primary'>
			<div className='wrapper py-24'>
				{/* <p className='text-[24px] z-10 md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-[200] tracking-tight text-white'>
					Royal Group
				</p> */}
				<p className='text-[24px] z-10 md:text-[24px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] mt-2 font-bold tracking-tight text-gradient'>
					Overview
				</p>
				{/* <div className=' mt-10 grid items-center gap-12  grid-cols-1 md:grid-cols-3'>
					<div style={{ width: '100%', backgroundColor: '#464646' }} className='  rounded-[24px] p-[28px] h-[600px]'>
						
					</div>
					<div style={{ width: '100%', backgroundColor: '#464646' }} className='  rounded-[24px] p-[28px] h-[600px]'>
					</div>
					<div style={{ width: '100%', backgroundColor: '#464646' }} className='  rounded-[24px] p-[28px] h-[600px]'>
					</div>
				</div> */}
				<p className='mt-14 text-[14px] md:text-[14px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] text-white leading-[160%]'>
					Royal Group is a dynamic and innovative group of companies focused on delivering cutting-edge solutions in
					various industries, with a mission to provide excellence in technology and engineering. We strive to make a
					positive impact on society by pushing the boundaries of what is possible.
				</p>
			</div>
		</div>
	);
}
