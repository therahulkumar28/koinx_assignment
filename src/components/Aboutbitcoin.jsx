import React from 'react';
import bitcoinimage1 from '../images/bitcoinimage1.jpeg'
import bitcoinimage2 from '../images/bitcoinimage2.jpeg'

const AboutBitcoin = () => {
  return (
    <div className="bg-white mt-8 p-8  rounded-md shadow-md ">
      <h2 className="text-3xl font-semibold mb-4">About Bitcoin</h2>

      <p className="font-bold text-lg mb-4">
        What is Bitcoin?
      </p>

      <p className="mb-4">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
      </p>

      <hr className="my-4 border-t-2 border-gray-300" />

      <h2 className="text-3xl font-semibold mb-4">Lorem ipsum dolor sit amet</h2>

      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
      </p>

      <p className="mb-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
      </p>

      <p className="mb-4">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dul
      </p>
      <hr className="my-4 border-t-2 border-gray-300" />
      <p className="font-bold text-lg mb-4">
        Already Holding Bitcoin?
      </p>
      <div className='flex flex-col m-0  md:flex-row justify-between p-2 md:m-2'>
        <Bitcoin
          image={bitcoinimage1}
          title="Calculate your Profits"
          buttonName="Check Now ->"
          backgroundColor="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]"

        />

        <Bitcoin
          image={bitcoinimage2}
          title="Calculate your tax liability"
          buttonName="Check Now ->"
          backgroundColor="bg-gradient-to-br from-[#FF9865] to-[#EF3031]"
        />

      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <p className="mb-4">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dul
      </p>
    </div>
  );
};

const Bitcoin = ({ image, title, buttonName, backgroundColor }) => {
  return (
    <div className={`flex w-full p-2 gap-x-4 justify-start mb-3 md:m-2 rounded-md shadow-md ${backgroundColor} lg:w-[410px] h-[155px]  relative`}>
      <div className="flex h-full w-32">
        <img src={image} alt="Bitcoin" className="w-full h-full object-cover  rounded-md" />
      </div>
      <div className="flex h-full flex-col ">
        <h2 className="text-1xl sm:text-2xl font-semibold  text-left mb-1">{title}</h2>
        <button className="bg-white text-sm rounded-md m-1 max-w-fit px-4 p-2 font-semibold ">{buttonName}</button>
      </div>
    </div>
  );
};


export default AboutBitcoin;
