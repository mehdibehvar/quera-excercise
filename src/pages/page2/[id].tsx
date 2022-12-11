import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { IApidata, ICharector } from "../../../types";
import CharecterItem from "../../components/CharecterItem";
import { Meta } from "../../components/Meta";
const baseUrl=process.env.NEXT_PUBLIC_API_URL;

const CharecterCart=({charecter}:{charecter:ICharector})=>{  
    const router=useRouter();
    console.log(router.isFallback);
    
    const {name,status}=charecter;   
return (
<>
<Meta title={name} description={status}/>
<div>
        <CharecterItem charecter={charecter}/>
        <Link href={"/"}>
        <a>
         home
        </a>
        </Link>
    </div>
</>
)
}
export const getServerSideProps:GetServerSideProps= async(context)=> {  
    const res=await fetch(`${baseUrl}/character/${context.query.id}`);
    const charecter=await res.json();
    return{
        props:{
        charecter
        }
    }
}
export default CharecterCart;