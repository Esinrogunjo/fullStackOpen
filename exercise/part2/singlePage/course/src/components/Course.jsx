import React from 'react'
const Header = ({course})=>{
    return(
      <h3>{course.name}</h3>
    )
  
}
const Content = ({parts})=>{
  return(
    parts.map((part,index)=><p key={index}>{part.name} {part.exercises}</p>)
  )

}

const Total = ({parts})=>{
  return(
    <p>
     Total of   {parts.reduce((acc, part)=> acc+part.exercises,0)} exercises
    </p>
    
  )
}

const Course = ({ courses }) => (
  courses.map((course, index)=>{
    return(
      <div key={index}>
      
    <Header course={course} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
   </div>
    )
   
  })
 
)


export default Course