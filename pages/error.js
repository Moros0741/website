import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Error() {
	return (
		<div className="fixed mt-0 m-auto w-full items-center justify-center bg-[url('/background.png')] bg-cover h-screen">
			<Head>
				<title>Form Submission Error</title>
				<meta name="description" content="Something went wrong with your form submission." />
			</Head>
			<Navbar />
			<div className="w-full h-screen mt-0">
				<div className="bg-[#ecf0f3] shadow-lg shadow-gray-400 w-[50%] h-[50%] m-auto mt-32 items-center justify-center">
					<div className="flex flex-cols-1">
						<div className="flex justify-center m-auto items-center">
							<img src="/nick_b.png" alt="Nick | Moros#0741" className="h-32 w-32 m-[25px]" />
						</div>
					</div>
					<div className="flex justify-center items-center py-2 m-[25px]">
						<h3 className="uppercase text-black text-widest">Oh, No! Something went wrong!</h3>
					</div>
					<div className="flex m-auto py-2 justify-center items-center">
						<p>Something wasn't quite right in your form, Please try again.</p>
					</div>
					<div className="flex m-auto py-2 justify-center items-center">
						<a href="/">
							<button className="p-2">
								Return Home
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}