import React from 'react'
import Image from 'next/image'
import Img from "/public/DiscordPagesjs.png"
import { FaNpm, FaGithub } from 'react-icons/fa'

const discordPages = () => {
	return (
		<div className="w-full">
			<div className=" w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="relative top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
					<Image className="absolute z-1 object-cover" priority={true} fill={true} alt="The discord-pages.js project's cover image" src={Img} />
				</div>
				<div className="p-2 shadow-lg mx-4 rounded-sm">
					<div className="p-4 justify-center items-center">
						<div className="flex items-center justify-center">
							<h2 className="tracking-wide uppercase p-4 text-[#5651e5]">
								discord-pages.js
							</h2>
						</div>
						<div className="flex justify-center items-center">
							<div className="flex justify-center items-center rounded-full shadow-md shadow-[#5651e5] bg-white hover:scale-110 duration-300 ease-in p-4 m-2 cursor-pointer">
								<a className="flex justify-center items-center" href="https://www.github.com/Moros0741/discord-pages.js" target="_blank" rel="noreferrer">
									<div>
										<FaGithub
											width={500}
											height={500}
											onClick={() => window.open("https://github.com/Moros0741/discord-pages.js")}
										/>
									</div>
									<div className="px-4">
										<p>GitHub Repository</p>
									</div>
								</a>
							</div>
							<div className="flex justify-center items-center rounded-full shadow-md shadow-[#5651e5] bg-white p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
								<a className="flex justify-center items-center" href="https://www.npmjs.com/package/discord-pages.js" target="_blank" rel="noreferrer">
									<div>
										<FaNpm
											width={500}
											height={500}
											onClick={() => window.open("https://www.npmjs.com/package/discord-pages.js")}
										/>
									</div>
									<div className="px-4">
										<p>Npm Package</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div>
						<p className="p-4">
							discord-pages.js is a simple, easy to use, and lightweight open source package that allows you to create a paginated embed system for your discord.js bot. Written completely in TypeScript and fully customisable to fit most use-cases. Originally created to cut down on my own code with an importable package, noticing the demand I decided to make this package available to the public on NPM. Check out some of the features below.
						</p>
					</div>
					<div>
						<div className="pt-6">
							<p className="p-4 uppercase tracking-widest text-[#5651e5]">
								Customizable Embed Layouts
							</p>
							<p className="px-4">
								discord-pages.js provides completely customizable embeds by implementing the existing embed builder provided by the discord.js library, while wrapping it in a class that the package can interpret. Expanding it's uses to almost any use-case developers can imagine for their bots.
							</p>
						</div>
						<div className="pt-6">
							<p className="p-4 uppercase tracking-widest text-[#5651e5]">
								Customizable UI Navigation Options
							</p>
							<p className="px-4">
								Expanding on the customizational abilities of discord-pages.js, we've made it easier for developer to choose and implement different UI types and options for navigating pages in paginator. From emojis and/or text, to buttons or dropdown menus, discord-pages.js has it all.
							</p>
						</div>
						<div className="pt-6">
							<p className="p-4 uppercase tracking-widest text-[#5651e5]">
								Filters and Limiters
							</p>
							<p className="px-4 py-6">
								With discord-pages, there are no limits to how many pages a paginator can have. Developers also have the option to target a specific user, allowing only that user to interact with the paginator's UI. As well as the ability to choose when the paginator will timeout, whether it will be deleted on timeout, including the option to limit the visiblity to the user that called it.
							</p>
						</div>
					</div>
				</div>
		</div>
	)
}

export default discordPages;