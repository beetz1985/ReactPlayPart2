import React from 'react';
import Header from './Header'
import MainContent from './MainContent'

function App() {


    const [state, setState] = React.useState(false);

    function handleChange() {
       setState((s)=>{
            return (s) ? false : true
       })
    }


    return (
        <>
        <Header lightMode={state} toggle={handleChange}/>
        <MainContent lightMode={state}/>
        </>

    )
}

export default App;