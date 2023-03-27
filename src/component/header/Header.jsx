import React, { useState } from 'react';
import logo from '../img/netflix.png';
import { AiOutlineSearch, AiFillBell, AiFillCaretDown } from 'react-icons/ai';

export const Header = () => {
	const [isScroll, setIsScroll] = useState(false);

	window.onscroll = () => {
		setIsScroll(window.pageYOffset === 0 ? true : false);
		return () => (window.onscroll = null);
	};
	return (
		<div className='w-full transition-all z-50 absolute left-0 top-0'>
			<header
				className={
					isScroll
						? 'w-full transition-all bg-black flex items-center justify-between px-20 py-6'
						: 'fixed top-0 left-0 transition-all w-full bg-black/90 flex items-center justify-between px-20 py-6'
				}
			>
				<nav className='flex'>
					<img className='w-28 mr-10' src={logo} alt='Logo' />
					<a className='text-white underline-none ml-6 hover:text-white/70' href='/'>
						Homepage
					</a>
					<a className='text-white underline-none ml-6 hover:text-white/70' href='/'>
						Series
					</a>
					<a className='text-white underline-none ml-6 hover:text-white/70' href='/'>
						Movies
					</a>
					<a className='text-white underline-none ml-6 hover:text-white/70' href='/'>
						New and Popular
					</a>
					<a className='text-white underline-none ml-6 hover:text-white/70' href='/'>
						My List
					</a>
				</nav>
				<div className='flex items-center gap-2'>
					<AiOutlineSearch className='text-xl cursor-pointer text-white ml-4' />
					<AiFillBell className='text-xl cursor-pointer text-white ml-4' />
					<div className='group'>
						<AiFillCaretDown className=' text-xl cursor-pointer text-white ml-4' />
						<div className='hidden absolute group-hover:flex bg-black/90 flex-col space-y-2 p-4 rounded-md '>
							<a className='text-white underline-none hover:text-white/70' href='/'>
								Settings
							</a>
							<a className='text-white underline-none hover:text-white/70' href='/'>
								Logout
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
