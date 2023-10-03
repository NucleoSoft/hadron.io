import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

// import { Link, NavLink } from 'react-router-dom'
// import useDarkMode from './hooks/useDarkMode'

function NavBar() {
  return (
    <nav className='fixed h-auto w-full top-0 left-0 p-3 grid grid-flow-col
                    backdrop-brightness-125 backdrop-blur-md drop-shadow-md'>
        <ul className='col-span-4 flex flex-row justify-evenly 
                        font-novaflat text-md text-white my-auto'>
            <li>
                <img src="../../../assets/icons/clarity-assets-master/icons/core/house-line.svg" alt="home" width='25' className='ml-2'/>
            </li>                
            <li>Documentation</li>
            <li>Downloads</li>
            <li>Contribute</li>
            <li>Release Notes</li>
            <li>More Projects</li>
        </ul>
        <section className='col-span-2 flex flex-row justify-evenly'>
            <input placeholder='Search' 
                className='p-2 my-auto rounded-md font-novaflat text-md drop-shadow-lg w-3/5'>
            </input>
            <a href='https://www.github.com/Nucleosoft/Hadron'>
                <img alt='github' src='../assets/icons/github-svgrepo-com.svg' width={35} />
            </a>
            <Toggle/>
        </section>
    </nav>
  )
}


const Toggle = () => {
    // const [darkMode, setdarkMode] = useDarkMode()
    // const handleMode = setdarkMode(!darkMode)

    const [enabled, setEnabled] = useState(false)
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            // onClick={handleMode}
            className={`${enabled ? 'bg-slate-900' : 'bg-slate-400'
                } relative inline-flex h-7 w-12 items-center 
                rounded-full my-auto transition-all duration-300`}
        >
            <img src="../../../assets/icons/moon-svgrepo-com.svg" alt="moon" width='16' className='absolute left-1'/>
            <img src="../../../assets/icons/sun-svgrepo-com.svg" alt="sun" width='16' className='absolute left-7'/>
            <span
                className={`${enabled ? 'translate-x-6 drop-shadow-[0_0_6px_#fff] bg-slate-300' : 'translate-x-1 bg-slate-900'
                    } inline-block h-5 w-5 transform rounded-full 
                    transition-all duration-300`}
            />
        </Switch>
  )
}


export default NavBar