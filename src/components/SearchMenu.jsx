import { useEffect, useState } from 'react';
import staysData from '../data/stays.json';

function SearchMenu() {
	const [locationValue, setLocationValue] = useState('Helsinki, Finland');
	const [guestsValue, setGuestsValue] = useState(1);
	const [searchModalClassNames, setSearchModalClassNames] = useState('search-modal');

	return (
		<div className=''>
			<form className='flex flex-col max-w-[200px] border-2 border-orange-400'>
				<input className='text-sm focus:outline-none border-none' type="text" placeholder='Helsinki, Finland' />
				<input className='text-sm focus:outline-none border-none' type="tel" placeholder='Add guests' />
				<button className='' type='submit'>
					<svg style={{ width: '24px', height: '24px', fill: '#EB5757E5' }} viewBox="0 0 24 24">
						<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					</svg>
				</button>
			</form>
		</div>
	)
}

export default SearchMenu

function SearchModal() {
	return (
		<div className='border-2 border-red-300 flex flex-col min-h-[90vh] p-4 gap-6'>
			{/* Edit actions */}
			<div className='flex justify-between p-2'>
				<h2>Edit your search</h2>
				<button>
					<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
						<path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
					</svg>
				</button>
			</div>

			{/* Locations - Guests */}


			<div className='shadow rounded-xl border-[1px] focus-within:border-orange-300 w-full md:w-[768px] mx-auto'>
				<div className='flex flex-col border-b-[1px] py-2 px-4 gap-2 '>
					<label className='text-[9px] uppercase font-bold'>location</label>
					<input className='text-sm focus:outline-none border-none' type="text" placeholder='Helsinki, Finland' />
				</div>
				<div className='flex flex-col border-b-[1px] py-2 px-4 gap-2'>
					<label className='text-[9px] uppercase font-bold'>guests</label>
					<input className='text-sm focus:outline-none border-none' type="tel" placeholder='Add guests' />
				</div>
			</div>

			{/* Results */}
			<div className=' p-4 flex flex-col gap-6 max-h-[45vh] overflow-auto w-full md:md:w-[768px] mx-auto'>
				{
					staysData.map(it =>
						<button className='flex gap-2 text-[#4f4f4f]'>
							<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
								<path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
							</svg>
							<span>{it.city}, {it.country}</span>
						</button>
					)
				}
			</div>
			<div className='hidden bg-[#f9f9f9] shadow border-2 border-slate-200 rounded-xl p-4 grid grid-cols-3 place-items-center gap-6 overflow-auto w-full md:md:w-[768px] mx-auto'>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">1</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">2</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">3</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">4</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">5</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">6</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">7</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">8</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">9</button>
				<button className="border-b-2 border-[#EB5757E5] p-2 px-4 text-[#4f4f4f] hover:border-orange-300 hover:text-[#111]">10</button>
			</div>

			<button className='flex gap-2 self-center bg-[#EB5757E5] rounded-2xl text-white px-6 py-3 mt-1' type='submit'>
				<svg style={{ width: '24px', height: '24px', fill: '#F2F2F2' }} viewBox="0 0 24 24">
					<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
				</svg>
				<span>Search</span>
			</button>
		</div>
	);
}