import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { imageLoader } from "../../imageLoader";
import { ICharector } from "../../types";
import Skeleton from "./skeleton/Skeleton";
interface IProps {
    charecter:ICharector
}
export default function CharecterItem({charecter}:IProps) {
    const [loading, setloading] = useState(true);
    const {image,name,id}=charecter;    
    
useEffect(() => {
if(charecter){
    setTimeout(() => {
        setloading(false)
    },500);
}
 
}, [charecter])

  return (<>
     {loading?<Skeleton/>: <>  <div style={{border:"1px solid red",margin:"5px",padding:5}}>
   <div style={{width:'200px',height:"200px",borderRadius:"10px",overflow:"hidden"}}>
   <Image
    loader={imageLoader}
    unoptimized={true}
    src={image}
    alt={name}
    width={200}
    height={200}
    layout="responsive"
    />
   </div>
   <div style={{width:"200px",height:"30px",marginTop:"3px",textAlign:"left"}}>
<Link href={id<381?`/page1/${id}`:`/page2/${id}`}><a>{name}</a></Link>
   </div>
  
</div></>
 }
  </>

  )
}
