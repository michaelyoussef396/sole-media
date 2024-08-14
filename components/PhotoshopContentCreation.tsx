'use client'

import Image from "next/image"

const PhotoshopContentCreation = () => {
    return (   
    <div className="text-white">
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-wedgewood to-baliHai">
                Photoshop & Content Creation <br /> for Social Media
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                Creating stunning visuals and engaging content for your social media channels to help your brand stand out.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
            <div className="grid gap-4">
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" 
                        alt="Photoshop example 1"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" 
                        alt="Photoshop example 2"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" 
                        alt="Photoshop example 3"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" 
                        alt="Photoshop example 4"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" 
                        alt="Photoshop example 5"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" 
                        alt="Photoshop example 6"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" 
                        alt="Photoshop example 7"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" 
                        alt="Photoshop example 8"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" 
                        alt="Photoshop example 9"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" 
                        alt="Photoshop example 10"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" 
                        alt="Photoshop example 11"
                    />
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        priority
                        className="h-auto max-w-full rounded-lg" 
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" 
                        alt="Photoshop example 12"
                    />
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default PhotoshopContentCreation;
