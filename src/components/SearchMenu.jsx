import { useContext, useEffect, useRef, useState } from 'react';
import staysData from '../data/stays.json';


const TARGET_INPUT_LOCATION = 'location';
const TARGET_INPUT_GUESTS = 'guests';

function SearchMenu({ setSummaryData }) {
	const [locationValue, setLocationValue] = useState('Helsinki, Finland');
	const [guestsValue, setGuestsValue] = useState(1);
	const [searchModalClassNames, setSearchModalClassNames] = useState('search-modal');

	const [targetTopVal, setTargetTopVal] = useState('-100%');

	function handleFormSearchEvent(e) {
		console.log('formSeachClick');
		e.preventDefault();
		document.documentElement.style.setProperty('--container-modal-search--top', '0');
	}

	function updateFormData(location, guests) {
		setLocationValue(location);
		setGuestsValue(guests);
	}

	return (
		<div>
			<SearchModal setSummaryData={setSummaryData} formData={updateFormData} />
			<form className='flex sm:flex-row shadow rounded-xl ' onClick={handleFormSearchEvent}>
				<div className='p-3 rounded-l-xl flex max-w-[150px] border-[1px] border-r-0 border-gray-200' >
					<input className=' w-full text-sm focus:outline-none' type="text" placeholder='Helsinki, Finland' value={locationValue} />
				</div>
				<div className='p-3 flex max-w-[150px] border-[1px] border-r-0 border-gray-200'>
					<input className='w-full text-sm focus:outline-none' type="tel" placeholder='Add guests' value={guestsValue} />
				</div>
				<button className='p-3 rounded-r-xl max-w-min border-[1px] border-gray-200' type='submit'>
					<svg style={{ width: '24px', height: '24px', fill: '#EB5757E5' }} viewBox="0 0 24 24">
						<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					</svg>
				</button>
			</form>
		</div>
	)


	function SearchModal({ setSummaryData, formData }) {

		const [resultsLocations, setResultsLocations] = useState([])
		const [displayLocationResults, setDisplayLocationResults] = useState('hidden');
		const [displayGuestsResults, setDisplayGuestsResults] = useState('hidden');

		const [inputContentLocation, setInputContentLocation] = useState('');
		const [placeholderGuests, setPlaceholderGuests] = useState('Add Guests');

		const [counterAdults, setCounterAdults] = useState(0);
		const [counterChildren, setCounterChildren] = useState(0);
		const [counterGuests, setCounterGuests] = useState(0);


		function handleCloseSearchModal() {
			console.log('Close Modal');
			document.documentElement.style.setProperty('--container-modal-search--top', '-100%');
		}

		useEffect(() => {
			let results = inputContentLocation === '' ?
				[] : staysData.filter(it =>
					it.city.toLowerCase().includes(inputContentLocation.toLowerCase())
					|| it.country.toLowerCase().includes(inputContentLocation.toLowerCase())
				);


			results = counterGuests === 0 ? results : results.filter(it => it.maxGuests === counterGuests);
			setResultsLocations(results);

			console.log('SearchMenu.useEffect() #results ', results);

		}, [inputContentLocation, counterGuests]);

		function handleAdultsBtnMinus(e) {
			e.preventDefault();
			console.log('AdultsBtnMinus');
			if (counterAdults < 1) { setCounterAdults(0); return; }
			setCounterAdults((currentVal) => currentVal - 1);

			if (counterGuests < 1) { setCounterGuests(0); return; }
			setCounterGuests((currentVal) => currentVal - 1);
		}

		function handleAdultsBtnPlus(e) {
			e.preventDefault();
			console.log('AdultsBtnPlus');
			if (counterGuests == 10) { alert('Max Guests is 10, lower number of adults or children'); return; }
			setCounterGuests((currentVal) => currentVal + 1);

			if (counterAdults == 10) { alert('Max Adults Guests is 10'); return; }
			setCounterAdults((currentVal) => currentVal + 1);
		}

		function handleChildrenBtnMinus(e) {
			e.preventDefault();
			console.log('ChildrenBtnMinus');
			if (counterGuests < 1) { setCounterGuests(0); return; }
			setCounterGuests((currentVal) => currentVal - 1);

			if (counterChildren < 1) { setCounterChildren(0); return; }
			setCounterChildren((currentVal) => currentVal - 1);
		}

		function handleChildrenBtnPlus(e) {
			e.preventDefault();
			console.log('ChildrenBtnMinus');
			if (counterGuests == 10) { alert('Max Guests is 10, lower number of adults or children'); return; }
			setCounterGuests((currentVal) => currentVal + 1);

			if (counterChildren == 10) { alert('Max Children Guests is 10'); return; }
			setCounterChildren((currentVal) => currentVal + 1);
		}

		function handleInputLocationEvent(e) {
			//e.preventDefault();
			setInputContentLocation(e.target.value);
			console.log('inputLocationSearchVal: ', inputContentLocation);
		}

		function updateDisplayResult(targetInput) {
			if (targetInput === TARGET_INPUT_LOCATION) {
				setDisplayGuestsResults('hidden');
				setDisplayLocationResults('');
				return;
			}

			if (targetInput === TARGET_INPUT_GUESTS) {
				setDisplayLocationResults('hidden');
				setDisplayGuestsResults('');
				return;
			}
		}

		function handleResultBtnLocation(e, it) {
			e.preventDefault();
			console.log(it);
			setInputContentLocation(`${it.city}`);
			setPlaceholderGuests(`${it.maxGuests} (max guests)`);
		}

		function handleFormSearch(e) {
			e.preventDefault();
			console.log('FormSearch: ', e.target);

			const formData = new FormData(e.target);
			console.log(`🚧 loadTsFormData() #formData `, formData);

			Array.from(formData.entries()).forEach(it => console.log(`|__ 🚧 loadTsFormData() #entry `, it))

			let location = inputContentLocation.toLowerCase();
			console.log('location: ', location);
			let res = location === '' ? staysData : staysData.filter(it => it.city.toLowerCase().includes(location) || it.country.toLowerCase().includes(location))

			res = counterGuests === 0 ? res : res.filter(it => it.maxGuests === counterGuests);

			console.log('res: ', res);
			setSummaryData({
				stays: res,
				total: res.length,
				currentLocation: inputContentLocation,
				guests: counterGuests
			});

			document.documentElement.style.setProperty('--container-modal-search--top', '-100%');
			formData(inputContentLocation, counterGuests);
		}

		return (
			<div className={'absolute right-0 left-0 p-4 bg-white z-50 flex flex-col min-h-[90vh] gap-6 container-modal-search'}>

				{/* Edit your search */}

				<div className='flex justify-between'>
					<h2>Edit your search</h2>
					<button onClick={handleCloseSearchModal}>
						<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
							<path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
						</svg>
					</button>
				</div>

				{/* Locations - Guests */}

				<form className='flex flex-col flex-grow' onSubmit={handleFormSearch}>
					<div className='flex flex-col sm:flex-row sm:items-center sm:justify-around shadow rounded-xl border-[1px] focus-within:border-orange-200 w-full md:w-[768px] mx-auto'>
						<div className='flex flex-col border-b-[1px] py-2 px-4 gap-2 md:flex-grow '>
							<label htmlFor='location' className='text-[9px] uppercase font-bold'>location</label>
							<input className='text-sm focus:outline-none border-none' type="text"
								name='location' placeholder='Helsinki, Finland'
								defaultValue={inputContentLocation}
								onChange={handleInputLocationEvent}
								onClick={() => updateDisplayResult(TARGET_INPUT_LOCATION)} />
						</div>
						<div className='flex flex-col border-b-[1px] py-2 px-4 gap-2 md:flex-grow '>
							<label className='text-[9px] uppercase font-bold'>guests</label>
							<input className='text-sm focus:outline-none border-none' type="tel"
								name='guests' placeholder={placeholderGuests} defaultValue={counterGuests === 0 ? '' : counterGuests} onClick={() => updateDisplayResult(TARGET_INPUT_GUESTS)} />
						</div>

						{/* Btn Submit Desktop  */}
						<div className='hidden sm:block'>
							<button className='mt-auto flex gap-2 bg-[#EB5757E5] rounded-2xl text-white px-4 py-3 mr-2'
								type='submit'>
								<svg style={{ width: '24px', height: '24px', fill: '#F2F2F2' }} viewBox="0 0 24 24">
									<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
								</svg>
								<span>Search</span>
							</button>
						</div>
					</div>

					{/* Results Locations */}

					<div className={`${displayLocationResults} shadow rounded-xl p-4 flex flex-col gap-6 max-h-[45vh] overflow-auto w-full md:md:w-[768px] mx-auto`}>
						{
							resultsLocations.map(it =>
								<button key={it.title} className='flex gap-2 text-[#4f4f4f]' onClick={(e) => handleResultBtnLocation(e, it)}>
									<svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
										<path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
									</svg>
									<span>{it.city}, {it.country}</span>
								</button>
							)
						}
					</div>

					{/* Guests Controls */}

					<div className={`${displayGuestsResults} flex flex-col sm:flex-row sm:justify-end shadow rounded-xl p-4 w-full md:md:w-[768px] mx-auto`}>
						<div className='sm:min-w-[55%] flex flex-col gap-4'>
							<div>
								<h3 className='text-sm'>Adults</h3>
								<p className='mb-2 text-[#aaa] text-sm'>Ages 13 or above</p>
								<div className='flex gap-3'>
									<button onClick={handleAdultsBtnMinus} className='text-[#4f4f4f] min-w-[24px] min-h-[24px] rounded border-[1px] border-gray-400'>-</button>
									<span>{counterAdults}</span>
									<button onClick={handleAdultsBtnPlus} className='text-[#4f4f4f] min-w-[24px] min-h-[24px] rounded border-[1px] border-gray-400'>+</button>
								</div>
							</div>
							<div>
								<h3 className='text-sm'>Children</h3>
								<p className='mb-2 text-[#aaa] text-sm'>Ages 2-12</p>
								<div className='flex gap-3'>
									<button onClick={handleChildrenBtnMinus} className='text-[#4f4f4f] min-w-[24px] min-h-[24px] rounded border-[1px] border-gray-400'>-</button>
									<span>{counterChildren}</span>
									<button onClick={handleChildrenBtnPlus} className='text-[#4f4f4f] min-w-[24px] min-h-[24px] rounded border-[1px] border-gray-400'>+</button>
								</div>
							</div>
						</div>
					</div>

					{/* Btn Search */}
					<button className='mt-auto flex gap-2 self-center bg-[#EB5757E5] rounded-2xl text-white px-6 py-3 sm:hidden'
						type='submit'>
						<svg style={{ width: '24px', height: '24px', fill: '#F2F2F2' }} viewBox="0 0 24 24">
							<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
						</svg>
						<span>Search</span>
					</button>
				</form>
			</div>
		);
	}
}

export default SearchMenu

