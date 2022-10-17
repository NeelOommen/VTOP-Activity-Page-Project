import { useState } from "react";
import Image from "next/image";

export default function BlurImage({ image }){
    const [isLoading, setLoading] = useState(true);

    return(
            <div className="realtive aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 group transform hover:scale-110 transition duration-300">
                <Image
                    alt=""
                    src={image.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    className={
                       () => 'group-hover:opacity-75 duration-700 ease-in-out ' + isLoading?'grayscale blur-2xl scale-110':'grayscale-0 blur-0 scale-100'
                    }
                    onLoadingComplete={() => {setLoading(false)}}
                />
            </div>
    );
}