import React from 'react';

const ManeeshPortfolio = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-4xl font-bold mb-4">MANEESH MADHUSUDHANAN</h1>
        <h3 className="text-center text-2xl mb-4 bg-yellow-200 inline-block p-2 rounded">BLOCKCHAIN ARCHITECT</h3>
        
       <div> 
        </div>
        <img src="Polish_20230516_022418225.jpg" alt="Maneesh" className="mx-auto mb-6 rounded-lg shadow-lg"/>
        <h2 className="text-2xl font-semibold mb-4 ">EDUCATIONAL QUALIFICATION</h2>
        <p className="text-lg mb-6">
          Graduation in ELECTRICAL AND ELECTRONICS ENGINEERING FROM Cochin University of Science and Technology with Good knowledge in 
          the information technology field.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border border-gray-300">COURSE</th>
                <th className="py-2 px-4 border border-gray-300">INSTITUTION</th>
                <th className="py-2 px-4 border border-gray-300">BOARD</th>
                <th className="py-2 px-4 border border-gray-300">YEAR OF PASS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-gray-300">B-tech</td>
                <td className="py-2 px-4 border border-gray-300">MG College of Engineering</td>
                <td className="py-2 px-4 border border-gray-300">Cochin University</td>
                <td className="py-2 px-4 border border-gray-300">2018</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">HIGHER SECONDARY</td>
                <td className="py-2 px-4 border border-gray-300">Govt.HSS Kulathoor</td>
                <td className="py-2 px-4 border border-gray-300">Board of Higher Secondary Examination</td>
                <td className="py-2 px-4 border border-gray-300">2012</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">10th</td>
                <td className="py-2 px-4 border border-gray-300">Holy Trinity EMHSS</td>
                <td className="py-2 px-4 border border-gray-300">State</td>
                <td className="py-2 px-4 border border-gray-300">2009</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold mb-2">HOBBIES</h3>
        <ul className="list-disc list-inside mb-6">
          <li>PLAYING CRICKET</li>
          <li>LISTENING TO MUSIC</li>
          <li>RIDING A CAR</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">INTEREST</h3>
        <ol className="list-decimal list-inside mb-6">
          <li>BLOCKCHAIN DEVELOPER</li>
          <li>GRAPHICS DESIGNER</li>
          <li>VIDEO CREATOR</li>
        </ol>
        <hr className="border-gray-300"/>
      </div>
    </div>
  );
};

export default ManeeshPortfolio;
