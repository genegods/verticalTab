import React, { useState } from "react";
import { TabsData } from "../data/TabsData";


const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <React.Fragment>
      <main >
        <div className="mx-5 mt-20 grid grid-cols-3 border md:w-4/12 md:mx-auto">
          <div className="bg-red-800 ">
            {TabsData.map((item, index) => {
              return (
                <div key={index}>
                  <div
                  onClick={() =>handleClick(index)}
                  className={`w-full h-28 text-white centered flex-col capitalize border border-t-0 ${activeTab === index? 'activeTab':''}`}>
                    <div className="text-2xl ">{item.icon}</div>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-2 bg-red-900">
            <div className="w-full h-full text-white centered flex-col capitalize">
              <div className="iconSize ">{TabsData[activeTab].icon}</div>
              <p className="mt-5 text-4xl">{TabsData[activeTab].soon}</p>
              <p className='mt-2 text-xl'>{TabsData[activeTab].content}</p>
            </div>
          </div>

        
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
