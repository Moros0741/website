import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub }  from "react-icons/fa";

const Navbar = () => {
	const [ nav, setNav ] = useState(false);
	const [ shadow, setShadow ] = useState(false);
	const [ text, setText ] = useState(false);


	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleText = () => {
			
			if (["/", "/discordPages"].includes(location.hash)) {
				setText(true);
			} else {
				setText(false);
			};
		};
		window.addEventListener("popstate", handleText());

		const handleShadow = () => {
			if (window.scrollY >= 720) {
				setShadow(true);
				setText(true);
			} else {
				setShadow(false);
				setText(false);
			};
		};
		window.addEventListener("scroll", handleShadow);
	}, [])

	return (
		<div className={ shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]" }>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/#home">
					{
					!text 
						? <Image src='/nick_w.png' width={100} height={100} /> 
						: <Image src="/nick_b.png" width={100} height={100} />
					}
				</Link>
				<div>
					<ul className="md:flex">
						<Link href="/#home" >
							<li className={text ? "ml-10 text-sm uppercase hover:border-b": "ml-10 text-sm uppercase hover:border-b text-white"}>
								Home
							</li>
						</Link>
						<Link href="/#about" >
							<li 
								className={text ? "ml-10 text-sm uppercase hover:border-b": "ml-10 text-sm uppercase hover:border-b text-white"}
								onClick={() => setText(false)}
							>
								About
							</li>
						</Link>
						<Link href="/#skills" >
							<li 
								className={text ? "ml-10 text-sm uppercase hover:border-b": "ml-10 text-sm uppercase hover:border-b text-white"}
								onClick={() => setText(false)}
							>
								Skills
							</li>
						</Link>
						<Link href="/#projects" >
							<li 
								className={text ? "ml-10 text-sm uppercase hover:border-b": "ml-10 text-sm uppercase hover:border-b text-white"}
								onClick={() => setText(false)}
							>
								Projects
							</li>
						</Link>
						<Link href="/#contact" >
							<li 
								className={text ? "ml-10 text-sm uppercase hover:border-b": "ml-10 text-sm uppercase hover:border-b text-white"}
								onClick={() => setText(false)}
							>
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div className={!nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : "hidden"}>
				<div className={!nav ? "md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "hidden"}>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src="/nick.png" width={100} height={100} />
							<div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3">
								<AiOutlineClose size={25} />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/" >
								<li onClick={() => setNav(false)} className="text-sm py-4">
									Home
								</li>
							</Link>
							<Link href="/#about" >
								<li onClick={() => setNav(false)} className="text-sm py-4">
									About
								</li>
							</Link>
							<Link href="/#skills" >
								<li onClick={() => setNav(false)} className="text-sm py-4">
									Skills
								</li>
							</Link>
							<Link href="/#projects" >
								<li onClick={() => setNav(false)} className="text-sm py-4">
									Projects
								</li>
							</Link>
							<Link href="/#contact" >
								<li onClick={() => setNav(false)} className="text-sm uppercase hover:border-b py-4">
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5">
								Let's Connect
							</p>
							<div className= "flex justify-between items-center my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<a href="https://discord.com/users/700057705951395921" target="_blank">
										<FaDiscord />
									</a>
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<a href="https://github.com/Moros0741" target="_blank">
										<FaGithub />
									</a>
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<a href="mailto:moros.nick0741@gmail.com" target="_blank">
										<AiOutlineMail />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Navbar;