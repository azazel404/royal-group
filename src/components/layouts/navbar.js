import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
	{ name: 'Home', href: '/#home' },
	{ name: 'About Us', href: '/#about-us' },
	{ name: 'Group of companies', href: '/#companies' },
	// {
	// 	name: 'Litepaper',
	// 	href: 'https://natures-vault.gitbook.io/naturesgold-token-and-pistol-lake-nft-litepaper/',
	// 	target: '_blank',
	// },
	// { name: 'Community', href: '#community' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='z-50  w-full h-[86px]  bg-primary flex '>
				<nav className='flex w-full items-center justify-between wrapper ' aria-label='Global'>
					<div className='flex grow-[1]'>
						<Link href={'/'}>
							<span id='link' className='-m-1.5 p-1.5'>
								{/* <span className='sr-only'>Your Company</span> */}
								<img className='h-[30px] md:h-[48px] w-auto' src='/images/logo-navbar.png' alt='' />
							</span>
						</Link>
					</div>

					<div className='flex flex-row justify-end lg:justify-between items-center grow-[1]'>
						<div className='flex lg:hidden'>
							<button
								type='button'
								className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
								onClick={() => setMobileMenuOpen(true)}>
								<span className='sr-only'>Open main menu</span>
								<Bars3Icon className='h-6 w-6 text-white' aria-hidden='true' />
							</button>
						</div>
						<div className='hidden lg:flex lg:gap-x-12 lg:justify-end'>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-sm font-semibold leading-6 text-gray-900'
									style={{ color: 'white' }}>
									{item.name}
								</a>
							))}
						</div>
						<div className='flex items-center'>
							<a
								href='mailto:info@royalcemerlang.com'
								className='md:w-[50%] lg:w-auto  text-white  px-[24px] md:px-[24px]  py-[6px] md:py-[6px] border-2 border-white rounded-[50px]  font-semibold shadow-sm hover:bg-primary'>
								<span className='text-[12px] md:text-[14px]  font-bold'>Contact Us</span>
							</a>
						</div>
					</div>
				</nav>
				<Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className='fixed inset-0 z-50' />
					<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
						<div className='flex items-center justify-between'>
							<a href='#' className='-m-1.5 p-1.5'>
								<img className='h-[48px] w-auto' src='/images/logo-navbar.png' alt='' />
							</a>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-white'
								onClick={() => setMobileMenuOpen(false)}>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon className='h-6 w-6' aria-hidden='true' />
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='mt-7 divide-y divide-gray-500/10'>
								<div className='flex flex-col'>
									{navigation.map((item) => (
										<Link href={item.href} key={item.name}>
											<span
												id='link'
												className='px-3 text-center py-4 text-[20px] font-semibold leading-7 text-white hover:bg-gray-50'>
												{item.name}
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</div>
		</>
	);
}
