import React, { Suspense, lazy } from 'react'
const Hero =lazy(()=>import('../components/Hero'))
const Home = () => {
  return (
   <Suspense id='home' fallback={<div>loading...</div>}><Hero/></Suspense>
  )
}

export default Home
