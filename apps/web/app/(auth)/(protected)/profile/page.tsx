'use client'
import React, { useEffect } from 'react'


const page = () => {
    useEffect(()=>{
        const afun=async()=>{
            const response=await fetch('/api/blogs',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'to_get':''
                },
                
            })
            if(response.ok){
                const data=await response.json()
                console.log(data)
            }
        }
        afun()

    //     const afun=async()=>{
    //         const response=await fetch('/api/blogs',{
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 authorid:1,
    //                 title:"new blog",
    //                 content:"this is a new blog",
    //                 author:"me"
    //         })
            
    //         }
    //     )
    //     if(response.ok){
    //         const data=await response.json()
    //         console.log(data)
    //     }
        
    // }
    // afun()
})
  return (
    <div>
      hi
    </div>
  )
}

export default page
