import React from 'react'

const Content = () => {
    return (
<><div>
            <h3 className="pl-[550px] text-sky-700 drop-shadow-sm italic text-4xl mt-20">CERTIFICATE DApp</h3>
            <h5 className=" underline text-sky-700 drop-shadow-sm italic text-center text-4xl mt-20">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black-500">ISSUE NEW CERTIFICATE</span>
            </h5>
            <div className="pl-[550px] mt-20 ">
                <div>SELECT COURSE*

                </div>
                <div>
                    <select className="bg-sky-500 hover:bg-sky-700 ..." name="course" id="">
                        <option>certified blockchain associate</option>
                        <option value="PCB design">PCB design ID</option>
                        <option value="cyber security">cyber security</option>
                    </select>
                </div>
            </div><div className="pl-[550px] ">
                <div>CERTIFICATE ID*</div><input className="bg-sky-500 hover:bg-sky-700 ..." type="textfield"  />
            </div>
            <div className="pl-[550px]">
                <div>CANDIDATE NAME*</div>
                <div>
                    <input className="bg-sky-500 hover:bg-sky-700 ..." type="textfield"  />
                </div>

                <div className="pr-[550px] ">SELECT GRADE*
                </div>
                <div>
                    <select className="pr-[20px] bg-sky-500 hover:bg-sky-700 ..." name="course" id="">
                        <option>A</option>
                        <option value="PCB design">B</option>
                        <option value="cyber security">C</option>
                    </select>
                </div>
                <div>
                    <div className="pr-[550px]">
                        <div>ISSUE DATE*</div>
                        <div>
                            <input className="bg-sky-500 hover:bg-sky-700 ..." type="date" value="DD-MM-YYYY"/>
                        </div>
                    </div>
                </div>

                <div className="pr-[550px]">

                    <div className="w-[130px] pt-[17px] text-align: center;">
                       <input className="bg-sky-500 hover:bg-sky-700 SUBMIT" type="submit" value="SUBMIT"  />


                    </div>
                </div>
                </div>
                </div>
            </>
            )
}

            export default Content
