import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
    <div className='bg-slate-300 dark:bg-slate-900 h-auto'>
      <Header/>
      <section className='section bg-gradient-to-t from-white to-transparent'>
        <h1 className='text-5xl font-zrnic text-center'>What's Hadron?</h1>
      </section>
     <section>
        <div className='subsection'>
          <h1 className='title text-right mr-32'>Speed</h1>
          <hr className='line'/>
          <p className='font-adventpro text-right mr-32 text-lg'></p>
        </div>
        <div className='subsection'>
          <h1 className='title text-left ml-32'>Light</h1>
          <hr className='line'/>
          <p className='font-adventpro ml-32 text-lg'>From the get go, another one of our core<br/>
          principles was ensuring that Hadron remains small while simultaneously keeping the underlying <br/>
          complexities suited for its performance. Hadron employs the use of frameworks tailored<br/>
          for speedy development, codebase abstraction and tiny binary releases. Worry no more of <br/>
          intimidating download sizes. You can now do anything and everything inside a speck of <br/>
          dust!</p>
        </div>
        <div className='subsection'>
          <h1 className='title text-right mr-32'>Time</h1>
          <hr className='line'/>
          <p className='font-adventpro text-right mr-32 text-lg'>As any programmer will tell you, time is of the essence,<br/>
          and with Hadron, we do our best to make sure of this. Be amazed at the architecture<br/> 
          built to reduce the hassle of technical nitty gritties, and focus more on <br/>
          YOUR task. From the frontend design, the intelligent and code-aware autocomplete, <br/>
          quick fixes... pre-production tips and fixes, to the backend technologies... you can now build like a pro.</p>
        </div>
     </section>
     <section className='my-5 text-center'>
       <h1 className='text-5xl font-zrnic'>We're a story in progress</h1>
       <p className='font-adventpro text-xl my-6'>Our team, featuring the brains behind this project, is made up of open minded<br/>
         individuals. Minds brimming with new ways to go against the grain, and a place of innovation <br/>
         and progressive thinking. Constantly working, constantly thinking of groundbreaking versions. And we're passionate about it<br/>
         But that's not the best part yet.<br/>
        <br/>
          The Hadron project as a whole is <span className='text-primary'>free</span> and <span className='text-primary'>open source</span>. 
          Think that the UI needs work? Or maybe have a feature suggestion? You can <br/> join us in the process of creativity, improving the experience
          for other developers and programmers like you {'('}Because well, f**k bureaucracy{')'}.<br/>
          Now, you are a part of this story too.</p>
     </section>
     <section className='h-[100vh] bg-white dark:bg-black'>
        <h1 className='font-audiowide text-3xl text-center pt-44 text-primary'>Well, what are you waiting for? </h1>
        <hr className='line border-primary border-2 rounded-full'/>
        <h2 className='font-zrnic text-2xl text-center my-10 text-primary'>The innovative experience awaits</h2>
        <Link to='/download'>
          <button className='my-9 mx-[44%] bg-gradient-to-r from-primary to-secondary 
                            drop-shadow-lg text-md text-white font-novaflat p-3 rounded-md'>
              Right this way!
          </button>
        </Link>
     </section>
     <div className='bg-slate-900 p-4'>
       <img alt='logo' src='../../assets/Logo.svg' width={60} className='ml-12'/>
       <span className='font-audiowide ml-12 text-white text-3xl text-shadow-lg shadow-white'>{'>'}_ PROGRAMMERS_KE</span>
       <h2 className='ml-12 font-zrnic text-lg my-10 text-white text-center'>2022</h2>
     </div>
    </div>
  )
}

export default Home