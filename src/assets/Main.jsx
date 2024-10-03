import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Main = () => {
  return (
    <div>
        <div className="h-screen flex flex-wrap justify-center items-center text-green-500">
            <div className="w-screen lg:w-1/2 rounded-md border border-opacity-50 border-blue-500 py-16 px-8 lg:py-20 lg:px-6 mx-10">
                <h1 className="font-sans text-2xl lg:text-6xl font-bold pb-5">
                    COMING SOON
                </h1>
                <p className="font-sans text-sm lg:text-xl font-bold">
                    We&apos;re thrilled to announce the launch of our website!
                    Stay tuned for more updates and don&apos;t forget to check out our social media accounts.
                </p>
                <div className="flex space-x-4 pt-4">
                    <IconContext.Provider value={{
                        size: "2em"
                    }}>
                    <a href="https://www.tiktok.com/@newless.store?is_from_webapp=1&sender_device=pc" className="hover:text-blue-700" target="blank">
                        <FaTiktok />
                    </a>
                    <a href="https://www.instagram.com/newless.market" className="hover:text-blue-700" target="blank">
                        <FaInstagram />
                    </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </div>
  )
}
