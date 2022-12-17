import './App.css';
import Header from './Header';
import  {useState,useEffect} from "react";
import data from './data.json'

function App() {
  
  const [filterData,setFilterData] =useState([])
  const[filters,setFilters]=useState([])

  const modiData =()=>{
    if(filterData.length >0){   
       const NewData=filters.filter(i=>{
        return(filterData.every(key =>{
            return(
              i.role === key||
              i.level=== key||
              i.languages.includes(key)||
              i.tools.includes(key))})          
        )
       })
       setFilters(NewData)
    }else{
      setFilters(data)
    }
  }

  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ()=>{modiData()},[filterData]
  )
  
  const AddFilter =(i)=>{
     if(!filterData.includes(i)){
      setFilterData([...filterData,i])
    }
  }

  const DeletFilter =(i)=>{
    const newKey=filterData.filter(key =>key !== i)
    setFilterData(newKey)
  }
  
  const ClearAll=()=>{
      setFilterData([])
  }

  return (
    <div className="App">
      <Header data={data} AddFilter={AddFilter} filterData={filterData} DeletFilter={DeletFilter} ClearAll={ClearAll} filters={filters}/>
    </div>
  );
}

export default App;
