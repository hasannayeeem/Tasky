export const addTodo = (data) => {
    if(data){
        return{
            type: "ADD_TODO",
            payload: {
                id: new Date().getTime().toString(),
                data: data
            }
        }
    }
}
export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        id
    }
}
export const updateTodo = (id) => {
    return{
        type: "UPDATE_TODO",
        id
    }
}
export const removeTodo = () => {
    return{
        type: "REMOVE_TODO"
    }
}