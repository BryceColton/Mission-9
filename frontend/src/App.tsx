
import './App.css'
import teamsObject from './CollegeBasketballTeams.json'

function Welcome() {

  return (<h1>Criminally Underrated Bands</h1>)
}

function Team({school, name, city, state}: {school: string, name: string, city: string, state: string}) {

  return (
    <>
    <img />
    <h2>School: {school}</h2>
    <h3>Mascot Name: {name}</h3>
    <h3>City and State: {city}</h3>
    <h3>State: {state}</h3>


    </>
  )
}

function TeamList() {

  return (
    <>
        {teamsObject.teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </>


  )
}

function App() {


  return (
    <>
      <Welcome />
      <TeamList />

    </>
  )
}

export default App
