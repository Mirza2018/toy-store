import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Toys from '../Toys/Toys';

const TabSection = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://toys-store-server.onrender.com/toy')
            .then(res => res.json())
            .then(data => {
                const remaning = data.filter(d => d.category == 1)
                setToys(remaning)

            }
            )

    }, [])


    const handleClick = n => {
        fetch('https://toys-store-server.onrender.com/toy')
            .then(res => res.json())
            .then(data => {

                const remaning = data.filter(d => d.category == n)
                setToys(remaning)

            })
    }
    console.log(toys);

    return (
        <Tabs className='m-12'>


            <TabList className='flex gap-10 justify-center font-extrabold '>


                <Tab onClick={() => handleClick(1)} className=' bg-orange-400 border rounded-lg  px-7 py-2 border-gray-900'>Taddy Bear toys</Tab>
                <Tab onClick={() => handleClick(2)} className='bg-orange-400 border rounded-lg  px-7 py-2 border-gray-900'>Dinosaur Toys</Tab>
                <Tab onClick={() => handleClick(3)} className=' bg-orange-400 border rounded-lg  px-7 py-2 border-gray-900'>Unicorn Toys</Tab>

            </TabList>


            <TabPanel className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-10 '>
                {
                    toys.map(toy => <Toys key={toy._id}
                        toy={toy}
                    ></Toys>)
                }
            </TabPanel>
            <TabPanel className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-10 '>
                {
                    toys.map(toy => <Toys key={toy._id}
                        toy={toy}
                    ></Toys>)
                }
            </TabPanel>
            <TabPanel className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-10 '>
                {
                    toys.map(toy => <Toys key={toy._id}
                        toy={toy}
                    ></Toys>)
                }
            </TabPanel>

        </Tabs>
    );
};

export default TabSection;