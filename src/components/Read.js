import React,{useState} from 'react'

const Read = ({items}) => {
    
    const handleDelete = (index)=>{
        items.filter((_,i)=>{
            if(i == index){
                return false
            }
            return i
        })
    }
    const handleUpdate = (index)=>{
        // const updateTitle = prompt("enter new title") 
        // const updateDes = prompt("enter new Description")
        // items[index][0] = updateTitle
        // items[index][1] = updateDes


    }
    return (
    <div>
        <ul>
            {items.map((item,i)=>{
                return (
                <>
                  {<li key={i}>{item[0]} {item[1]}</li>}
                  <button className='text-2xl bg-blue-500 m-2' onClick={handleUpdate(i)}>Update</button>
                  <button className='text-2xl bg-blue-500 m-2' onClick={handleDelete(i)}>Delete</button>
            
                </>
)
            })}
        </ul>
    </div>
  )
}

export default Read