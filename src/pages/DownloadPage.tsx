import React from 'react'

function DownloadPage() {
  return (
    <div className='h-auto bg-slate-300'>
      <section className='bg-primary h-[50vh]'>
        <h1 className='py-36 text-center text-white'>Looks like you're using </h1>
      </section>
      <h1>If you feel like we didn't pick your OS right, here's a set of options you can choose from below.</h1>
      <div className='flex flex-row justify-evenly p-5'>
        <button className='downLoadbtn'>Download for MacOS</button>
        <button className='downLoadbtn'>Download for Windows</button>
        <button className='downLoadbtn'>Download for Linux</button>
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

export default DownloadPage