import logo from '../assets/logo.svg'
import SearchMenu from './SearchMenu';


function Header({ setSummaryData }) {


	return (
		<header className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center w-full">
			<div className='min-w-[70px] min-h-[14px]'>
				<img src={logo} className="object-cover" alt="logo" />
			</div>
			<SearchMenu setSummaryData={setSummaryData} />
		</header>
	)
}

export default Header