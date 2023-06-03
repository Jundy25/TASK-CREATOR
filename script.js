function add(){
    var btn = document.getElementById('int').value;
    if (btn == ""){
        alert("Please Enter a Task!");
        return false;
    }
    else{
        document.getElementById('int').value = "";
        let con = document.querySelector('.content');
        let addition = document.createElement('div');
        addition.className = 'addition';
        addition.id = 'task-cont';
        con.append(addition);

        let desc = document.createElement('div');

        desc.className = 'desc';
        desc.id = 'desc';
        desc.innerText = btn;
        addition.append(desc);

        let buttons = document.createElement('div');

        buttons.className = 'buttons';
        buttons.id = 'buttons';

        let done = document.createElement('button');

        done.className = 'done';
        done.id = 'done';
        done.innerText = 'Done';
        buttons.append(done);
        let del = document.createElement('button');

        del.className = 'del';
        del.id = 'del';
        del.innerText = 'Delete';
        buttons.append(del);

        addition.append(buttons);

        var list = done;
        list.addEventListener('click', function doneclick() {
            list.parentElement.previousElementSibling.classList.toggle("crash");
            list.classList.toggle('clicked');
          });
        
        var delbtn = del;
        delbtn.addEventListener('click', function delclick() {
            del.parentElement.parentElement.remove();
          });
    }
}
