import React from 'react'
import styles from './LoadingScreen.module.css';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton'

export default function LoadingScreen() {
  return (
    <div className={styles.wrapper}>
      <ProductSkeleton />
    </div>
  )
}
