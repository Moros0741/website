import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import contactImg from "../public/contact.png";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*  left  */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className>
                <h2 className="py-2">Nicholas</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance work, and/or full-time
                  employment.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://discord.com/users/700057705951395921"
                      target="_blank"
                    >
                      <FaDiscord className="text-gray-700 text-xl" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://github.com/Moros0741" target="_blank">
                      <FaGithub className="text-gray-700 text-xl" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="mailto:moros.nick0741@gmail.com">
                      <AiOutlineMail className="text-gray-700 text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  right  */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#5651e5] cursor-pointer" />
						</div>
					</Link>
				</div>
      </div>
    </div>
  );
};

export default Contact;
