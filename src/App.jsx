import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import staysData from './data/stays.json';


function App() {
	const [totalVal, setTotalVal] = useState(staysData.length);
	const [staysVal, setStaysVal] = useState(staysData);
	const [locationVal, setLocationVal] = useState('all countries');

	function handleSummaryData({ total, stays, currentLocation }) {

		setTotalVal(total);
		setStaysVal(stays);
		if (currentLocation === '') { setLocationVal('all countries'); return; }
		setLocationVal(currentLocation);
	}

	return (
		<div className="relative flex flex-col gap-6  mx-auto ">
			<Header setSummaryData={handleSummaryData} />
			<main className='flex flex-col gap-4 p-4 container-stays '>
				<section className={`flex flex-col gap-8  w-full max-w-6xl mx-auto`}>
					<div className='flex items-center justify-between'>
						<h1 className='text-[16px] sm:text-[18px] md:text-[24px]'>Stays in {locationVal}</h1>
						<span className='text-[12px] sm:text-[14px] text-[#4f4f4f]'>{totalVal} total stays</span>
					</div>

					<ul className='results-data gap-x-4 gap-y-10 md:gap-y-14'>
						{
							staysVal.map(it =>
								<li key={it.title}>
									<article className='flex flex-col gap-2 min-w-[250px] sm:min-w-[300px]'>
										<div className="container-ratio">
											<img src={`${it.photo}`} alt="" />
										</div>
										<div className='flex justify-between items-center'>
											{it.superHost ? <h3 className='border-[1px] border-gray-300 rounded-full px-4 py-1 uppercase text-[10px] font-bold text-[#4f4f4f]'>super host</h3> : ''}
											<p className='text-[12px] text-[#828282] font-medium'>{it.type}</p>
											<div className='container-rating flex items-center gap-1 text-[14px] text-[#4f4f4f]'>
												<svg viewBox="0 0 24 24">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												{it.rating}
											</div>
										</div>
										<h2 className='text-[14px] text-[#333333]'>{it.title}</h2>
									</article>
								</li>
							)
						}
					</ul>

				</section>
			</main>

			<footer>
				<p className="text-[#4f4f4f] text-center p-4 font-medium">created by <span className='font-bold'>houssam-developer</span> - devChallenges.io</p>
			</footer>
		</div>
	)
}

export default App
