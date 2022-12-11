import Link from 'next/link'
import { ReactElement } from 'react'
import { IApidata, ICharector } from '../../types'
import CharecterItem from '../components/CharecterItem'
import Layout from '../components/layouts/Layout'
import { Meta } from '../components/Meta'
import { NextPageWithLayout } from './_app'
const baseUrl=process.env.NEXT_PUBLIC_API_URL;
export async function getStaticProps() {
  const res=await fetch(`${baseUrl}/character/?page=19`);
  const res2=await fetch(`${baseUrl}/character/?page=20`);
  const results1:IApidata= await res.json(); 
  const results2:IApidata= await res2.json(); 
const results=[...results1.results,...results2.results]
  return {
    props:{ 
      charecters:results
    }
  }
}
const Home: NextPageWithLayout<{charecters:ICharector[]}> = ({charecters}) => {
  return (
 <>
 <Meta title='salam metakhoneh'/>
 <div style={{display:"flex",alignItems:"center",flexWrap:"wrap"}}>
  {charecters.map((charecter)=><CharecterItem key={charecter.id}
   charecter={charecter}/>)}
 </div>
<p>سلام بر شما دوستاناسم Font Face
   انجام میشه که در 
   ادامه قطعه کدی رو در رابطه با ساختار Font Face قرار دادم . برای این که بتونید بهتر این کار رو انجام بدید یکه پوشه به اسم font داخل فایل های سایت ایجاد کنید و تمامی فونت هایی که مد نظرتون هست رو داخل این پوشه قرار بدید تا فایل های سایت مرتب تر و منظم تر بشن . طبق کدی که در ادامه قرار دادم باید به کمک خاصیت font family برای هر فونت اسمی مشخص کنید تا بتونید برای قسمت های مختلف سایت 
  از این فونت استفاده</p>

 </>
  )
}
Home.getLayout=function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
