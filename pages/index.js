import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Collection from '../components/Sidebar'


import { useEffect, useRef, useState } from "react";


const styles = {
  container: `h-full w-full flex bg-cover bg-no-repeat bg-center bg-[url('../assets/bg1.gif')]`,
}

export default function Home() {
  
  return (
    <div className={styles.container}>
         
      <Sidebar />
      <Main />
     
    </div>
  )
}
