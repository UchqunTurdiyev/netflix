import React from 'react';
import { Header } from './header/Header';
import bg from './img/bg.jpg';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import List from './list/List';

export const Home = () => {
	return (
		<>
			<div className='w-full h-screen bg-black/30 relative'>
				<img className='w-full h-full absolute top-0 left-0 -z-10' src={bg} alt='Home' />
				<Header />
				<div className='w-full h-full flex flex-col justify-center items-left pl-20'>
					<h1 className='text-8xl text-yellow-300 font-bold font'>Kino Olami</h1>
					<p className='font text-white w-[40%] py-8 text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vero hic omnis illo libero non officia. Dolores,
						quos? Animi, hic. Quisquam unde recusandae sapiente, ipsam eos nisi id modi tempora.
					</p>
					<div className='flex items-center gap-2'>
						<button className='py-2 px-6 rounded-md flex items-center justify-center bg-white/70 text-md'>
							<BsPlayFill className='mr-2 text-lg' /> Play
						</button>
						<button className='py-2 px-6 rounded-md flex items-center justify-center bg-gray-500/80 text-md'>
							<AiOutlineInfoCircle className='mr-2 text-lg' /> Info
						</button>
					</div>
				</div>
			</div>

			{/* list */}
			<div className='flex flex-col space-y-4'>
				<List />
				<List />
				<List />
				<List />
			</div>
		</>
	);
};
