import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'


import home2 from './../../assert/Images/home2.jpg'
function Features() {
  return (
    <div>

<div className="w-full bg-gradient-to-r from-gray-900 to-blue-700 h-20 text-white flex justify-start items-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-bold">Features</h1>
      </div>
    </div>

    {/* Breadcrumb Section */}
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="h-8 px-4 bg-slate-300 rounded-b flex justify-start items-center space-x-2 sm:space-x-5">
        <Link >
          <IoMdHome className="cursor-pointer" style={{ width: '20px', height: '20px' }} />
        </Link>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">page</span>
        <IoIosArrowForward />
        <span className="cursor-pointer hover:underline text-sm sm:text-md">Features</span>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="w-full bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">
      <div className='bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12'>
  <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl transform transition-all duration-500 overflow-hidden">
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6">Features of Real Estate Investing</h1>
      
      <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed space-y-3 sm:space-y-4 mb-6">
        <strong>Definition:</strong> Real estate investing refers to the purchase of property as an investment to generate income rather than using it as a primary residence. In simple terms, it can be understood as any land, building, infrastructure, and other tangible property which is usually immovable but transferable.
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 mt-6 mb-4">Features of Real Estate Investing</h2>
      <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed space-y-3 sm:space-y-4 mb-6">
        When we talk about real estate, we can say that it requires a lot of foresightedness and capital investment to expect fruitful returns. Let us now understand the characteristics of real estate investment one by one:
      </p>

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">1. Tangible</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Real estate or properties are one of those investments which have a physical existence and can be touched and seen.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">2. Immune to Inflation</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            When economic inflation creates a negative impact on the value of other investments, investing in real estate is a fruitful option. It is the only investment which results in value appraisal in adverse situations.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">3. Allows Use of Leverage</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            The financial institutions are attracted towards funding for real estate because of its real or physical existence.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">4. Uncertain Maturity Period</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Real estate investment does not have any fixed maturity period like in other investments such as fixed deposits and bonds. It is the owner who decides whether to hold the property or sell it.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">5. Value Enhancement</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Investing in properties can provide dual benefit to the investors. On the one hand, real estate generates rental income, and on the other hand, its value keeps on increasing in the long run.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">6. Low Liquidity</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            One of the essential features of real estate is that it is a capital asset. Therefore, it cannot be frequently bought or sold like stocks or equity.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">7. Needs Management</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Real estate investment is buying a physical asset which involves the expenditure on its maintenance. The investor also needs to manage the source of income so generated.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">8. Universally Acceptable as Collateral</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Financing the properties by taking them as collateral is very common among the banks and other financial institutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">9. Profitable Even During Recession</h3>
          <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed">
            Real estate investments have been considered as one of the safest investments. If done wisely, they yield profit or generate income even at the time of recession.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>

        
    </div> 


    </div>
  )
}

export default Features