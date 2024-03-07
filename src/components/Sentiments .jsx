import icon from '../assets/i.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import { useState } from 'react';
const Sentiments = () => {
    const [circleValue, setCircleValue] = useState(76)
    return (
        <div className="mt-8 bg-white rounded-md p-10 flex flex-col">
            <h1 className="text-xl font-bold">Sentiment</h1>
            <div className="flex font-semibold text-items-center mt-4">
                Key Events <img className="w-4 h-4 m-1.5" src={icon} alt="icon" />
            </div>
            <div className="flex flex-col justify-between lg:flex-row">
                <Cart
                    icon={c1}
                    title="Your title Here"
                    description="In the vast expanse of the cosmos, where countless galaxies spiral through the cosmic ballet, each star, like a shimmering beacon, tells a story of celestial wonders and astronomical phenomena, weaving a tapestry of cosmic evolution, from the birth of galaxies in the primordial soup of the "
                    bgColor="bg-blue-50"
                    imgColor="bg-blue-500"
                />
                <Cart
                    icon={c2}
                    title="Your title  Here"
                    description="In the vast expanse of the cosmos, where countless smic ballet, each star, like a shimmering beacon, tells a story of celestial wonders and astronomical phenomena, weaving a tapestry of cosmic evolution, from the birth of galaxies in the primordial soup of the "
                    bgColor="bg-green-50"
                    imgColor="bg-green-500"
                />
            </div>
            <div>
                <div className="flex items-center font-semibold mt-4">
                    Analyst Estimates
                    <img className="w-4 h-4 m-1.5" src={icon} alt="icon" />
                </div>
                <div className="flex items-center">
                    <div className="w-24 h-24 p-8 m-4 rounded-full bg-green-100 flex items-center justify-center relative" >
                        <span className="text-lg text-green-600 font-bold">{circleValue}%</span>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <div className="flex items-center">
                            <span className="text-gray-400   m-4 rounded-sm">Buy</span>
                            <div className="bg-green-600 w-96 h-3 m-4 rounded-sm"></div>
                            <span className="text-gray-400 ">76 %</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-400  m-4 rounded-sm">Hold</span>
                            <div className="bg-gray-500 w-8 h-3 m-3  rounded-sm"></div>
                            <span className="text-gray-400  ">8%</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-400  m-4 rounded-sm">Sell</span>
                            <div className="bg-red-500 w-32 h-3 m-5 rounded-sm"></div>
                            <span className="text-gray-400 ">16%</span>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

const Cart = ({ icon, title, description, bgColor, imgColor }) => {
    return (
        <div className={`mt-4 m-2 lg:m-2 p-[18px] w-[400px] h-[220px]  flex flex-col rounded-[12px] ${bgColor}`}>
           <div className={`w-[50px] h-[50px] m-2 rounded-full  ${imgColor}`}> 
           <img
           className={`w-[28px] h-[28px] m-2 `}
           src={icon}
           alt="icon"
       />
           </div>
            <div className="ml-2  w-[300px]  flex  flex-col overflow-hidden text-left">
                <div className=" w-[300px] h-[40px] text-[14px] line-height-[20px]  font-semibold">{title}</div>
                <div className="text-[#3E5765] mb-2">{description}</div>
            </div>
        </div>
    );
};

export default Sentiments;
