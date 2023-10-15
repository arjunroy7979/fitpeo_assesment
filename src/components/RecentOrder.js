import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const recentOrderData = [
    {
        name: "Abstract 3D",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
        stock: 32,
        price: 45.99,
        total_sales: 20
    },
    {
        name: "Abstract 3D",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
        stock: 32,
        price: 45.99,
        total_sales: 20
    },
    {
        name: "Abstract 3D",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
        stock: 32,
        price: 45.99,
        total_sales: 20
    },

]
const RecentOrder = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 ">
            <div className='flex justify-between pt-2'>
                <strong>Product Sell</strong>
                <div className='flex gap-4'>
                    <div className='relative'>
                        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                        <input type='search' placeholder=' Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-gray-300 rounded-lg pl-11 pr-4 ' />
                    </div>
                    <select className='text-sm focus:outline-none active:outline-none h-10 w-[9rem] border border-gray-300 rounded-lg pl-4 '>
                        <option>Last 30 days</option>
                        <option>Last 20 days</option>
                        <option>Last 10 days</option>
                        <option>Last 05 days</option>
                    </select>
                </div>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th className='text-center'>Stock</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData && recentOrderData.map((order) => {
                            return (
                                <tr key={order.key}>
                                    <td className='flex gap-5'>
                                        <div>
                                            <img src={order.img} alt='abst' className='w-[7rem] h-[4rem] rounded-lg ' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>{order.name}</div>
                                            <div>{order.details}</div>
                                        </div>
                                    </td>
                                    <td className='text-center'>{order.stock} in stock</td>
                                    <td className='text-center'><strong>$ {order.price}</strong></td>
                                    <td className='text-center'>{order.total_sales}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrder;
