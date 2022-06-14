import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

function NavBar() {
  return (
    <nav className='fixed h-10 w-full top-0 left-0 p-3 grid grid-flow-col'>
        <ul className='col-span-4 flex flex-row justify-evenly 
                        font-novaflat text-lg text-white my-auto'>
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
            <a href='https://www.github.com/Manu254rce/Hadron'>
                <img alt='github' src='../assets/icons/github-svgrepo-com.svg' width={35} />
            </a>
            <Toggle/>
        </section>
    </nav>
  )
}


const Toggle = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-primary' : 'bg-secondary'
                } relative inline-flex h-6 w-11 items-center 
                rounded-full my-auto transition-all duration-300`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${enabled ? 'translate-x-6 drop-shadow-[0_0_4px_#fff]' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full 
                    bg-white transition-all duration-300`}
            />
        </Switch>
  )
}


export default NavBar