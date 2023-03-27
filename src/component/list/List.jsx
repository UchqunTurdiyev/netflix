import React, { useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function List(props) {
	const [slideNum, setSlideNum] = useState(0);

	const listRef = useRef();
	const handleCLick = direction => {
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === 'left' && slideNum > 0) {
			setSlideNum(slideNum - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === 'right' && slideNum < 5) {
			setSlideNum(slideNum + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
		console.log(distance);
	};
	return (
		<div className='w-full h-72 bg-slate-700 relative overflow-hidden'>
			<div className='absolute w-20 h-full z-10 bg-black/60 left-0'>
				<AiOutlineLeft
					onClick={() => handleCLick('left')}
					className='text-white text-4xl absolute left-2 top-[120px] cursor-pointer transition-all hover:scale-150'
				/>
			</div>
			<div
				ref={listRef}
				className='w-full px-20 translate-x-0 transition duration-500 h-full bg-slate-700 mx-auto py-2 flex items-center'
			>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
				<div className='min-w-[250px] h-full bg-slate-900 mx-2'></div>
			</div>
			<div className='absolute w-20 h-full z-10 bg-black/60 top-0 right-0'>
				<AiOutlineRight
					onClick={() => handleCLick('right')}
					className='text-white text-4xl absolute right-2 top-[120px] cursor-pointer transition-all hover:scale-150'
				/>
			</div>
		</div>
	);
}

export default List;
