import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts';
const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 5000
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9000
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'July',
        Expense: 3490,
        Income: 6000
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Sep',
        Expense: 2780,
        Income: 8708
    },
    {
        name: 'Oct',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Nov',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Dec',
        Expense: 3490,
        Income: 7300
    }
]

const TranscationChart = () => {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col flex-1">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <strong className="font-bold">Overview</strong>
                    <span className='text-xs text-gray-500 '>Monthly Earning</span>
                </div>
                <div>
                    <select className='focus:outline-none text-xs text-gray-500 bg-gray-50 h-6 rounded-sm'>
                        <option>Quarterly</option>
                        <option>Monthly</option>
                        <option>Days</option>
                        <option>Yearly</option>
                        <option>weekly</option>
                    </select>
                </div>
            </div>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <Bar dataKey="Income" fill="#e5e7eb" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TranscationChart;
