
import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { ConnectButton } from 'web3uikit'
import { AmazonContext } from '../context/AmazonContext'
import { BsInstagram, BsFillPatchCheckFill } from "react-icons/bs";
import { GrTwitter, GtTwitter } from "react-icons/gr";
import styled from "styled-components";
import {AiFillLinkedin }from "react-icons/ai";
import { AiFillBank } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs';
import Header from './Header';

const Profile=()=>{
  let setValue = '';
    const styles = {
        
        container: `h-full w-[300px] flex flex-col 	`,
        profile: ` w-full h-full py-16 flex flex-col justify-center items-center rounded-r-3xl `,
        profilePicContainer: `flex  rounded-xl items-center justify-center`,
        profilePic: `rounded-3xl object-cover`,
        welcome: ` text-md mb-2 font-bold text-2xl text-black`,
        walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
        menu: `flex flex-col w-full h-full px-10 gap-10 text-black`,
        menuItem: `flex items-center text-lg text-black font-bold cursor-pointer gap-2 hover:bg-purple-700`,
        amazonLogo: `mr-4 flex object-cover`,
        companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
        usernameInput: `bg-black border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
        username: `h-full flex items-center w-full justify-center text-black`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-black`,
      }
const Socials = styled.div`

  display: flex;

  background: cyan;

  width: 100%;

  justify-content: center;

  align-items: center;

  gap: 1rem;

  font-size: 1.5rem;

     margin-bottom: 1rem;
`;   
      const {
        isAuthenticated,
        buyTokens,
        getBalance,
        nickname,
        setNickname,
        setBio,
        bio,
        handleSetBio,
        username,
        handleSetUsername,
      } = useContext(AmazonContext)
    return (
      <div>
      
      <><Socials>
        <Header/>


        {/* <a href="https://twitter.com/queppelin">

          <GrTwitter />

        </a>

        <a href="https://www.instagram.com/queppelin_metaverse/">

          <BsInstagram />

        </a>
        <a href="https://www.linkedin.com/company/queppelin/mycompany/">

          <AiFillLinkedin />

        </a> */}

      </Socials><><div className={styles.container}>
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


      </div><>


            <div className={styles.profile}>
              {isAuthenticated && (
                <>
                  <div className={styles.profilePicContainer}>
                    <Image
                      src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                      alt='profile'
                      className={styles.profilePic}
                      height={100}
                      width={100} />
                  </div>
                  {!bio ? (
                    <>
                      <div className={styles.username}>
                        <input
                          type='text'
                          // placeholder='Bio....'
                          className={styles.usernameInput}
                          value={bio}
                          onChange={e => { setValue = e.target.value } } />
                        {/* // ,setBio(e.target.value)}} /> */}
                      </div>
                      <button
                        className={styles.setNickname}
                        onClick={() => { handleSetBio(setValue) } }
                      >
                        Set bio
                      </button>
                    </>

                  ) : (
                    <div>
                      <div className={styles.welcome}> {bio}</div>
                    </div>
                  )}

                  {!username ? (
                    <>
                      <div className={styles.username}>
                        <input
                          type='text'
                          placeholder='Username....'
                          className={styles.usernameInput}
                          value={nickname}
                          onChange={e => setNickname(e.target.value)} />
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
                      <div className={styles.welcome}> {username}</div>
                    </div>
                  )}

                </>
              )}
              <div className={styles.connectButton}>
                <ConnectButton />
              </div>
            </div></></></>
            </div>
            
    )

};
export default Profile;