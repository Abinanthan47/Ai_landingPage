import { BsDot } from "react-icons/bs"
import { LuPlusCircle } from "react-icons/lu"
import { PiDotFill } from "react-icons/pi"
import { SiGooglebard } from "react-icons/si"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between outline-none text-white p-5 gap-2">
        <div className="bg-primary p-3 rounded-full ">
        <SiGooglebard className="text-black text-xl "  />
        </div>
        <div className=" flex items-center justify-center text-lg rounded-3xl bg-[#171717] backdrop-blur-lg px-20 py-2 gap-5 transition-all ease max-sm:hidden ">
            <a href="#free-trail" className="hover:text-primary"> Free Trail</a>
            <a href="#aihub" className="hover:text-primary"> AiHUB</a>
            <a href="#services" className="hover:text-primary"> Services</a>
            <a href="#discover"className="hover:text-primary"> Discover</a>
            <div><PiDotFill className="text-xl text-primary " /> </div>
            <p>Ai For All</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-lime-400 to-[#a3e635] text-black text-lg px-4 py-2 rounded-3xl ">
            <a href="#">Generate</a>
            <LuPlusCircle className="text-2xl"/>
        </div>
    </nav>



  )
}

export default Navbar

