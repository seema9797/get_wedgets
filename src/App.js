import React,{useState} from 'react';
 import Accodion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Router from './Components/Router';
import Header from './Components/Hearder';

const items=[
    {
        title:'What is React ?',
        content:'REact iis Front end javascript'
    },
    {
        title:'Why USe React?',
        content:'React is a Favoite JS library among developer'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    }
]

const options=[
 {
    label:'the Coor Red',
    value:'Red'
 },
   {
    label:'The Color Green',
    value:'Green'
   },
   {
    label:'The Color Blue',
    value:'Blue'
   },

];

// const Accordianlist=()=>{
//     if(window.location.pathname ==='/'){
//         return <Accodion items={items}/>
//     }
// };

// const searchList =()=>{
//     if(window.location.pathname==='/list'){
//         return <Search/>;
//     }
// };

// const countNum =()=>{
//     if(window.location.pathname==='/count'){
//         return <Count/>;
//     }
// };

// const dropdownlist =()=>{
//     if(window.location.pathname==='/dropdown'){
//         return <Dropdown/>;
//     }
// };

// const showTranslate =()=>{
//     if(window.location.pathname==='/translate'){
//         return <Translate/>
//     }
// }


export default ()=>{
    const [selected,setSelected]=useState(options[0]);

    return(
           <div className="ui container segment" style={{marginTop:'80px'}}>
               <Header/>
          <Router path='/'>
              <Accodion items={items}/>
          </Router>
          <Router path="/list">
              <Search/>
          </Router>
          <Router path='/count'>
              <countNum/>
          </Router>
          <Router path='/dropdown'>
              <Dropdown
              label='Select your color'
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
              />
          </Router>
          <Router path='/translate'>
              <Translate/>
          </Router>
        </div>
    );
};