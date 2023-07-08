import Image from 'next/image';

export default function Section5() {
	return (
		<div className='bg-primary'>
			<div className='wrapper py-24'>
				<p className='text-[24px] z-10 md:text-[24px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-[200] tracking-tight text-white'>
					Royal Group
				</p>
				<p className='text-[24px] z-10 md:text-[24px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] mt-2 font-bold tracking-tight text-gradient'>
					Overview
				</p>
				<div className=' mt-10 grid items-center gap-6  grid-cols-1 md:grid-cols-3'>
					<div
						style={{ width: '100%', borderColor: 'white' }}
						className='border-[4px]  rounded-[24px] p-[28px] h-[420px] lg:h-[400px] md:h-[380px] '>
						{/* <div className='relative w-[80px] h-[80px]'>
						<Image src={'/images/section6/image1.svg'} alt='big-nature' fill priority={true} />
					</div> */}
						<p className='py-[16px] md:py-[16px] lg:py-[16px] text-[18px] font-[700] text-white'>
							The Future of Gold Mining in Blockchain Technology: What to Expect?
						</p>
						<p className='text-[14px] font-[400] line-clamp-4 mt-[14px] md:mt-[14px] lg:mt-[0px] mb-[16px] text-white'>
							Gold mining is a global industry with operations worldwide, with most production concentrated in China,
							South Africa, Australia, Russia, Peru, and Indonesia. While gold is economically important to these
							countries, the environmental and societal costs are significant, long-lasting, and potentially outweigh
							the economic benefits of mining.
						</p>
						{/* <button class='bg-primary text-white font-bold py-[10px] rounded-full w-[134px]'>Read More</button> */}
					</div>
					<div
						style={{ width: '100%', borderColor: 'white' }}
						className='border-[4px]  rounded-[24px] p-[28px] h-[420px] lg:h-[400px] md:h-[380px] '>
						{/* <div className='relative w-[80px] h-[80px]'>
						<Image src={'/images/section6/image2.svg'} alt='big-nature' fill priority={true} />
					</div> */}
						<p className='py-[16px] md:py-[16px] lg:py-[16px] text-[18px] font-[700] text-white'>
							Climate-Change Token Startup Bets on Gold Price
						</p>
						<p className='text-[14px] font-[400] line-clamp-4 mt-[14px] md:mt-[14px] lg:mt-[0px] mb-[16px]  md:mb-[36px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[64px] text-white '>
							A pile of gold bars is seen in this picture illustration. Singapore-based Nature’s Vault is betting that
							investors will pay for leaving gold underground to help the environment.
						</p>
						{/* <button class='bg-primary text-white font-bold py-[10px] rounded-full w-[134px]'>Read More</button> */}
					</div>
					<div
						style={{ width: '100%', borderColor: 'white' }}
						className='border-[4px]  rounded-[24px] p-[28px] h-[420px] lg:h-[400px] md:h-[380px]  '>
						{/* <div className='relative w-[80px] h-[80px]'>
						<Image src={'/images/section6/image3.svg'} alt='big-nature' fill priority={true} />
					</div> */}
						<p className='py-[16px] md:py-[16px] lg:py-[16px] text-[18px] font-[700] text-white'>
							You've Heard of Play to Earn, But What about Preserve to Earn?
						</p>
						<p className='text-[14px] font-[400] line-clamp-4 mt-[14px] md:mt-[14px] lg:mt-[0px] mb-[16px] text-white'>
							Gaming has already been declared the entertainment industry's most lucrative medium. With the emergence of
							the play-to-earn (P2E) economy, the metaverse's advent has created even more opportunities for exponential
							growth within the sector. By leveraging blockchain technology, play-to-earn technology allows players to
							create or buy in-game assets linked to non-fungible tokens (NFTs). By simply playing, in-game resources
							are tokenized and can be sold to anyone on a peer-to-peer market. Some of these assets can be sold for up
							to 300 Ethereum (the equivalent of US $600,000).
						</p>
						{/* <button class='bg-primary text-white font-bold py-[10px] rounded-full w-[134px]'>Read More</button> */}
					</div>
				</div>
				<p className='mt-14 text-[14px] md:text-[14px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] text-white leading-[160%]'>
					Royal Group is a dynamic and innovative conglomerate specializing in defense, healthcare, system integration,
					and digital transformation. Our subsidiaries provide advanced solutions in land, air, and sea defense
					technologies, AI-driven healthcare, seamless system integration, and digital innovation. Committed to quality,
					innovation, and customer satisfaction, we strive to exceed expectations and create a better future through
					technology.
				</p>
			</div>
		</div>
	);
}
