import Head from 'next/head'
import React from 'react'
  
interface IProps{
    title:string,
    description:string,
    keywords:string
}


export const Meta = ({title,description,keywords}:IProps) => {
  return (
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      {/* <link rel="icon" href="/favicon.png" /> */}
      <title>{title}</title>
        </Head>
  )
}
Meta.defaultProps = {
    title: 'metakhoneh website',
    keywords: 'house rent, host price',
    description: 'Get the best house in your trip',
  }
