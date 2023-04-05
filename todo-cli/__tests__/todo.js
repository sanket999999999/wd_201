/* eslint-disable no-undef */
const todolist = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todolist();
describe("todolist test suite", () => {
  beforeAll(() => {
    let today = new Date();
    let yesterday = new Date(today);
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);
    add({
      title: "work 1",
      completed: false,
      dueDate: yesterday.toISOString().split("T")[0],
    });
    add({
      title: "work 2",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });
    add({
      title: "work 3",
      completed: false,
      dueDate: tomorrow.toISOString().split("T")[0],
    });
  });
  test("should add new todo", () => {
    expect(all.length).toBe(3);
    const todoItemCount = all.length;
    add({
      title: "work 4",
      completed: false,
      deuDate: new Date().toISOString().split("T")[0],
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("should mark a todo complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("should check the overdue", () => {
    expect(overdue().length).toBe(1);
  });
  test("should check the dueToday", () => {
    expect(dueToday().length).toBe(2);
  });
  test("should check the dueLater", () => {
    expect(dueLater().length).toBe(1);
  });
});
