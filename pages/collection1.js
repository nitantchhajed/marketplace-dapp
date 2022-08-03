import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { AmazonContext } from '../context/AmazonContext'

import Collection from '../components/Collection'

const collection1 = () => {
  const styles = {
    
    container: `h-full w-full flex text-black bg-white`,
    main: `w-full h-full flex flex-col text-black mt-[10px] `,
    tableContainer: ` flex flex-col p-[10px] justify-center`,
    pageTitle: `text-2xl font-bold text-left text-black mt-[10px] mb-[30px]`,
    transactions: `flex gap-[50px] flex-row text-black flex-wrap`,
  }
  const { ownedItems } = useContext(AmazonContext)
  // useEffect(() => {
  //   console.log(ownedItems)
  // }, [])

  return (
    
    
      

      <div className={styles.main}>
        <Header />
        <div className={styles.tableContainer}>
          {ownedItems ? (
            <div className={styles.pageTitle}>My Collection</div>
          ) : (
            <div className={styles.pageTitle}>No Collection</div>
          )}
          <div className={styles.transactions}>
            {ownedItems.map((item, index) => {
              return <Collection key={index} item={item} index={index} />
            })}
          </div>
        </div>
      </div>
    
    
  )
}

export default collection1