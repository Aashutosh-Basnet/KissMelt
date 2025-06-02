import { Manrope } from 'next/font/google'


const manrope = Manrope({
  subsets: ['latin'],
})

type customOrderType = {
  title: string;
  description: string;
  price: string;
};

const CustomOrder = (props: customOrderType) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[45%] xl:w-[30%] px-2 sm:px-4 mx-2 sm:mx-3 lg:mx-6 my-2 sm:my-3 last:mb-0 text-black hover:cursor-pointer">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 pb-8 sm:pb-12 lg:pb-18 hover:bg-red-100 transition-colors duration-200">
        <div className="space-y-1 sm:space-y-2">
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight ${manrope.className}`}>{props.description}</p>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 ${manrope.className}`}>{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
