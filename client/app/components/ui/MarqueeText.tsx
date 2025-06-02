'use client';

import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white text-[rgb(255,0,0)] text-xl md:text-5xl font-bold">
      <Marquee className="py-8" speed={50}>
        DUBAI CHOCOLATE STRAWBERRY CUPCAKES AVAILABLE AT BOTH LOCATIONS! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NOW OPEN AT ARDEN FAIR MALL! ONLINE PRE-ORDERS COMING SOON!!
      </Marquee>
    </div>
  );
};

export default MarqueeText;
