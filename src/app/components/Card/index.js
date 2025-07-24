// import style from '@/app/components/Card/Card.module.css'

import Image from "next/image";
import Link from "next/link";

const Card = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data.map((data) => {
                return (
                    <Link href={`/${data.mal_id}`} className="cursor-pointer" key={data.mal_id}>
                        <Image 
                            src={data.images?.webp?.image_url || "/placeholder.png"} 
                            alt={data.title || ".."} 
                            width={350} 
                            height={350} 
                            className="object-cover"
                        />
                        <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
                    </Link>
                )
            })}
        </div>
            
       
    );
}

export default Card;