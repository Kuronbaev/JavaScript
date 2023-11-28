function task(add) {
  const input = document.querySelector("#task");
  const btn = document.querySelector(".btn");
  const ul = document.querySelector("#taskli");
  let bot = "gvsdvhcsbvs";
  if (input.value.trim() !== "") {
    ul.innerHTML += `
    <li class="lia">
        <span>
           <input type="checkbox"/>
            ${input.value.trim()}
        </span>
        <button class = "delete">Delete</button>
    </li>
    `;
    const delBtns = document.querySelector(".delete");
    delBtns.onclick = function delBtn() {
      const taskList = document.querySelector("#taskli");
      const li = button.parentElement;
      taskList.removeChild(li);
    };
  }
}
console.log('hello world ');

console.log('world hello my name is amir and your name haha myn');