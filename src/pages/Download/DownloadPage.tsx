import React from 'react'
import Header from './components/Header'

function DownloadPage() {
  return (
    <div className='h-auto bg-slate-300'>
      <Header/>
      <h1>If you feel like we didn't pick your OS right, here's a set of options you can choose from below.</h1>
      <div className='ml-24 space-y-8 p-5'>
        <DownloadOps>Download for MacOS
          <img src="../../../assets/macos-svgrepo-com.svg" alt="macos" width='40' className='mx-2' />
        </DownloadOps>
        <DownloadOps>Download for Windows
          <img src="../../../assets/windows-svgrepo-com.svg" alt="macos" width='40' className='mx-2' />
        </DownloadOps>
        <DownloadOps>Download for Linux
          <img src="../../../assets/tux-svgrepo-com.svg" alt="macos" width='46' className='mx-2' />
        </DownloadOps>
      </div>
      <h1>And if you need a more technical approach, below are different versions of certain releases across different Operating Systems </h1>

      <h1>Our Beta Program: </h1>
      <p>No! This isn't to say we're bluffing or don't know what we're doing, but as you know, there are <br/>
        occasions where we'd like users to have a feel of what new thing we're bringing to the table. Once again,<br/> 
        Hadron IDE is a continuous story, thus we'd like you to also take part in it too! 
      </p>
    </div>
  )
}

const DownloadOps = (props) => {
  return (
    <div className='relative group w-1/4'>
      <div className="absolute -inset-1 opacity-0
                          bg-gradient-to-r from-primary to-secondary blur-md 
                          group-hover:opacity-100 transition-all duration-300"></div>
      <button className='downLoadbtn'>
        {props.children}
      </button>
    </div>
  )
}

export default DownloadPage