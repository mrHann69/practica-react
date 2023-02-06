import { Link } from "react-router-dom";

const MatheoApp = ()=>{
    return (
        <>
            <h1>Choose a project</h1>
            <div>
                <div>
                    <Link to={'todolist'}>Matheo's ToDo List project</Link>
                </div>
                <div>
                    <Link to={'tictactoe'}>Matheo's TicTacToe project</Link>
                </div>
            </div>
        </>
    );
}


export default MatheoApp;