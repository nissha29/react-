// import React from 'react'

import { useState } from "react"
import VectorCards from "./components/VectorCards"

function App2() {

  const [char, setChar] = useState("")
  const [des, setDes] = useState("")

  const [cards,setCards] = useState([
    {
        name: "Doraemon",
        imageURL: "https://i.pinimg.com/236x/76/e4/86/76e4866585df42eb3489f81c0c673e65.jpg",
        desc: "🕊️ me hu ek udta robot doraemon",
    },
    {
        name: "Nobita",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxdQgNyIZOUYAr9UcJOkdQrS3pnku1QfLyQ&s",
        desc: "😁 Doraemon pls ek gadget dedo",
    },
    { 
        name: "Shizuka",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDBmcfBgtfSZpdgZ9hVuMRYFleyQxrFej3w&s",
        desc: "🤍 Nobita mera sab se acha dost hai",
    },
    {
        name: "Sunio",
        imageURL: "https://wallpapercave.com/wp/wp6552156.png",
        desc: "😏 mere pas bht pesa he",
    },
    {
        name: "Gian",
        imageURL: "https://tiermaker.com/images/chart/chart/doraemon-characters-tierlist-50437/img0791png.png",
        desc: "🥸 mera gala he bht surila, meri aawaz sunke log ho jate he madhosh",
    },
    {
        name: "Dekisugi",
        imageURL: "https://i.pinimg.com/736x/20/55/aa/2055aac1ee9e16c85a0d0d4a840d5055.jpg",
        desc: "😉 m intelligent guy",
    },
  ])

  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
        {
            cards.map( (item, index) => {
                return (
                    <VectorCards 
                        key = {index}
                        name = {item.name}
                        imageURL = {item.imageURL}
                        desc = {item.desc}
                    />
                )

            })
        }

        <div className="flex flex-col gap-7 justify-center items-center">
            <input 
                onChange={(e) => setChar(e.target.value)}
                type="text" 
                placeholder="Enter character Name....."
                className="w-60 h-12 bg-transparent px-3 border-[#141515] border-[3px] rounded-lg text-[18px] outline-none"
            />
            <input 
                onChange={(e) => setDes(e.target.value)}
                type="text" 
                placeholder="Enter Description....."
                className="w-60 h-12 bg-transparent px-3 border-[#141515] border-[3px] rounded-lg text-[18px] outline-none"
            />
            <button 
                onClick={() => {
                    setCards((prev) => {
                        return prev.map( (item) => {
                            if(item.name == char){
                                return {
                                    name: item.name,
                                    imageURL: item.imageURL,
                                    desc: des,
                                }
                            }
                            else{
                                return item
                            }
                        })
                    })
                }}
                className="bg-[#00aaff] w-40 h-11 rounded-lg text-[20px] font-semibold"
            > Change
            </button>
        </div>

    </div>
  )
}

export default App2
