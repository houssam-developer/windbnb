import { useEffect, useState } from 'react';
import staysData from '../data/stays.json';

function SearchMenu() {
	const [locationValue, setLocationValue] = useState('Helsinki, Finland');
	const [guestsValue, setGuestsValue] = useState(1);
	const [searchModalClassNames, setSearchModalClassNames] = useState('search-modal');

	return (
		<div className='border-2 border-red-300 flex flex-col min-h-[90vh]'>
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


			<div className='m-4 shadow rounded-xl border-[1px] focus-within:border-orange-300'>
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
			<div>
				Results
			</div>

			<button type='submit'>
				<svg style={{ width: '24px', height: '24px', backgroundColor: '#EB5757E5', fill: '#F2F2F2' }} viewBox="0 0 24 24">
					<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
				</svg>
			</button>


		</div>
	)
}

export default SearchMenu