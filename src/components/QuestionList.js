import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";



function QuestionList() {
  const [questions,setQuestions]=useState([])

  useEffect(()=>{
    fetch(" http://localhost:4000/questions").then(
      (r)=>r.json()
    ).then(
      (questions)=>setQuestions(questions)
    )
  },[])
  function handleDeleteQuestion(id){
    setQuestions((prevQuestions)=>
    prevQuestions.filter((question)=>question.id!==id))
  }
  
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;