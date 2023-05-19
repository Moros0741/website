import React from 'react'
import Image from 'next/image'
import Img from "/public/DiscordPagesjs.png"
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
	return (
		<div id="projects" className="w-full mt-32 mb-32">
			<div className="max-w-[1240px] mx-auto px-2 py-32">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">
					What I've Built
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem 
						img={Img}
						name="Discord-Pages.js"
						libs={["Node JS", "Discord JS", "TypeScript" ]}
						href="/discordPages"
					/>
				</div>
			</div>
		</div>
	)
}
export default Projects;