import React,{useState} from 'react'
import Read from "./Read"


const Create = () => {
    const [items,setItems] = useState([[]])
    const [newitemTitle,setNewitemTitle] = useState("")
    const [newitemDescrip,setNewitemDescrip] = useState("")

    const handleAddItem = ()=>{

            if(newitemTitle.trim() === "") {
                return
            }
                   
             
            setItems([...items,[newitemTitle,newitemDescrip]])

            
                
    }

    const handleTitle = (title)=>{
        return setNewitemTitle(title)
    }

    const handleDes = (des)=>{
       return setNewitemDescrip(des)
    }


  return (
    <>
        <p>ADD NEW ITEM</p>
        <input
            type='text'
            placeholder='Add Item title'
            className='text-2xl boadered-2'
            onChange={(e)=>handleTitle(e.target.value)}
        />
        <input
            type='text'
            placeholder='Add Item Description'
            className='text-2xl boadered-2'
            onChange={(e)=>{handleDes(e.target.value)}}
        />

        <button className='text-2xl bg-blue-500 border-2 border-black text-white' onClick={()=>handleAddItem()}>ADD ITEM</button>

            <Read items={items}></Read>

    </>



)
}
export default Create
