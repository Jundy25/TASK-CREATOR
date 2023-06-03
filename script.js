


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


        
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement.parentElement;
              div.remove();
            }
        }
        var list = done;
        list.addEventListener('click', function myFunction() {
            list.parentElement.previousElementSibling.classList.toggle("crash");
            list.classList.toggle('clicked');
          });
        
    }
}



var close = document.getElementsByClassName("del");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.remove();
  }
}

