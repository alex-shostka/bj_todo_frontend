import axios from "axios";

export default class TodoService {
  static async getAll(limit = 3, page = 1, selectedSort = "username") {
    const response = await axios.get(
      "https://bj-todo-server-2c84y09e3-alex-shostka.vercel.app/api/todo",
      {
        params: {
          limit: limit,
          page: page,
          selectedSort: selectedSort,
        },
      }
    );
    return response;
  }

  static async createTodo(todo) {
    const { data } = await axios.post(
      "https://bj-todo-server-2c84y09e3-alex-shostka.vercel.app/api/todo",
      todo
    );
    return data;
  }
}
