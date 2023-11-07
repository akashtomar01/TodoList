import { useState } from "react";
import './totdolist.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = () =>{
    let [todoData,setTodoData] = useState('');
    let [arrayOfTodo,setArrayOfTodo] = useState([]);
    let [editable,setEditable] = useState(false);
    let [editInput,setEditInput] = useState('');

    let handleTodoInput = (e)=>{
        setTodoData(e.target.value)
    }

    let handleEditIput = (e)=>{
        setEditInput(e.target.value);
    }

    const addTodoData = (e)=>{
        e.preventDefault();
        if(!todoData){
            alert('enter text')
        }else{
            setArrayOfTodo([...arrayOfTodo,todoData]);
            setTodoData('')
            console.log('previous arrry',arrayOfTodo);    
        }
    }

    const deleteItems = (index) =>{
        arrayOfTodo.splice(index,1);
        setArrayOfTodo([...arrayOfTodo]);
    }

    const editData = (index) =>{
        setEditable(index);
    }

    const updatList = (index) =>{
        // alert(index)
        arrayOfTodo.splice(index,1,editInput)
        setArrayOfTodo([...arrayOfTodo])
        setEditable(false)
        // console.log('arr of data updated',arrayOfTodo);
    }

    const dragEnd = (result) => {
        if (!result.destination) {
            return console.log("check errror in drag");
        }
        const items = Array.from(arrayOfTodo);
        const [dragItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, dragItem);
        setArrayOfTodo(items);
        
      };

    return(
        <div className="main-div">
            <h1 className="head">Todo List</h1>
            <form>
                <div className="input-div col-sm-3">
                    <input type="text" placeholder="Enter Text" value={todoData} className="form-control" onChange={handleTodoInput}/>
                    <button className="btn btn-primary" onClick={addTodoData}>Add+</button>
                </div>
            </form>
                
            <div  className="table-div">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Task Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                <DragDropContext onDragEnd={dragEnd}>
                    <Droppable droppableId="arrayOfTodo">
                    {(provided) => (
                    <tbody ref={provided.innerRef} {...provided.droppableProps}>
                        {arrayOfTodo.map((i,index)=>{
                        return(
                        <Draggable key={index} draggableId={index.toString()} index={index}>
                        {(provided)=>(
                               <tr className="col-sm-3"  ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <td>{index+1}</td>
                                  {editable===index?
                                      <>
                                          <td><input type="text" className="form-control" onChange={handleEditIput}/></td>
                                          <td><button className="btn btn-primary" onClick={()=>{updatList(index)}}>Update</button></td>
                                      </>
                                      :
                                      <>
                                          <td>{<input type="text" className=" form-control"  value={i} readOnly/>}</td>
                                          {/* <td>{i}</td> */}
                                          <td><button className="btn btn-primary" onClick={()=>editData(index)}>Edit</button></td>
                                      </>
                                  }
                                  <td><button className="btn btn-danger" onClick={()=>deleteItems(index)}>Delete</button></td>
                                  
                              </tr>
                        )} 
                        </Draggable>
                        )
                        })
                        }
                    </tbody>
                    )}
                </Droppable>
            </DragDropContext>
                </table>
            </div>
        </div>
    )
}
export default TodoList;