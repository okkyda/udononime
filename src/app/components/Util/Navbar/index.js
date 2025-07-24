import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-neutral-700 pt-5 pb-5">
            <nav className="flex items-center justify-between px-4 py-2">
                <Link href="/" className="text-4xl font-bold text-white leading-none">Udononime</Link>
                <input
                    placeholder="Cari Anime Kamu.."
                    className="bg-blue-50 rounded px-2 py-1 text-sm outline-none"
                    style={{ maxWidth: 180 }}
                />
            </nav>
        </header>
    )
}

export default Navbar;