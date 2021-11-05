function checkTime(i) {
    if (Number(i) < 10)  i = "0" + i;
    return i;
}
   
function startTime() {
    let currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    document.getElementById("time").innerText = checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s);
   }
   
   setInterval(() => {
       startTime();
   }, 1000);

async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    let jsonResponse = await response.json();

    return jsonResponse;
}


function newElement(event) {
  event.preventDefault();
  console.log('newElement ');
  var li = document.createElement("li");
  var inputValue = document.getElementById("ToDo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasklist").appendChild(li);
  }
  document.getElementById("ToDo").value = "";
}; 
  
/*

- display a number (initialized with 0) and increment it every ONE SECOND
- Every second display current time in the format HH:mm:ss for example 15:45:02
- toDo List: Add Form with an input where user can enter a task title + Submit button
   on submit => add the new task in a list of tasks which is displayed just under the form

- Add Button + Event onclick, call getData and log in the console the json response
  display results (the json response) in the DOM  

<div class="comment">
  <id class="id">... id ....</div>
  <id class="name">... name ....</div>
  <id class="email">... email ....</div>
  <id class="body">... body ....</div>
</div>

[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },...
]
*/