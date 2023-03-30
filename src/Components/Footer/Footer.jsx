import React from 'react'
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
// import Strape from './Strape'

export default function Footer() {
    return (<>
        {/* <div className='strape shadow-md h-[30px] w-full'><img className='' src={bg2} alt="" /></div> */}
        {/* <Strape/> */}

        <footer>
        <div className='h-[1px] mb-[12px] bg-[#353535]'/>
        <div className='h-[1px] bg-[#353535]'/>

        
            
            <div className='p-20 pl-[6rem] bg-black text-gray-500 outline-red-500'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-column-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div>
                            <h4 className='pb-4 font-bold text-xl'>OPENING HOURS</h4>
                            <table className="table-auto border-collapse  border border-slate-400">

                                <tbody >
                                    <tr>

                                        <td className='border border-slate-800 p-2'>MON</td>
                                        <td className='border border-slate-300 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-300 p-2'>TUE</td>
                                        <td className='border border-slate-800 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-800 p-2'>WED</td>
                                        <td className='border border-slate-300 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-300 p-2'>THR</td>
                                        <td className='border border-slate-800 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-800 p-2'>FRI</td>
                                        <td className='border border-slate-300 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-300 p-2'>SAT</td>
                                        <td className='border border-slate-800 p-2'>9AM-8PM</td>
                                    </tr>
                                    <tr>

                                        <td className='border border-slate-800 p-2'>SUN</td>
                                        <td className='border border-slate-300 p-2'>9AM-8PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4 font-bold text-xl'>LOCATION</h4>
                            <p className='pb-4 text-gray-500'>A123 Find city <br></br>sambalpur, PB 12345 <br></br> India </p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4 font-bold text-xl'>JOIN WITH US</h4>
                            {/* <form className='flex flex-row flex-wrap'>
                            <input type="text" className='p-2 text-gray-500 w-2/3 focus:green-500' placeholder='abc@gmail.com' />
                            <button className='p-2 w-1/3 bg-green-500 text-white hover:bg-green-600'>Subscribe</button>
                        </form> */}

                            <div className=' text-xl text-white mb-2'>
                                <a href="https://wa.me/8328867593" className='w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2 '><FaWhatsapp /></a>
                                <a href="http://" className='w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2'><FaTwitter /></a>
                                <a href="http://" className='w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2'><FaLinkedin /></a>
                                <a href="http://" className='w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2'><FaInstagram /></a>
                                <a href="http://" className='w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 mx-1 inline-block pt-2 pl-2'><FaFacebook /></a>
                            </div>

                            <div className='flex flex-col pt-5'>
                                <h4 className=' pb-4 font-bold text-xl'>CONTACT US</h4>
                                <div className='p-2 pl-5 w-1/2 bg-black outline	 outline-white text-white hover:bg-gray-700 cursor-pointer rounded-md'>Call 7876678887</div>

                            </div>

                        </div>
                        <div className='mb-5 pl-[10rem] '>
                            <h4 className='pb-4  font-bold text-xl'>USEFUL LINKS</h4>
                            <ul className='text-gray-500 cursor-pointer '>
                                <li className='pb-4 hover:text-white '>Home</li>
                                <li className='pb-4 hover:text-white'>About</li>
                                <li className='pb-4 hover:text-white'>Services</li>
                                <li className='pb-4 hover:text-white'>Works</li>
                            </ul>
                        </div>
                        {/* <div className='mb-5'>
                            <h4 className='pb-4 font-bold text-xl'>CONTACT US</h4>
                            <button className='p-2 w-1/2 bg-green-500 text-white hover:bg-green-700 rounded-md'>Call 7676543218</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full bg-black text-gray-500 px-6'>
                <div className=' wid-hr h-px bg-white'></div>

                    <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center'>
                        <div className='text-center 	'>
                            {/* <div className=''>
                                &copy <strong><span>COMPANY</span></strong>.All right Reserved
                            </div> */}
                            <h2>&copy;Studio Shape and Scape. All right Researved</h2>
                        </div>
                        {/* <div className='text-center text-xl text-white mb-3'>
                            <a href="http://" className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 mx-1 inline-block pt-3 pl-2 '><FaWhatsapp /></a>
                            <a href="http://" className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 mx-1 inline-block pt-3 pl-2'><FaTwitter /></a>
                            <a href="http://" className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 mx-1 inline-block pt-3 pl-2'><FaLinkedin /></a>
                            <a href="http://" className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 mx-1 inline-block pt-3 pl-2'><FaInstagram /></a>
                            <a href="http://" className='w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 mx-1 inline-block pt-3 pl-2'><FaYoutube /></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
