import React, { useState, useEffect } from 'react'
import styles from './ProductDetails.module.css';
import { useParams } from 'react-router';


export default function ProductDetails() {

  let { id } = useParams();



  return <>
    <div>ProductDetails</div>
  </>


}
