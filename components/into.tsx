"use-client";

import Image from "next/image";

const Into = () => {
    return (
        <div className="flex flex-col-reverse items-center lg:gap-4 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4 w-full mt-4 lg:mt-0 lg:w-9/12">
                <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-start">Hi! I am John Rodrigues</h1>
                <p className="text-base text-gray-500 dark:text-gray-300">
                    Seasoned  Fullstack Engineer with 4+ years in startups. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet dignissimos, praesentium aliquam inventore ullam reiciendis quae dolor modi unde nobis? Sed enim laborum tempora eius laboriosam iure cum necessitatibus saepe error, mollitia veniam esse et beatae eaque consequuntur provident consectetur ipsam aliquid a.
                </p>
            </div>
            <div className="flex justify-between">
                <Image className="rounded-full border border-gray-100 h-36 w-36" src="/image/logo.jpg" alt="Yatharth" width={100} height={100}/>
            </div>
        </div>  
    );
};

export default Into;