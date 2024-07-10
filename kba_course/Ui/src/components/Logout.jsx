import React from 'react'

const Logout = () => {

    const Logout = async () => {
        try{
            const res = await fetch ('/api/logout')
            if(res.ok){
                toast.sucess('logout sucess')
            navgate ('/')
            }
    
        }catch(error){
    
            toast.error('something went wrong')
        }}
    }
    
  return (
    <div>Logout</div>
  )


export default Logout