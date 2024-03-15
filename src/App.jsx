import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import star from "./assets/images/star.svg"
import plus from "./assets/images/plus.svg"
import minus from "./assets/images/minus.svg"
import desktop from "./assets/images/desktop.svg"
import mobile from "./assets/images/mobile.svg"

function App() {
  const [isPlus01, setisPlus01] = useState(true);
  const [isPlus02, setisPlus02] = useState(true);
  const [isPlus03, setisPlus03] = useState(true);
  const [isPlus04, setisPlus04] = useState(true);

  const [showDown01, setShowDown01] = useState(false);
  const [showDown02, setShowDown02] = useState(false);
  const [showDown03, setShowDown03] = useState(false);
  const [showDown04, setShowDown04] = useState(false);

  return (
    <>
      <div className="container relative">
        <div className="image">
          <img className='w-full sm:w-[100vw] sm:max-w-[100vw] h-[40vh] object-cover' src={desktop} alt="" />
        </div>

        <div className="faqContainer sm:py-4 sm:px-6 py-2 px-4 rounded-xl bg-white sm:w-[530px] w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] text-black">
          <div className="title flex gap-4 my-4">
            <img className='w-8' src={star} alt="" />
            <h1 className='text-5xl font-bold'>FAQs</h1>
          </div>

          <div className="faqMain flex flex-col gap-10">
            <div className="qa01">
              <div className="que hover:text-[#ad28eb] hover:cursor-pointer" onClick={() => { setisPlus01(!isPlus01); setShowDown01(!showDown01) }}>
                <span className='flex justify-between font-semibold'>
                  <p> What is Frontend Mentor, and how will it help me?</p>
                  <img src={isPlus01 ? plus : minus} alt={isPlus01 ? "Plus Symbol" : "Minus Symbol"} />
                </span>
              </div>
              {showDown01 && <div className="ans m-2 text-gray-600 ">
                <p>Frontend Mentor offers realistic coding challenges to help developers improve their  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
              </div>}
            </div>

            <div className="qa02">
              <div className="que hover:text-[#ad28eb] hover:cursor-pointer" onClick={() => { setisPlus02(!isPlus02); setShowDown02(!showDown02) }}>
                <span className='flex justify-between font-semibold'>
                  <p> Is Frontend Mentor free?</p>
                  <img src={isPlus02 ? plus : minus} alt={isPlus02 ? "Plus Symbol" : "Minus Symbol"} />
                </span>
              </div>
              {showDown02 && <div className="ans m-2 text-gray-600 ">
                <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
              </div>}
            </div>

            <div className="qa03">
              <div className="que hover:text-[#ad28eb] hover:cursor-pointer" onClick={() => { setisPlus03(!isPlus03); setShowDown03(!showDown03) }}>
                <span className='flex justify-between font-semibold'>
                  <p> Can I use Frontend Mentor projects in my portfolio?</p>
                  <img src={isPlus03 ? plus : minus} alt={isPlus03 ? "Plus Symbol" : "Minus Symbol"} />
                </span>
              </div>
              {showDown03 && <div className="ans m-2 text-gray-600 ">
                <p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
              </div>}
            </div>

            <div className="qa04 mb-2">
              <div className="que hover:text-[#ad28eb] hover:cursor-pointer" onClick={() => { setisPlus04(!isPlus04); setShowDown04(!showDown04) }}>
                <span className='flex justify-between font-semibold'>
                  <p> How can I get help if I'm stuck on a Frontend Mentor challenge?</p>
                  <img src={isPlus04 ? plus : minus} alt={isPlus04 ? "Plus Symbol" : "Minus Symbol"} />
                </span>
              </div>
              {showDown04 && <div className="ans m-2 text-gray-600 ">
                <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
              </div>}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
