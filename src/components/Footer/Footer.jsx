import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-32">
            <div className='grid grid-cols-12 gap-5 pb-12 border-b-2 border-[#ffffffB3]'>
                <div className="col-span-4">
                    <h3 className="font-extrabold text-white text-3xl">CareerHub</h3>
                    <p className="text-slate-200 w-[300px] py-5">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className="text-white text-3xl flex gap-4">
                        <a href="https://www.facebook.com" target="/black"> <FaFacebook /> </a>
                        <a href="https://www.x.com/" target="/black"> <FaTwitter /> </a>
                        <a href="https://www.instagram.com/" target="/black"> <FaInstagramSquare /> </a>
                    </div>
                </div>
                <div className="col-span-2 text-white flex flex-col gap-4">
                    <h3 className=' font-black text-2xl'>Company</h3>
                    <p className="text-[#ffffffB3]">About Us</p>
                    <p className="text-[#ffffffB3]">Work</p>
                    <p className="text-[#ffffffB3]">Latest News</p>
                    <p className="text-[#ffffffB3]">Careers</p>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <h3 className='text-white font-black text-2xl '>Product</h3>
                    <p className="text-[#ffffffB3]">About Us</p>
                    <p className="text-[#ffffffB3]">Work</p>
                    <p className="text-[#ffffffB3]">Latest News</p>
                    <p className="text-[#ffffffB3]">Careers</p>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <h3 className='text-white font-black text-2xl '>Support</h3>
                    <p className="text-[#ffffffB3]">About Us</p>
                    <p className="text-[#ffffffB3]">Work</p>
                    <p className="text-[#ffffffB3]">Latest News</p>
                    <p className="text-[#ffffffB3]">Careers</p>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <h3 className='text-white font-black text-2xl '>Contact</h3>
                    <p className="text-[#ffffffB3]">About Us</p>
                    <p className="text-[#ffffffB3]">Work</p>
                    <p className="text-[#ffffffB3]">Latest News</p>
                    <p className="text-[#ffffffB3]">Careers</p>
                </div>
            </div>
            <div className="flex justify-between pt-12">
                <p className="text-[#ffffffB3]">@2023 CareerHub. All Rights Reserved</p>
                <p className="text-[#ffffffB3]">Powered by <strong>CareerHub</strong></p>
            </div>
        </div>
    );
};

export default Footer;