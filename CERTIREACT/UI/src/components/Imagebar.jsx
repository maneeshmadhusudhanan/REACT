import React from 'react'

const Imagebar = () => {
  return (
    <div>
      <h1 class=" underline text-sky-700 drop-shadow-sm italic text-center text-8xl mt-20"> 
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black-500">Certificate DApp</span>
</h1>
  <img class="size-[350px]  m-auto mt-20" src="/src/image11s.jpeg" alt=""/>

  <input class="  mr-5 drop-shadow-sm italic ml-[1000px]  " type="enter certificate id to view" placeholder="enter certificate id to view"/>
  <button  class="bg-sky-500 hover:bg-sky-700">SEARCH</button>
    </div>
  )
}

export default Imagebar

