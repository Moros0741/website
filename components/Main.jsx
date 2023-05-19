import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const main = () => {
	return (
		<div id="home" className="w-full h-screen text-center bg-[url('/background.png')] bg-cover">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-200">
						LET'S BUILD SOMETHING LEGENDARY TOGETHER
					</p>
					<h1 className="py-4 text-gray-100">
						Hey I'm <span className="text-blue-500">Nick</span>
					</h1>
					<h1 className="py-2 text-gray-100">
						A Full Stack Developer
					</h1>
					<p className="py-4 text-gray-200 max-w-[70%] m-auto">
						I'm a full stack developer specializing in Next, Node, and MongoDB. Currently, I'm working on back-end development with Node and Express. I'm also learning React Native to build interactive front-end applications.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="bg-white rounded-full shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="https://discord.com/users/700057705951395921" target="_blank">
								<FaDiscord className="text-gray-700 text-2xl" />
							</a>
						</div>
						<div className="bg-white rounded-full shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="https://github.com/Moros0741" target="_blank">
								<FaGithub className="text-gray-700 text-2xl" />
							</a>
						</div>
						<div className="bg-white rounded-full shadow-black shadow-md p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<a href="mailto:moros.nick0741@gmail.com">
								<AiOutlineMail className="text-gray-700 text-2xl" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default main;