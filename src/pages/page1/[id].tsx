import Link from "next/link";
import { IApidata, ICharector } from "../../../types";
import CharecterItem from "../../components/CharecterItem";
import { Meta } from "../../components/Meta";
const baseUrl=process.env.NEXT_PUBLIC_API_URL;
const CharecterCart=({charecter}:{charecter:ICharector})=>{  
    const {id,name,status}=charecter;    
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
export async function getStaticPaths () {
    const res=await fetch(`${baseUrl}/character/?page=19`);
    const {results}:IApidata= await res.json() 
    const paths = results.map((result: ICharector) => ({
        params:{ id:result.id.toString()}
      }));
    return{
        paths,
        fallback:false
    }
}
export async function getStaticProps ({params}:{params:{id:string}}) {  
    const res=await fetch(`${baseUrl}/character/${params.id}`);
    const charecter=await res.json();
    return{
        props:{
        charecter
        }
    }
}
export default CharecterCart;