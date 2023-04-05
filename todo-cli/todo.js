/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate < today);
  };

  const dueToday = () => {
    let today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => (item.dueDate === today && !item.completed) || item.completed
    );
  };

  const dueLater = () => {
    let today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate > today && !item.completed);
  };

  const toDisplayableList = (list) => {
    let output = "";
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      let check = (item) => {
        if (item.completed == true) {
          return "[x]";
        }
        if (item.completed == false) {
          return "[ ]";
        }
        return "0";
      };
      let duedate = (item) => {
        let today = new Date().toISOString().split("T")[0];
        if (item.dueDate == today) {
          return " ";
        } else {
          return item.dueDate;
        }
      };
      let checkbox = check(item);
      let title = item.title;
      let dueDate = duedate(item);
      output += checkbox + " " + title + " " + dueDate + "\n";
    }
    return output;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
