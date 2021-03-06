import { createContext, useEffect, useReducer , useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
import Link from 'next/link'

export const CardContext = createContext({});

function GPA() {
  const [GPA, setGPA] = useState(0.00);
  function calculateGPA() {
    // TODO
    let grade = 0.00
    let credit = 0
    state.currentState.forEach(obj => {
      if(obj.a !== "W"){
        grade += Number(obj.g) * Number(obj.c)
        credit += Number(obj.c)
      }
    })
    grade  = Number(grade) / Number(credit)
    if(Number(grade) >= 0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(0.00)
  }

  const reducer = (state , action) =>{
    switch(action.type){
      case "ADD_CARD":
        return {
          ...state,
          currentState: [...state.currentState, action.payload],
        };
      case "SET_CARD":
        return {
          ...state,
          currentState: action.payload,
        };
      case "DELETE_CARD":
        return {
          ...state,
          currentState: state.currentState.filter((card) => card.id !== action.payload),
        };
      }
  }

  const [state,dispatch] = useReducer(reducer, {currentState:[],})
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState),
      })
    }
    calculateGPA()
  }

  useEffect(fetchCards, [])
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
    calculateGPA()
  }, [state.currentState])
  
  return (

    
    <CardContext.Provider value = {{state,dispatch}}>
      <div id = "head" style = {{textAlign:"center"}}>

      <div style={{textAlign:"center"}}>
        <h1>GPA CALCULATOR</h1>
        <br/>
        <table align = "center">
            <tr>
                <th> <Link href ="/"><button>HOME </button></Link></th>
                <th><Link href ="Gallery"><button>Gallery</button></Link> </th>
                <th><Link href ="Contact"><button>Contact</button></Link> </th>
                {/*<th><Link href ="GPA"><button >calculateGPA</button></Link> </th>*/}
                <th><Link href ="post"><button >Post</button></Link> </th>

            </tr>
        </table>
      </div>

        <div style = {{textAlign:"center"}}>
        <CourseCard state={state.currentState}/>
        </div>
      </div>
      <div id = "body" style = {{textAlign:"center"}}>
        <CourseForm />
        <p id ="GPA"><b>GPA = {GPA.toFixed(2)}</b></p>
      </div>
    </CardContext.Provider>
  );
}

export default GPA