import './SearchMenu.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import staysData from '../data/stays.json';

function SearchMenu() {
	const [locationValue, setLocationValue] = useState('Helsinki, Finland');
	const [guestsValue, setGuestsValue] = useState(1);
	const [searchModalClassNames, setSearchModalClassNames] = useState('search-modal');

	return (
		<div className="container-search-menu">
			<div className={searchModalClassNames}>
				<div className="search-modal__head">
					<h3>Edit your search</h3>
					<button>
						<svg viewBox="0 0 24 24">
							<path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
						</svg>
					</button>
				</div>

				<form className="search-modal__content">
					<div className="search-modal__content__entries">
						<div className="search-modal__content__entries__container-location">
							<label>location</label>
							<input type='text' placeholder='Location'
								value={locationValue} onChange={(e) => setLocationValue(e.target.value)}
								onClick={() => setSearchModalClassNames('search-modal search-modal__location')}></input>
						</div>
						<div className="search-modal__content__entries__container-guests">
							<label>guests</label>
							<input type='tel' value={guestsValue} onChange={(e) => setGuestsValue(e.target.value)} placeholder='Add Guests' onClick={() => setSearchModalClassNames('search-modal search-modal__guests')}></input>
						</div>
					</div>

					<div className="search-modal__content__results">
						<ul className='search-modal__content__results__location'>
							{
								staysData.map(it =>
									<li key={`${it.title}`}>
										<svg viewBox="0 0 24 24">
											<path fill='currentColor' d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
										</svg>
										<h5>{it.city}, {it.country}</h5>
									</li>
								)}
						</ul>
						<div className="search-modal__content__results__guests">
							Guest Results
						</div>
					</div>

					<button type='submit' className='search-modal__content__btn-search'>

						<svg viewBox="0 0 24 24">
							<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
						</svg>
					</button>
				</form>
			</div>
			<form className="search-menu">
				<input type='button' className='search-menu__btn-location' value='Location' placeholder='Location'></input>
				<input type='button' className='search-menu__btn-guests' value='Add Guests' placeholder='Add Guests'></input>
				<button type='submit' className='search-menu__btn-search'>
					<svg viewBox="0 0 24 24">
						<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					</svg>
				</button>
			</form>
		</div>
	)
}

export default SearchMenu