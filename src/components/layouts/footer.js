import Image from 'next/image';
const Footer = () => {
	return (
		<>
			<div className='w-full min-h-[860px] md:min-h-[374px] lg:min-h-[374px] bg-primary'>
				<footer className='w-full text-white'>
					<div className='flex flex-col py-12 wrapper items-start md:flex-row'>
						<div className='flex-shrink-0  md:text-left w-full lg:w-[390px]'>
							<div className='relative w-[350px] h-[46px] md:w-[390px] md:h-[47px]'>
								<Image
									src={'/images/logo-footer.svg'}
									alt={'logo-footer'}
									fill
									style={{ objectFit: 'contain' }}
									priority={true}
								/>
							</div>
							<p className='mt-[18px] text-[20px] leading-[32px] text-gray'>
								Leading the drive towards a net-zero future through transformative climate tech solutions.
							</p>
						</div>
						<div
							className='flex flex-col items-start md:flex-row md:justify-between ml-0 md:ml-[70px] mt-10 md:mt-0'
							style={{ flexGrow: 1 }}>
							<div className='w-full'>
								<h2 className='mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font'>Company</h2>
								<nav className='mb-10 list-none'>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>UNDP</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Gold & Climate Change</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Carbon Maps</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Acid Mine Drainage</a>
									</li>
								</nav>
							</div>
							<div className='w-full '>
								<h2 className='mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font'>Help</h2>
								<nav className='mb-10 list-none'>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Privacy Policy</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Terms of Use</a>
									</li>
								</nav>
							</div>
							<div className='w-full '>
								<h2 className='mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font'>Resources</h2>
								<nav className='mb-10 list-none'>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Stay in touch</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>ENTER@NATURESVAULT.IO</a>
									</li>
								</nav>
							</div>
						</div>
					</div>
					<div className='wrapper py-4 flex justify-between'>
						<p className='text-sm text-gray capitalize'>Copyright © 2020 All rights reserved </p>
						{/* <p className='text-sm text-gray capitalize'>Indonesia</p> */}
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
