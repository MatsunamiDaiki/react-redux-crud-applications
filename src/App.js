import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro" , age: 10},
    {name: "Hanako" , age:5},
  ]
  return( 
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age = {profiles.age} key ={index}/>
      })
    }
    </div>
  )
}

const User = (props) => {
return <div>hi! i am {props.name}, and {props.age} years old!</div>
}

export default App;
