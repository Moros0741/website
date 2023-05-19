import Router from "next/router";

export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
 
    // Get data from the form.
		console.log(event);
    const data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
			email: event.target.email.value,
			subject: event.target.subject.value,
			message: event.target.message.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
 
    // API endpoint where we send form data.
    const endpoint = '/api/form';
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
 
    // Send the form data to our forms API on Vercel and get a response.
    let response = await fetch(endpoint, options);

		if (response.status === 200) {
			Router.push({ pathname: '/success'});
		} else {
			console.log(response.error)
			Router.push({
				pathname: '/error'
			});
		};
  };
  return (
    <form onSubmit={handleSubmit}>
			<div className="grid md:grid-cols-2 gap-4 w-full py-2">
				<div className="flex flex-col">
					<label className="uppercase text-sm py-2">Name</label>
					<input
						type="text"
						name="name"
						className="border-2 border-gray-300 flex rounded-lg p-3"
					/>
				</div>
				<div className="flex flex-col">
					<label className="uppercase text-sm py-2">
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						className="border-2 border-gray-300 flex rounded-lg p-3"
					/>
				</div>
			</div>
			<div className="flex flex-col py-2">
				<label className="uppercase text-sm py-2">Email</label>
				<input
					type="email"
					name="email"
					className="border-2 border-gray-300 flex rounded-lg p-3"
				/>
			</div>
			<div className="flex flex-col py-2">
				<label className="uppercase text-sm py-2">Subject</label>
				<input
					type="text"
					name="subject"
					className="border-2 border-gray-300 flex rounded-lg p-3"
				/>
			</div>
			<div className="flex flex-col py-2">
				<label className="uppercase text-sm py-2">Message</label>
				<textarea
					type="text"
					name="message"
					className="border-2 border-gray-300 flex rounded-lg p-3"
					rows="10"
				/>
			</div>
			<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
		</form>
  );
}