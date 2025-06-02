import Invite from "../components/Invite";
import Values from "../components/Values";
import Image from "next/image";

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const About = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-red-600 w-screen min-h-screen">
                <div className="flex flex-col lg:flex-row px-4 lg:px-0">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <Image 
                            src="/images/about.jpg" 
                            alt="about_image"
                            height={1000} 
                            width={800}
                            className="rounded-3xl my-8 lg:m-5 object-cover"
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "90vh"
                            }}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-0">
                        <div className={`${manrope.className} w-full lg:w-[75%] lg:ml-[5vw] `}>
                            <h3 className={`text-3xl lg:text-6xl my-6 lg:my-[3vh] font-extrabold text-center lg:text-left ${playfair.className}`}>ABOUT US</h3>
                            <p className="text-3xl font-extralight my-4 lg:my-5">At Dipped, we are redefining the chocolate experience with our handcrafted caramel apples, chocolate dipped strawberries, and a variety of other delectable chocolate dipped treats. Our commitment to quality is unmatched, as we prepare our products in small batches and hand-select the finest produce to ensure every bite is a perfect indulgence.</p>
                            <p className="text-3xl font-extralight my-4 lg:my-5">Founded in 2020 in a home kitchen, Dipped is a minority and woman-owned business that has grown through passion and dedication. Our journey began with pop-up shops, leading to successful specialty leases at prominent shopping malls such as Westfield San Francisco.</p>
                            <p className="text-3xl font-extralight my-4 lg:my-5">At Dipped, we offer our gourmet treats at competitive prices. Our team is extensively trained to uphold our high standards, ensuring that each product you receive is made with care and precision.</p>
                            <p className="text-3xl font-extralight my-4 lg:my-5 mb-8">Discover the Dipped difference and indulge in our exquisite range of chocolate-dipped delights. We invite you to experience the passion, dedication, and exceptional quality that sets us apart</p>
                        </div>
                    </div>
                </div>
                <Values />
                <Invite/>
            </div>
        </div>
    )
}

export default About;