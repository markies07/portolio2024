 import React from 'react'
 import profile from './images/profile.jpg'
 import { MdOutlineEmail } from "react-icons/md";
 import { IoMdPhonePortrait } from "react-icons/io";
 import { IoLocationSharp } from "react-icons/io5";
 import { FaSquareFacebook } from "react-icons/fa6";
 import { AiFillTikTok } from "react-icons/ai";
 import { TiSocialInstagram } from "react-icons/ti";

 function MyInfo() {
   return (
     <div className='bg-[#313131] shrink-0 order-2 lg:order-1 relative w-[97%] sm:w-[20rem] h-[48rem] rounded-3xl flex flex-col py-14 px-8'>
        {/* NAME */}
        <div className='flex flex-col items-center'>
            <img className='w-36 rounded-3xl mb-9' src={profile} alt="" />
            <p className='text-2xl text-center '>Mark Christian Naval</p>
            <p className='mt-5 bg-[#454545] text-sm px-7 py-2 rounded-lg'>Web Developer</p>
        </div>
        <hr className='border-zinc-500 my-10' />
        {/* INFO */}
        <div className='flex flex-col gap-10 w-60'>
            <div className='flex w-full'>
                <div className='bg-[#454545] flex justify-center items-center p-3 rounded-xl mr-3'>
                    <MdOutlineEmail className='text-red-500' size={25}/>
                </div>
                <div className='w-full overflow-hidden '>
                    <p className='font-light'>EMAIL</p>
                    <p title='markchristiannaval07@gmail.com' className='text-sm overflow-hidden text-ellipsis'>markchristiannaval07@gmail.com</p>
                </div>
            </div>
            <div className='flex  items-center'>
                <div className='bg-[#454545] flex justify-center items-center p-3 rounded-xl mr-3'>
                    <IoMdPhonePortrait className='text-red-500' size={25} />
                </div>
                <div>
                    <p className='font-light'>PHONE</p>
                    <p className='text-sm '>+63 916 150 9934</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#454545] flex justify-center items-center p-3 rounded-xl mr-3'>
                    <IoLocationSharp className='text-red-500' size={25} />
                </div>
                <div>
                    <p className='font-light'>LOCATION</p>
                    <p className='text-sm'>General Trias Cavite, Philippines</p>
                </div>
            </div>
        </div>
        {/* FOOTER */}
        <div className='absolute bottom-5 gap-7 left-0 flex items-center justify-center w-full'>
            <FaSquareFacebook className='cursor-pointer' size={30}/>
            <AiFillTikTok className='cursor-pointer' size={34}/>
            <TiSocialInstagram className='cursor-pointer' size={34}/>
        </div>
        
     </div>
   )
 }
 
 export default MyInfo

