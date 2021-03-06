import { useContext, useState } from "react";
import {CardContext} from "../GPA"
const CourseCard = (props) => {
  const { dispatch } = useContext(CardContext);
  return (
    props.state.map(obj => {
    return (<>
    <div style = {{textAlign:"center"}}>
      <div class="CourseCard">
        <tr>
          <td>
            <div id="tag">
              <p><b>name : <div id = "para">{obj.name}</div></b></p>
              <p><b>crade : <div id = "para">{obj.a}</div></b></p>
              <p><b>credit : <div id = "para">{obj.c}</div></b></p>
            </div>
          </td>
          <td>
            <button id="del_btn" onClick = {()=>{
                dispatch({
                    type: "DELETE_CARD",
                    payload: obj.id,
                });}}>x</button>
          </td>
        </tr>
      </div>
      </div>
    </>)
  }))
  
};

export default CourseCard;