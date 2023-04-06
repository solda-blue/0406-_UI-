import React from 'react';
import moment from 'moment';

function Today(props) {
    const taday = moment().format('MM-DD');

    const todayTodoList = props.todoList.filter((tmp) => tmp.date === taday);

    const list = todayTodoList.map((tmp) => 
        <div key={tmp._id}>
            <span>{tmp._id} </span>
            <span>{tmp.text} </span>
            <span>{tmp.date} </span>
            <input type="checkbox" onClick={props.handleCheck} />
        </div>
    );

    return (
        <div>
            {list}
        </div>
    )
}

export default Today;