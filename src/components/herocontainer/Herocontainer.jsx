import { useState, useEffect } from 'react';

const lgImageUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1729515581/yummy_image_olae3n.png";
const mdImageUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1730150162/Rectangle_1_2_dggxr2.png";
const smImageUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1730150162/Rectangle_1_3_r8ixvi.png";

const Herocontainer = () => {
  const [backgroundImage, setBackgroundImage] = useState(lgImageUrl);

  // Function to update the background image based on window width
  const updateBackgroundImage = () => {
    if (window.innerWidth >= 1024) {
      setBackgroundImage(lgImageUrl);
    } else if (window.innerWidth >= 800) {
      setBackgroundImage(mdImageUrl);
    } else {
      setBackgroundImage(smImageUrl);
    }
  };

  // Update background image on initial render and window resize
  useEffect(() => {
    updateBackgroundImage(); // Set initial background image

    // Add event listener for window resize
    window.addEventListener('resize', updateBackgroundImage);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

  return (
    <div
      className='herocontainer bg-cover  lg:mt-12 relative w-full h-[763px]  md:h-[574px] bg-center lg:h-[605px] text-white items-center'
      style={{
        backgroundImage: `url(${backgroundImage})`  // Use backgroundImage state here
      }}
    >
      <div className='h-[260px] pl-[24px] pt-[70px] md:pl-[24px] lg:pl-[80px] text-left w-[323px] md:w-[322px]  md:h-[314px] md:pt-[125px] lg:w-[433px] lg:h-[329px]'>
        <h4 className=' text-[44px] h-[135px] leading-[52.8px] mb-[30px]'>Taste Your Heart in Every Bite You Take</h4>
        <h4 className='leading-[27px] mb-4 text-xl'>
          Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. 
          Odio suspendisse ac aliquam eget condimentum. Magna commodo condimentum urna rhoncus.
        </h4>
        <button className='text-[20px] bg-customOrange rounded-[10px] p-[10px] w-[140px]'>Order Now</button>
      </div>
    </div>
  );
};

export default Herocontainer;
