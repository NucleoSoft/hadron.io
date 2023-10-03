import React from 'react'
import Header from './components/Header'

function DownloadPage() {
  return (
    <div className='h-auto bg-slate-300'>
      <Header />
      <h1>And if you need a more technical approach, below are different versions of certain releases across different Operating Systems </h1>
      <DownloadOp />
      <h1>Our Beta Program: </h1>
    </div>
  )
}

type DownloadOpsProps = {
  children: React.ReactNode;
}

const DownloadOps = (props: DownloadOpsProps) => {
  return (
    <div className='relative group w-full'>
      <div className="absolute -inset-1 opacity-0
                          bg-gradient-to-r from-primary to-secondary blur-md 
                          group-hover:opacity-100 transition-all duration-300"></div>
      <button className='downLoadbtn'>
        {props.children}
      </button>
    </div>
  )
}

const DownloadOp = () => {
  return (
    <div className='flex flex-row mx-auto w-4/5'>
      {/* <h1>If you feel like we didn't pick your OS right, here's a set of options you can choose from below.</h1> */}
      <div className='space-y-8 p-5'>
        <DownloadOps>Download for MacOS
          <img src="../../../assets/macos-svgrepo-com.svg" alt="macos" width='40' className='ml-12' />
        </DownloadOps>
        <DownloadOps>Download for Windows
          <img src="../../../assets/windows-svgrepo-com.svg" alt="windows" width='40' className='ml-7' />
        </DownloadOps>
        <DownloadOps>Download for Linux
          <img src="../../../assets/tux-svgrepo-com.svg" alt="linux" width='46' className='ml-14' />
        </DownloadOps>
      </div>
    </div>
  )
}

export default DownloadPage