import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-8">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/html.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/css.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/tailwind.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/javascript.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/typescript.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/python.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/node.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/mongo.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>Mongo</h3>
              </div>
            </div>
          </div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/react.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>React</h3>
              </div>
            </div>
          </div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/nextjs.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>Next</h3>
              </div>
            </div>
          </div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/skills/github1.png"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
