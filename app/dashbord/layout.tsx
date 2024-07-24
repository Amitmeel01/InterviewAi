import Header from '@/components/shared/Header';
import Mobile from '@/components/shared/Mobile';
import React from 'react'

function DashbordLayout({children}:any) {
  return (
    <div>
      
      <div className='max-sm:hidden'>
      <Header/>
      </div>
     
      <div className='hidden max-sm:block'>
      <Mobile/>
      </div>
     
      <div className='mx-5 md:mx-20 lg:mx-30'>
      {children}
      </div>
        
    </div>
  )
}

export default DashbordLayout;