import Link from 'next/link'
import { useRouter } from "react"
import React from 'react'
import Logo from './Logo.' 
import  { WhatsappIcon,TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwiitcher';
import { useState } from 'react';

const CustomLink = ({ href, title, className=""}) => {
   
  return(
       <Link href ={href} className={ `${className} relative group`}>
        {title}

        <span
         className= {
          `h-[2px] inline-block w-0 bg-dark 
         absolute left-0 -bottom-0.5
         group-hover:w-full transition-[width] ease duration-300
          dark:bg-light`} >{''}
        
         </span>
       </Link>
  );
};

const CustomMobileLink = ({ href, title, className="",toggle}) => {
 

  const handleClick = () => {
    toggle();
    router.push(href)

  }

 return(
      <botton href ={href} className={ `${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
       {title}

       <span
        className= {
         `h-[2px] inline-block w-0 bg-light 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-dark`} >{''}
       
        </span>
      </botton>
 );
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }



  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    '
    > 
    <button className='flex-col justify-cemter items-center hidden lg:flex' onClick={handleClick} >
      <span className= {`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} '`}></span>
      <span className= {`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className= {`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>

      <div className='w-full flex justify-between items-center lg:hidden'>

      <nav>
              <CustomLink href='/' title= "Home" className='mr-4'/>
              <CustomLink href='/about' title= "About"className='mx-4' />
              <CustomLink href='/projects' title= "Projects" className='mx-4'/>
              <CustomLink href='/articles' title= "Articles"className='m-4'/>
        </nav>
        
       
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://www.whatsapp.com/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{sacle:0.9}}
            className="w-6 mr-3"
            >
              <WhatsappIcon/>
              
          </motion.a>
       <motion.a href="https://twitter.com" target={"_blank"}
       className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
          whileHover={{y:-2}}
          whileTap={{sacle:0.9}}
       >
           <TwitterIcon/>
              </motion.a>
            <motion.a href="https://github.com" target={"_blank"}
             className="w-6 mr-3"
             whileHover={{y:-2}}
             whileTap={{sacle:0.9}}
             >
              <GithubIcon/>
              </motion.a>
            <motion.a href="https://www.linkedin.com/feed" target={"_blank"}
            className="w-6 mx-3" 
            whileHover={{y:-2}}
            whileTap={{sacle:0.9}}
            >
              <LinkedInIcon/>
              </motion.a>
            <motion.a href="https://www.pinterest.es/wzmaster" target={"_blank"
            }className="w-6 mx-3  bg-light rounded-full"
             whileHover={{y:-2}}
             whileTap={{sacle:0.9}}
            >
              <PinterestIcon/>
         </motion.a>
          <a href="https://dribbble.com/shots/popular/web-design" target={"_blank"
           }className="w-6 ml-3"
           whileHover={{y:-2}}
           whileTap={{sacle:0.9}}
           >
           <DribbbleIcon/>
           </a>

              <button
                   onClick={() => setMode(mode === "light" ? "dark" : "light")}
                   className='ml-3 flex items-center justify-center rounded-full p-1
                   ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark}
                   '
                  >
         {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
               </button>

        </nav>
      </div>

      {
        isOpen ?
        
        <motion.div 
        initial={{scale:0, opacity:0, x: "-50%", y: "-50%" }}
        animate={{scale:1, opacity:1}}
        className='min-w-[70w] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -transparent-x-1/2 -transparent-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      '>

        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href='/' title= "Home" className='' toggle={handleClick}/>
          <CustomMobileLink href='/about' title= "About"className='' toggle={handleClick} />
          <CustomMobileLink href='/projects' title= "Projects" className=''toggle={handleClick}/>
          <CustomMobileLink href='/articles' title= "Articles"className='' toggle={handleClick}/>
        </nav>
 
         <nav className='flex items-center justify-center flex-wrap mt-2'>
      <motion.a href="https://twitter.com" target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{sacle:0.9}}
      className="w-6 mr-3 sm:mx-1"
      >
        <TwitterIcon/>
        </motion.a>
      <motion.a href="https://twitter.com" target={"_blank"}
       className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
       whileHover={{y:-2}}
       whileTap={{sacle:0.9}}
       >
        <GithubIcon/>
        </motion.a>
      <motion.a href="https://twitter.com" target={"_blank"}
      className="w-6 mx-3sm:mx-1" 
      whileHover={{y:-2}}
      whileTap={{sacle:0.9}}
      >
        <LinkedInIcon/>
        </motion.a>
      <motion.a href="https://twitter.com" target={"_blank"
      }className="w-6 mx-3  bg-light rounded-full sm:mx-1"
       whileHover={{y:-2}}
       whileTap={{sacle:0.9}}
      >
        <PinterestIcon/>
        </motion.a>
      <a href="https://twitter.com" target={"_blank"
      }className="w-6 ml-3 sm:mx-1"
       whileHover={{y:-2}}
       whileTap={{sacle:0.9}}
      >
        <DribbbleIcon/>
        </a>

        <button
             onClick={() => setMode(mode === "light" ? "dark" : "light")}
             className='ml-3 flex items-center justify-center rounded-full p-1
             ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark}
             '
            >
   {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
         </button>

  </nav>
      </motion.div>



        : null
      }



        
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
        </div>

    </header>
  )
}

export default NavBar;