import Link from "next/link";
import InputSearch from "./inputSearch";
const Navbar = () => {
    return (
        <header className="bg-neutral-700 pt-5 pb-5">
            <nav className="flex items-center justify-between px-4 py-2">
                <Link href="/" className="text-4xl font-bold text-white leading-none">Udononime</Link>
                <InputSearch />
            </nav>
        </header>
    )
}

export default Navbar;