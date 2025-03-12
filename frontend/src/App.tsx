
import './App.css'

function Welcome() {
  return (<h1>Criminally Underrated Bands</h1>)
}

const bandNames = [
  {
    name: "Dire Straights", 
    members: "R.E.M", 
    formed: 1977},
  {name: "R. E. M", 
    members: "Michael Stripe, Peter Buck, Mike Willis, Billy Berry", 
    formed: 1980},
  {name: "Collective Soul", 
    members: "Michael Stripe, Peter Buck, Mike Willis, Billy Berry", 
    formed: 1992},
  {
    name: 'Traffic',
    members: 'Steve Wimwood, Jim Capaldi, Chris Wood, Dave Mason',
    formed: 1923
  }
]

function Band({name, members, formed}: {name: string, members: string, formed: number}) {

  return (
    <>
    <img />
    <h2>Name: {name}</h2>
    <h3>Original Members: {members}</h3>
    <h3>Formed: {formed}</h3>
    </>
  )
}

function BandList() {

  return (
    <>
        {
          bandNames.map((singleBand) => {
            <Band {...singleBand} />
          })
        }
    </>


  )
}

function App() {


  return (
    <>
      <Welcome />
      <BandList/>

    </>
  )
}

export default App
