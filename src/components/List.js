import React from 'react';

function List(props) {
    console.log(props);
    const list = props.todoList.map((tmp) => 
        <div key={tmp._id}>
            <span>{tmp._id} </span>
            <span>{tmp.text} </span>
            <span>{tmp.date} </span>
            <input data-chk={tmp.chk} type="checkbox" onClick={props.handleCheck} />
        </div>
    )

    return (
        <div>
            {list}
        </div>
    )
}

export default List;