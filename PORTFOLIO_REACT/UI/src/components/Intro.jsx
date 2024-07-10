import React from 'react'

const Intro = () => {
  return (
    <div>
<form class="flex items-center space-x-6">
 
  <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form> 
      <h2 className="text-2xl font-semibold mb-4">EDUCATIONAL QUALIFICATION</h2>
        <p className="text-lg mb-6">
          Graduation in ELECTRICAL AND ELECTRONICS ENGINEERING FROM Cochin University of Science and Technology with Good knowledge in 
          the information technology field.
        </p>
    </div>
  )
}

export default Intro
