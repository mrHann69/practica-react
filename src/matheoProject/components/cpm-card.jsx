import '../styles/style-card.css';

function TodoCardCmp ({key,nameTodo, sendKey}){

    const sendKeyToParent = ()=>{
        sendKey(miKey);
    }
    const miKey = key;
    return (
        <ul className='card-container'>
            <div id='card-content'>
                <input type="checkbox" name="" id="chbx" />
                <label htmlFor="chbx"> {nameTodo} </label>
                <button type="button" onClick={sendKeyToParent}> delete </button>
            </div>
        </ul>
    );
}

export default TodoCardCmp;
