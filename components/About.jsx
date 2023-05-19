import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center justify-center py-16">
			<div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I'm not your average developer... 
					</p>
					<p className="py-2 text-gray-600">
						I started developing applications about 3 years ago after joining the social media platform Discord. At the time, I really just wanted to avoid paying premium for things I felt should be free for everyone. 
					</p>
					<p className="py-2 text-gray-600">
						Coming from a background that was as far from programming as you'd get, I had no idea what I was doing. I started with a language called Python, and I was hooked. I spent hours and hours learning the language and how to use it. I started with simple commands that would do things like send a message to a channel, or delete a message. I then moved on to more complex things like creating a database and storing information in it.
					</p>
					<p className="py-2 text-gray-600">
						Once I realized my passion for programming, I quickly wanted to branch out into further languages and really see what I could make. I dove into JavaScript and learned that my knowledge was not as vast as I originally thought. Fast forward to today, I have a strong understanding of both JavaScript and Python and I'm always looking to learn more. 
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my most recent projects!
					</p>
				</div>
				<div className="col-span-1 w-full h-auto m-16 shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src="/computer.png" width={300} height={300} className="rounded-xl"/>
				</div>
			</div>
		</div>
	)
}

export default About;