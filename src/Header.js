import React from 'react'
import ShowJobs from './Component/Show-jobs'
import{BsXLg} from "react-icons/bs";

const Header = ({data,AddFilter,filterData,DeletFilter,ClearAll,filters}) => {
  return (
    <div className='Header'>
        <img src='https://react-job-list-filtering-hikmahx.vercel.app/static/media/bg-header-desktop.8694f466.svg' alt='header' className='desktop'/>
        <div className='header-contain'>
        <div className='filteritem'>
        {
          filterData.length>0 && filterData.map((item,id)=>{
            return(
              <div className='show' key={id}>
                  <button  className='show-btn'>{item} </button>
                  <button onClick={()=>DeletFilter(item)} className='spans'><BsXLg className='icon'/></button>
              </div>
            )
          })
        }
      </div>
      {filterData.length>0? <div className='clear'><p onClick={()=>ClearAll(data)} style={{}}> Clear</p></div>:<div></div>}
        
      </div>
       {/* <div className='header-contain'>
            <div className='filteritem'>            
                 {filterData.map((item,id)=>{
                    return (
                        <div className='show' key={id}>
                        <button key={id} className='show-btn'>{item} </button>
                        <button onClick={()=>DeletFilter(item)} className='spans'><BsXLg className='icon'/></button>
                        </div>)}
                  }
            </div>
            <div className='clear'><p onClick={()=>ClearAll(data)} style={{}}> Clear</p></div>
        </div>*/}
        <ShowJobs data={data} AddFilter={AddFilter} filters={filters}/>
    </div>
  )
}

export default Header
