import React from 'react';

const Odeme = () => {
  return (
    <header className="relative bg-ag mt-8 mb-4 ">
     

   
      <div className="mx-auto w-full max-w-4xl p-2 ">
        <div className="mx-auto max-w-3xl mt-4 text-center">
          <h1 className="mt-4 text-2xl font-bold text-mavi md:text-4xl">
            Ödəmə Üsulları
          </h1>
      
        </div>
        <div className="mx-auto items-center justify-center mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-16 md:grid-cols-5">
          <div className="mx-auto">
            <img 
              src="https://www.artkom.az/img/million.png" 
              alt="" 
              className="inline-block hover:scale-125 transition-all pointer" 
            />
          </div>
          <div className="mx-auto">
            <img 
              src="https://www.artkom.az/img/emanat.png" 
              alt="" 
              className="inline-block hover:scale-125 transition-all pointer" 

            />
          </div>
          <div className="mx-auto">
            <img 
              src="https://www.artkom.az/img/epul.png" 
              alt="" 
              className="inline-block hover:scale-125 transition-all pointer" 
 
            />
          </div>
          <div className="mx-auto">
            <img 
              src="https://www.artkom.az/img/hesabaz.png" 
              alt="" 
              className="inline-block hover:scale-125 transition-all pointer" 

            />
          </div>
          <div className="mx-auto">
            <img 
              src="https://fpay.az/img/logo.svg" 
              alt="" 
              className="inline-block w-16 h-16 hover:scale-125 transition-all pointer" 

            
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Odeme;
