import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import PrimaryBtn from "../PrimaryBtn";


const Jobs = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary}=job;
    return (
        <div className='border border-subtite rounded-lg p-10 inline-flex '>
            <div>
                <img src={logo} alt="" />
                <h3 className="font-extrabold text-2xl mt-8 mb-2">{job_title}</h3>
                <p className="text-subtite text-xl font-semibold">{company_name}</p>
                <div className="flex items-center gap-4 my-4">
                    <div class="from-Start to-End bg-gradient-to-r inline-flex p-[2px] rounded-lg">
                        <h3 className="bg-white rounded-md w-full h-full px-5 py-3 font-extrabold "><span className="text-transparent from-Start to-End bg-clip-text bg-gradient-to-r">{remote_or_onsite}</span></h3>
                    </div>
                    <div class="from-Start to-End bg-gradient-to-r inline-flex p-[2px] rounded-lg">
                        <h3 className="bg-white rounded-md w-full h-full px-5 py-3 font-extrabold "><span className="text-transparent from-Start to-End bg-clip-text bg-gradient-to-r">{job_type}</span></h3>
                    </div>

                </div>
                <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <SlLocationPin />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <AiOutlineDollar />
                        <p>salary: {salary}</p>
                    </div>
                </div>
                <PrimaryBtn name={'View Details'}></PrimaryBtn>
            </div>

        </div>
    );
};

export default Jobs;