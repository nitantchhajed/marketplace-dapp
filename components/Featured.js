import React, { useState, useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'

const Featured = () => {
  const [cardColor] = useState([
    'bg-gradient-to-r from-[cyan] to-[white]',
    'bg-gradient-to-r from-[cyan] to-[white]',
    'bg-gradient-to-r from-[cyan] to-[white]',
  ])

  const styles = {
    container: `h-[400px] w-full flex p-[20px] flex-col`,
    title: `text-2xl font-bolder text-white align-center mb-[20px] mt-[30px] mb-24 ml-[40px]`,
    cards: `h-full w-full flex gap-[100px] justify-between mb-[30px] ml-[30px]`,
    card1: `h-[130px] w-[400px] p-[20px] hover:scale-125 shadow-lg shadow-purple-500/50  hover:shadow-2xl rounded-3xl bg-gradient-to-l from-[black] to-[white] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl `,
    card2: `h-[130px] w-[400px] p-[20px] hover:scale-125 shadow-lg shadow-purple-500/50   hover:scale-125 hover:shadow-2xl rounded-3xl bg-gradient-to-l from-[black] to-[white] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl   `,
    card3: `h-[130px] w-[400px] p-[20px]hover:scale-125 shadow-lg shadow-purple-500/50   hover:scale-125 hover:shadow-2xl rounded-3xl bg-gradient-to-l from-[black] to-[white] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl   `,
    card4: `h-[130px] w-[400px] p-[20px] hover:scale-125 shadow-lg shadow-purple-500/50 hover:scale-125 hover:shadow-2xl rounded-3xl bg-gradient-to-l from-[black] to-[white] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl  `,
    cardCross: `h-[180px] w-[125px] hover:scale-125 shadow-lg shadow-purple-500/50 rounded-3xl absolute bottom-[20px] left-[20px] transition-all duration-300 hover:scale-105 flex  overflow-hidden`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Top Assets</div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/3565db33a856b19f48396062e59e6d62.mp4#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/89cba6f1544810aea19d78e664981d63.mp4#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/894fd3d49c7c258d202a22bb710a3416.mp4#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/022c0aad904ddbd8884b12468aaaad28.mp4#t=0.001' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
