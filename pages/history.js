import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { AmazonContext } from '../context/AmazonContext'
import Link from 'next/link'
import { BsFillPersonFill } from 'react-icons/bs';
 

import { FaBox } from 'react-icons/fa'
import { AiFillBank } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';


import Transaction from '../components/Transaction'

const history = () => {
  const styles = {
    container: `h-full w-full flex bg-cover	bg-no-repeat `,
    container1: `h-full w-[300px] flex flex-col 	`,
    main: `w-full h-full flex flex-col mt-[50px]`,
    tableContainer: `w-full h-full flex flex-col p-[100px] justify-center`,
    pageTitle: `text-2xl font-bold text-left mt-[50px] mb-[30px]`,
    transactions: `flex gap-[50px] flex-row flex-wrap`,
    menuItem: `flex items-center text-lg text-black font-bold cursor-pointer gap-2 hover:bg-purple-700`,
  }
  const { ownedItems } = useContext(AmazonContext)
  // useEffect(() => {
  //   console.log(ownedItems)
  // }, [])

  return (
    <><Header /><div className={styles.container}>
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

      <div className={styles.main}>

        <div className={styles.tableContainer}>
          {ownedItems ? (
            <div className={styles.pageTitle}>Purchase History</div>
          ) : (
            <div className={styles.pageTitle}>No Purchase History</div>
          )}
          <div className={styles.transactions}>
            {ownedItems.map((item, index) => {
              return <Transaction key={index} item={item} index={index} />
            })}
          </div>
        </div>
      </div>
    </div></>
  )
}

export default history
