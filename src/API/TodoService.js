import axios from "axios";

export default class TodoService {
  urlTodos = "http://172.16.33.128:5001/api/todo";
  urlPosts = "https://jsonplaceholder.typicode.com/posts";

  static async getAll(limit = 3, page = 1, selectedSort = "username") {
    const response = await axios.get("http://172.16.33.128:5001/api/todo", {
      params: {
        limit: limit,
        page: page,
        selectedSort: selectedSort,
      },
    });
    return response;
  }

  static async createTodo(todo) {
    const { data } = await axios.post(
      "http://172.16.33.128:5001/api/todo",
      todo
    );
    return data;
  }
}
