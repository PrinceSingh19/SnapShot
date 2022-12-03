import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full shadow-lg fixed top-0 z-10 bg-yellow-400">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
				<div>
					<div className="flex items-center justify-between py-3 sm:py-5 sm:block">
						<NavLink href="*">
							<h2 className="text-2xl font-bold text-black font-cursive">Snapshot</h2>
						</NavLink>

						<div className="sm:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 ${
							navbar ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-center space-y-8 sm:flex sm:space-x-6 sm:space-y-0 ">
							<li className="text-white hover:text-red-600 transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105 duration-300">
								<NavLink
									to="/nature"
									className="active:outine-none sm:text-xl outline-none focus:outline-none hover:scale-75 "
								>
									Nature
								</NavLink>
							</li>
							<li className="text-white  hover:text-red-600 transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105 duration-300">
								<NavLink
									to="/forest"
									className="active:outine-none sm:text-xl outline-none focus:outline-none"
								>
									Forest
								</NavLink>
							</li>
							<li className="text-white hover:text-red-600 transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105 duration-300">
								<NavLink
									to="/river"
									className="active:outine-none sm:text-xl outline-none focus:outline-none"
								>
									River
								</NavLink>
							</li>
							<li className="text-white hover:text-red-600 transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105 duration-300">
								<NavLink
									to="/universe"
									className="active:outine-none outline-none sm:text-xl focus:outline-none"
								>
									Universe
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
