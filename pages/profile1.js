import React, { useContext, useEffect } from 'react'
//import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { AmazonContext } from '../context/AmazonContext'

import Profile from '../components/Profile'

const profile1 = () => {
  const styles = {
    container: `h-full w-full flex flex-col bg-cover bg-no-repeat  `,
    main: `w-full h-full flex flex-col mt-[10px]`,
    tableContainer: ` flex flex-col p-[10px] justify-center`,
    pageTitle: `text-2xl font-bold text-left mt-[10px] mb-[30px]`,
    transactions: `flex gap-[50px] flex-row flex-wrap`,
  }
  const { ownedItems } = useContext(AmazonContext)
  

  
return(
<div className={styles.container}>
<Profile />
</div>
)
}

export default profile1