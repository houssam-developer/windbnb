import './SearchMenu.scss';
import Button from './Button';

function SearchMenu() {
	return (
		<div className="container-search-menu">
			<div className="search-modal">
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
						<input type='button' className='search-menu__btn-location' value='Location' placeholder='Location'></input>
						<input type='button' className='search-menu__btn-guests' value='Add Guests' placeholder='Add Guests'></input>
					</div>

					<div className="search-modal__content__results">
						<ul>
							<li>Hi 1</li>
							<li>Hi 2</li>
							<li>Hi 3</li>
						</ul>
					</div>

					<button type='submit' className='search-menu__btn-search'>
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