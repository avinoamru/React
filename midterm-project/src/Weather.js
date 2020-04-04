import React, {useState, Fragment} from 'react'

const api_key = 'd9346072d6699bbf487242a9cdecda9b'

const Weather = ()=> {


  const [weather, setweather] = useState({
    def_c: 1,
    def_f: 0
  });

  const handleClick = () =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${api_key}`).then(res=>(res.json()).then(data=>{
      
      setweather({
        ...weather,
        def_c: data.main.temp
      })
    }).catch(err=> console.log(err)))
  }
  
  
return (
  <Fragment>
    <h1>{weather.def_c}</h1>
    <button onClick = {handleClick}>change</button>
  </Fragment>
)

}




export default Weather











// import React, { Component, Fragment } from 'react'
// // import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// // const CTX = React.createContext()


// class Weather extends Component {
//   constructor() {
//     super()


//     this.api_key = 'd9346072d6699bbf487242a9cdecda9b'

//     this.state = {

//       url: `http://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${this.api_key}`,
//       data: [],
//       default_cel: 0,
//       default_farh: 0


//     }

//   }

//   getData = () => {
//     fetch(this.state.url).then(res => {
//       if (!res.ok) {
//         console.log(`There is a problem with the status, the status is ${res.status}`)
//       }

//       return res.json().then(data => {

//         console.log(data)
//         const c = (kelvin) => {
//           kelvin = kelvin - 273.15
//           return kelvin

//         }

//         const f = (cel) => {
//           cel = (cel - 32) * 5 / 9

//           return cel
//         }

//         let currentF = f(data.main.temp).toFixed(2)
//         let currentC = c(data.main.temp).toFixed(2)

//         this.setState({
//           default_cel: `${currentC}C`,
//           default_farh: `${currentF}F`
//         })




//       })

//     }).catch(err => console.log(err))
//   }

//   componentDidMount() {
//     this.getData()

//   }

//   render() {
    
//     return (
//       <Fragment>
//         <h1>{this.props.type}</h1>
//       </Fragment>
//     )
//   }


// }



// export default Weather