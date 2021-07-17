import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

//ToDOを更新する
const update = async (id, newTodo) => {
    const response = await axios.put(`${baseUrl}/${id}`, newTodo);
    return response.data;
};

//ToDoを削除する
const _delete = async id => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
}

//Todoを追加する
const add = async newTodo => {
    const response = await axios.post(baseUrl, newTodo);
    return response.data;
};

export default {getAll, update, delete: _delete, add };