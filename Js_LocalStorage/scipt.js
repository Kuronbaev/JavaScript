list.value = localStorage.getItem("list");
list.oninput = () => {
  localStorage.setItem("list", list.value);
};
