import React from 'react'
import Chart from 'react-apexcharts'

const BuyerProfileChart = () => {
   
    return (
        <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col">
            <div className='flex flex-col'>
                <strong className="font-bold">Customers</strong>
                <span className='text-xs text-gray-500 text-sm '>Customers that buy products</span>
            </div>
            <div className="mt-3 w-full flex-1 text-xs ">
                <Chart
                    type="donut"
                    width={380}
                    height={300}
                    series={[10, 40, 20]}

                    options={{
                        labels: ['USA', 'IND', 'PAK'],
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            label: "Total New Customers",
                                            fontSize: 15,
                                            color:'red'
                                        }
                                    }
                                }
                            }
                        },
                        dataLabels: {
                            enabled: false,
                        }
                    }}

                />
            </div>
        </div>
    )
}

export default BuyerProfileChart;
