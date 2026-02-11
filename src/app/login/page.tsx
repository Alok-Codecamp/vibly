import React from 'react'

const Page = () => {
  return (
    <>
     {/* web view  */}
    <div className='sm:hidden lg:flex justify-center items-start h-screen'>
    {/* left section  */}
    <section className='' style={{color:"red",fontSize:'40px'}}>
      left section 
    </section>
    {/* right section  */}
    <section>
right section 0
    </section>
    </div>
    {/* mobile view  */}
    <div className='lg:hidden'>
      mobile view 
    </div>
    </>
  )
}

export default Page