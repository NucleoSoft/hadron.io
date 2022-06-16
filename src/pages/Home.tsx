import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
    <div className='bg-slate-300 dark:bg-slate-900 h-auto'>
      <Header/>
      <section className='section bg-gradient-to-t from-white to-transparent'>
        What's Hadron?
      </section>
     <section>
        <div className='subsection'>
          <h1 className='title text-right mr-32'>Speed</h1>
          <hr className='line'/>
          <p className='font-adventpro'></p>
        </div>
        <div className='subsection'>
          <h1 className='title text-left ml-32'>Light</h1>
          <hr className='line'/>
          <p className='font-adventpro'></p>
        </div>
        <div className='subsection'>
          <h1 className='title text-right mr-32'>Time</h1>
          <hr className='line'/>
          <p className='font-adventpro'></p>
        </div>
     </section>
     <section className='h-[100vh] bg-white dark:bg-black'>
        <h1 className='font-audiowide text-3xl text-center pt-44 text-primary'>Well, what are you waiting for? </h1>
        <hr className='line border-primary border-2 rounded-full'/>
        <h2 className='font-zrnic text-2xl text-center my-10 text-primary'>The innovative experience awaits</h2>
        <Link to='/downloads'>
          <button className='my-9 mx-[44%] bg-gradient-to-r from-primary to-secondary 
                            drop-shadow-lg text-md text-white font-novaflat p-3 rounded-md'>
              Right this way!
          </button>
        </Link>
     </section>
     <div className='bg-slate-900 p-4'>
       <img alt='logo' src='../../assets/Logo.svg' width={50} className='ml-12'/>
       <span className='font-audiowide ml-12 text-white text-3xl text-shadow-lg shadow-white'>{'>'}_ PROGRAMMERS_KE</span>
       <h2 className='ml-12 font-zrnic text-lg my-3 text-white'>2022</h2>
     </div>
    </div>
  )
}

export default Home