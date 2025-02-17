import Link from "next/link";

const ContacteMe = () => {
    return (
        <div className="flex flex-col gap-4 pt-5">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
                Want to chat ? Just shoot me a dm with direct question on {""}
                <Link className="text-blue-500" href="https://x.com">Twitter</Link> or email me 
                directly at {""}
                <Link  className="text-blue-500" href="maito:1ohn.rodrigues008@gmail.com">
                    john.rodrigues008@gmail.com
                </Link>
            </p>
        </div>  
    );
};

export default ContacteMe;