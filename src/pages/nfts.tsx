
import { IApidata ,ICharector} from "../../types";
export default function Nft({charecters}:{charecters:ICharector[]}) {
    const data=charecters.slice(0,7);
    
  return (
    <div className="components_container"> 
      <header className="header">wellcome to nft</header>
      <main className="main_section">
      <section className="gallery">
      {data.map((itm,index)=><div style={{backgroundImage:`url(${itm.image})` ,backgroundPosition:"center",backgroundSize:"contain"}} key={index} className={`item item_${index}`}>
      
      </div>)}
      </section>
      </main>
      <aside className="aside_section"> aside</aside>
      <footer >goodbye nft</footer>
    </div>
  )
}
const baseUrl=process.env.NEXT_PUBLIC_API_URL;
export async function getStaticProps() {
  const res=await fetch(`${baseUrl}/character/?page=19`);
  const results1:IApidata= await res.json(); 

const results=[...results1.results]
  return {
    props:{ 
      charecters:results
    }
  }
}