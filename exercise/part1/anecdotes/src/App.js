import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  

  const handleVote = (index)=>{
    console.log(index);
   const newVotes = [...votes];
   newVotes[index] +=1
   setVotes(newVotes)
    console.log(votes);
  }
  const RandNumber = ()=>{
      return Math.floor(Math.random()*anecdotes.length)
  }

 const  handleNext = ()=>{
  const index =  RandNumber()
  
  setSelected(index)
  }

const getMaxVote = ()=>{
 
 return (Math.max(...votes))
 
  
}

const getMaxVoteIndex = ()=>{
 
  return  votes.indexOf(Math.max(...votes))
   
 }
 if(getMaxVote() > 0 ){
  return (
    <div>
      {anecdotes[selected]}
      { <p>has {votes[selected]} votes</p> }
        <br/>
      <button onClick={()=>handleVote(selected)} >Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>

      <h3>Anecdote with most votes</h3>
      
      {anecdotes[getMaxVoteIndex()]}
      <p>it has {getMaxVote()}</p>
    </div>
  )

 }
  return (
    <div>
      {anecdotes[selected]}
      { <p>has {votes[selected]} votes</p> }
        <br/>
      <button onClick={()=>handleVote(selected)} >Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>

    </div>
  )
}

export default App