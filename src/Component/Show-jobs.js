import React from 'react'
import  {useState,useEffect} from "react";


const ShowJobs = ({data,AddFilter,filters}) => {

  return (
    <div className='ShowJobs' >
        {
            data.length ? (filters.map((item)=>{
                return(
                    <div className='show-data' key={item.id}>
                        <div className='main'>
                            <div className='logo'>
                                <img src={item.logo} alt='logo' className='img-logo'/>
                            </div>
                            <div className='main-text'>
                                <div className='text-start'> 
                                  <h5 className='i-name'>{item.company}</h5>
                                  <p className='i-new'>{item.new &&<span>NEW!</span>}</p>
                                  <p className='i-fea'> {item.featured && <span>FEATURED</span> }</p>
                                </div>
                                <div className='text-med'>
                                  <h3 className='i-pos'>{item.position}</h3>
                                </div>
                                <div className='text-end'>
                                   <p className='i'> {item.postedAt} </p>
                                   <span className='i'>.</span>
                                   <p className='i'> {item.contract} </p>
                                   <span className='i'>.</span>
                                   <p className='i'> {item.location} </p>
                                </div>
                             </div>
                        </div>
                       <div className='main-filter'>
                       <button className='btn' onClick={()=>AddFilter(item.role)} >{item.role}</button>
                       <button className='btn'onClick={()=>AddFilter(item.level)} >{item.level}</button>
                       {
                        item.languages.length ? item.languages.map((i)=><button className='btn' key={i} onClick={()=>AddFilter(i)}>{i}</button>
                        ):<div></div>
                       }
                       {
                        item.tools.length ? item.tools.map((it)=><button className='btn' key={it} onClick={()=>AddFilter(it)} >{it}</button>
                        ):<div></div>
                       }
                       </div>
                    </div>  
                )
            }
            )):<h3> There aren't jobs here</h3>
        }
    </div>
  )
}
export default ShowJobs
