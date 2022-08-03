import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { AmazonContext } from '../context/AmazonContext'
import { AiFillBank } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBox } from 'react-icons/fa'
const Collection = ({ item }) => {
  const styles = {
    maincontainer: ` h-full w-full flex  `,
    container: ` h-full w-[40%] flex flex-col `,
    container2: ` h-full w-full flex lex items-center`,
    //top: `flex w-full h-[80px] bg-[#f0f1f3] p-[20px] pr-[80px] gap-[80px]`,
    //topHeaderText: `text lg text-left flex items-center`,
    topHeaderEndText: `text lg flex items-center  flex-row p-[30px]`,
    content: `flex flex-col w-full h-[50px] gap-[20px] p-[20px] flex-1`,
    date: `text-xl font-bold`,
    item: `flex  gap-[5px] w-full`,
    nameContainer: `flex  text-xl text-justify`,
    itemName: `text-mg font-bold flex ml-[200px]`,
    container1: `h-full w-[300px] flex flex-col 	`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10 text-black`,
    menuItem: `flex items-center text-lg text-black font-bold cursor-pointer gap-2 hover:bg-purple-700`,
    amazonLogo: `mr-4 flex object-cover`,
    companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
    usernameInput: `bg-black border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    username: `h-full flex items-center w-full justify-center text-black`,
    setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-black`,
    //buyAgainBtn: `bg-[#ffd713] font-bold rounded-full p-[10px] h-[40px] w-[200px] cursor-pointer text-[#3a2802] text-center mb-[5px] mt-[10px]`,
    //etherscanBtn: `font-bold rounded-full h-[40px] w-[150px] cursor-pointer text-[#3a2802] text-center border-2 border-[#ffd713] flex justify-center items-center`,
  }

  const { username } = useContext(AmazonContext)

  return (
   <div className={styles.maincontainer}>
    <div className={styles.container1}>
      <div className={styles.menu}>
        <Link href='/'>
          <div className={styles.menuItem}>
            <AiFillBank />
            Home
          </div>
        </Link>
        <Link href='/collection1'>
          <div className={styles.menuItem}>
            <FaBox />
            Collections

          </div>
        </Link>


        <Link href='/profile1'>
          <div className={styles.menuItem}>
            <BsFillPersonFill />
            Profile
          </div>
        </Link>
        <Link href='/history'>
          <div className={styles.menuItem}>
            <AiOutlineHistory />
            Transaction History
          </div>
        </Link>
      </div>
    <div className={styles.companyName}>

      </div>
    </div>
      
      {item.map((asset, index) => {
        return (
        <>

          <div className={styles.container2}>
           <div className={styles.container} key={index}>


            <div className={styles.content}>
              <div className={styles.date}>
                Bought on {moment(asset.purchaseDate).format('MMMM Do')}
              </div>
              <div className={styles.item}>
                <Image
                  className='object-cover'
                  src={asset.src}
                  alt='item'
                  height={300}
                  width={200} />

              </div>
            </div>
          </div>
          </div></>
         
        )
        
      })}
    </div>
    
  )
}

export default Collection