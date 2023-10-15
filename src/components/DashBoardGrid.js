import React from 'react'
import { HiCurrencyDollar, HiDatabase, HiDocumentText, HiShoppingBag } from 'react-icons/hi';

const DashBoardGrid = () => {
    return (
        <div className='flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-200'>
                    <HiCurrencyDollar className='text-2xl text-green-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Earning</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$198k</strong>
                        <span className='text-xs text-green-500 pl-2'>&uarr;37.8%</span>
                        <span className='text-xs text-gray-500 text-sm pl-1'>this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-purple-200'>
                    <HiDocumentText className='text-2xl text-fuchsia-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Oders</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$2.4k</strong>
                        <span className='text-xs text-red-500 pl-2'>&darr;2%</span>
                        <span className='text-xs text-gray-500 text-sm pl-2'>this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-blue-200'>
                    <HiDatabase className='text-2xl text-blue-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Balance</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$2.4k</strong>
                        <span className='text-xs text-red-500 pl-2'>&darr;2%</span>
                        <span className='text-xs text-gray-500 text-sm pl-2'>this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-200'>
                    <HiShoppingBag className='text-2xl text-red-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$89k</strong>
                        <span className='text-xs text-green-500 pl-2'>&uarr;11%</span>
                        <span className='text-xs text-gray-500 pl-2'>this week</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className='bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}

export default DashBoardGrid;
