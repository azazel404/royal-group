const Footer = () => {
	const d = new Date();
	let year = d.getFullYear();
	return (
		<>
			<div className='w-full h-[300px] md:h-[300px] lg:h-[300px]  relative'>
				<div className='footer-page-cover'></div>
				<footer className='w-full text-white relative z-30'>
					<div className='flex flex-col py-12 wrapper items-start justify-between md:flex-row'>
						<div className='flex-shrink-0  md:text-left w-full lg:w-[390px]'>
							<img className='h-[30px] md:h-[48px] w-auto' src='/images/logo-navbar.png' alt='' />
							<p className='mt-[24px] text-[24px] lg:text-[38px] leading-[32px] text-gray'>© Royal Group {year}</p>
						</div>
						<div className='flex flex-col items-end md:flex-row md:justify-end  mt-10 md:mt-0'>
							<div className='w-full'>
								<h2 className='mb-3  font-bold tracking-widest text-white  text-[16px]  md:text-[40px] lg:text-[40px]'>
									Address
								</h2>
								{/* <p className='text-[12px] md:text-[20px] lg:text-[20px] text-gray'>
									⦁ EIGHTY EIGHT @KASABLANKA OFFICE TOWER, 3rd FLOOR UNIT B, JALAN CASABLANCA RAYA KAV 88.
								</p> */}
								<p className='text-[12px] md:text-[20px] lg:text-[20px] text-gray'>
									EightyEight@Kasablanka,Tower A,28th Floor,Unit G-H.Jl Raya Casablanca Kav.88, Menteng Dalam,South
									Jakarta,12870 Indonesia.
								</p>
								{/* <nav className='mb-10 list-none'>
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
								</nav> */}
							</div>
							{/* <div className='w-full '>
								<h2 className='mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font'>Help</h2>
								<nav className='mb-10 list-none'>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Privacy Policy</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Terms of Use</a>
									</li>
								</nav>
							</div> */}
							{/* <div className='w-full '>
								<h2 className='mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font'>Resources</h2>
								<nav className='mb-10 list-none'>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>Stay in touch</a>
									</li>
									<li className='mt-3'>
										<a className='text-gray cursor-pointer hover:text-gray-900'>ENTER@NATURESVAULT.IO</a>
									</li>
								</nav>
							</div> */}
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
