function add(){
    var btn = document.getElementById('int').value;
    if (btn == ""){
        alert("Please Enter a Task!");
        return false;
    }
    else{
        const con = document.querySelector('.content');
        const addition = document.createElement('div');
        addition.className = 'addition';
        addition.id = 'task-cont';
        con.append(addition);

        const desc = document.createElement('div');

        desc.className = 'desc';
        desc.id = 'desc';
        desc.innerText = btn;
        addition.append(desc);

        const buttons = document.createElement('div');

        buttons.className = 'buttons';
        buttons.id = 'buttons';


        const done = document.createElement('button');

        done.className = 'done';
        done.id = 'done';
        done.innerText = 'Done';
        buttons.append(done);

        const del = document.createElement('button');

        del.className = 'del';
        del.id = 'del';
        del.innerText = 'Delete';
        buttons.append(del);

        addition.append(buttons);
    }

}
const element = document.getElementById("del");
element.addEventListener("click", myFunction);

element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("task-cont").remove();
}
