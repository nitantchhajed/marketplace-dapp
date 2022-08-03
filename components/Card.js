import React, { useContext } from 'react'
import { FaCoins } from 'react-icons/fa'
import { AmazonContext } from '../context/AmazonContext'
import Image from 'next/image'

const Card = ({ item }) => {
  const styles = {
    cardContainer: `flex flex-col`,
    card: `h-[150x] w-[120px] rounded-3xl flex cursor-pointer shadow-lg shadow-purple-500/50  transition-all duration-300  hover:scale-150 hover:shadow-xl overflow-hidden border border-black shadow-xl `,
    cardTitle: `text-xl font-bold text-white flex text-center w-full flex-1 justify-center mt-[10px]`,
    price: `text-md font-bold text-white flex justify-center`,
    coins: `ml-[10px]`,
  }
  const { buyAsset } = useContext(AmazonContext)
  return (
    <div
      className={styles.cardContainer}
      onClick={() => buyAsset(item.price, item)}
    >
      <div className={styles.card}>
        <Image
          src={item.src}
          className='object-cover object-center'
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>{item.name}</div>
        <div className={styles.price}>
          {item.price} QC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  )
}

export default Card
