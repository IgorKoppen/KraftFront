import Image from "next/image";
import Logo from "../../public/LogoKraftv2 1.svg";
import profilePic from "../../public/user-interface1.png";

export default function Navbar(){
    return(
        <nav className="navbar bg-MainColor ">
            <div className="flex-1">
                <a><Image src={Logo} alt={"Logo"} width={325} height={82} /></a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={profilePic} alt={"test"} width={60} height={60}/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}