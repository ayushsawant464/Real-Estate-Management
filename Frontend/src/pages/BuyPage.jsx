import React from 'react'
import RealEstateCard from '../components/RealEstateCard'
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
const data = [
    {
        image: House1,
        title: "Ghar ahe maja lavdaya",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "200"
    }, 
    {
        image: House2,
        title: "Ghat",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "300"
    },
    {
        image: House2,
        title: "Ghat",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "300"
    },
    {
        image: House2,
        title: "Ghat",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "300"
    },
    {
        image: House2,
        title: "Ghat",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "300"
    },
    {
        image: House2,
        title: "Ghat",
        location: "Mumbai",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
        price: "300"
    }
]

const BuyPage = () => {
  return (
    <>
        <div className='flex flex-wrap justify-evenly w-full my-16 mx-auto px-36'>
            {
                data.map((realEstate, index) => (
                    <RealEstateCard key={index} realEstate={realEstate} />
                ))
            }
        </div>
    </>
  )
}

export default BuyPage;