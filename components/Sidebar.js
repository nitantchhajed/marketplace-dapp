import React, { useContext } from 'react'
import logo from '../assets/amazon_logo.png'
import logoFull from '../assets/amazon_logo_full.png'
import Image from 'next/image'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AmazonContext } from '../context/AmazonContext'
import { ConnectButton } from 'web3uikit'
import { AiOutlineHistory } from 'react-icons/ai'
import Link from 'next/link'
import { AiFillBank } from 'react-icons/ai'


const Sidebar = () => {
  const styles = {
    container: `h-full w-[300px] flex flex-col`,
    profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl `,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10`,
    menuItem: `flex items-center text-lg text-white font-bold cursor-pointer gap-2 hover:bg-purple-700`,
    amazonLogo: `mr-4 flex object-cover`,
    companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
    usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    username: `flex items-center w-full justify-center`,
    setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
  }

  const {
    isAuthenticated,
    buyTokens,
    getBalance,
    nickname,
    setNickname,
    username,
    handleSetUsername,
  } = useContext(AmazonContext)

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt='profile'
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type='text'
                    placeholder='Username....'
                    className={styles.usernameInput}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                  />
                </div>
                <button
                  className={styles.setNickname}
                  onClick={handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Wecome {username}</div>
              </div>
            )}
          </>
        )}
        <div className={styles.connectButton}>
          <ConnectButton />
        </div>
      </div>
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
  )
}

export default Sidebar
