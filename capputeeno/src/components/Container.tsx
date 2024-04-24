import React from 'react';
import Header from './Header';


interface ContainerProps {
   children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
   return (
      <div>
         <Header />
         <div className='w-full bg-[#F0F0F5] h-full px-5 pt-[34px] md:px-40'>
            {children}
         </div>
      </div>
   );
}

export default Container;
