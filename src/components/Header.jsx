import logo from '../assets/logo.svg'
import SearchMenu from './SearchMenu';


function Header({ setSummaryData }) {


	return (
		<header className="flex flex-col gap-6 p-4 sm:flex-row sm:justify-between sm:items-center w-full">
			<a href='/' className='min-w-[70px] min-h-[14px] cursor-pointer'>
				<img src={logo} className="object-cover" alt="logo" />
			</a>
			<SearchMenu setSummaryData={setSummaryData} />
		</header>
	)
}

export default Header