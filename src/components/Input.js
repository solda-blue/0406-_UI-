import React, { useState } from 'react';
import List from './List';
import Today from './Today';
import moment from 'moment';


function Input() {
    const today = moment().format('MM-DD');
    const [isToday , setIsToday] = useState(false);
    const [seq, setSeq] = useState(4);
    const [todoList, setTodoList] = useState([
        {_id : 1, text : '첫번째 할일', date : '04-05', chk : 1},
        {_id : 2, text : '두번째 할일', date : '04-05', chk : 1},
        {_id : 3, text : '세번째 할일', date : '04-05', chk : 1},
    ]);

    const [newTodo, setNewTodo] = useState({
        _id : 0, text : '', date : today, chk : 1
    });

    const {_id, text, date, chk} = newTodo;

    const onChange = (e) => {
        const value = e.target.value;
        setNewTodo({
            _id : seq,
            text : value,
            date : date, 
            chk : chk
        })
    }

    const handleCheck = (e) => {
        if(e.target.checked === true) {
            e.target.parentNode.style = 'text-decoration:line-through';
        } else {
            e.target.parentNode.style = 'text-decoration:none';
        }
    }

    const insertTodo = () => {
        if(text === '') {
            alert('내용을 입력하세요');
        } else {
            setNewTodo({
                ...newTodo,
                _id : _id,
                text : text,
                date : today,
                chk : chk
            });
            console.log(newTodo);
            setTodoList(todoList.concat(newTodo));
            setSeq(seq+1);
            setNewTodo({
                ...newTodo,
                _id : 0,
                text : '',
                date : today,
                chk : 1
            })
        }
    }

    const selectAll = () => {
        setIsToday(false);
        console.log(isToday);
    }

    const selectToday = () => {
        setIsToday(true);
        console.log(isToday);
    }

    return (
        <div>
            <input type='text' value={text} onChange={onChange} />
            <button onClick={insertTodo}>+</button>
            <hr />
            <div>
                <button onClick={selectAll}>모든 할일</button>
                <button onClick={selectToday}>오늘 할일</button>
            </div>

            <div>
                {isToday ? (<Today todoList={todoList} handleCheck={handleCheck}/>) : (<List todoList={todoList} handleCheck={handleCheck} />)}
            </div>
        </div>
    )
}

export default Input;
