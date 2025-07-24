import Link from "next/link";

const Header = ({title, link, linkTitle}) => {
    return (
        <div className="flex justify-between items-center px-4 py-2 mb-10 mt-8 bg-white shadow">
        <h1 className="md:text-2xl text-xl font-semibold">{title}</h1>
        <Link href={link} className="md:text-xl text-md text-blue-600 hover:underline">{linkTitle}</Link>
      </div>
    )
}

export default Header;

