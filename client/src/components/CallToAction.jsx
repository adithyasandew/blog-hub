import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Create Your Dream Website - Professional Web Development Service
            </h2>
            <p className='text-gray-500 my-2'>
                Are you ready to bring your dream website to life? Look no further! I am a seasoned web developer with a passion for turning visions into stunning, functional websites. Whether you need a personal blog, a sleek portfolio, or a robust e-commerce platform, I've got you covered.
            </p>
            <Button gradientDuoTone='pinkToOrange' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://wa.me/+94787334812" target='_blank' rel='noopener noreferrer'>
                    Contact Me
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/Website-builder.jpg.webp" />
        </div>
    </div>
  )
}
