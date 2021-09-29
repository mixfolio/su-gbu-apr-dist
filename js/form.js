let max_items = 3;
let count = 2;
let id = max_items + 1 - count;

function AddTr() {
   if (count) {
      id = max_items + 1 - count;
      let new_tr = document.getElementById('pull-request');
      new_tr.insertAdjacentHTML('beforeEnd', '<tr><td>Тип документа</td><td><input id="request_type1" name="request_type' + id + '1" list="aboutlist" class="f-control w-100" type="text" placeholder="Начните вводить тип документа" required></td><td><button type="button" id="button' + id + '" onclick="RemTr(' + id + ')" class="btn btn-primary">Удалить</button></td></tr>' +
         '<tr><td>Описание</td><td><textarea name="description' + id + '" placeholder="Описание документа" required></textarea></td></tr>');
      count--;
      let pull_request = document.getElementById("pull_request");
      pull_request.setAttribute('value', id);
   } else {
      alert('Вы можете добавить в одну заявку только ' + max_items + ' документа!');
   }
};


function RemTr(btn_id) {
   count++;
   let rem_tr = document.getElementById("button" + btn_id);
   rem_tr = rem_tr.parentElement.parentElement;
   rem_tr.nextElementSibling.remove();
   rem_tr.remove();
   //now need to change ID's of recreated tags
   let table = document.getElementById("pull-request");
   let a = 2;
   for (i = 7; i < table.rows.length; i = i + 2) {
      table.rows[i].cells[1].firstChild.setAttribute('name', 'request_type' + a);
      table.rows[i].cells[2].firstChild.setAttribute('id', 'button' + a);
      table.rows[i].cells[2].firstChild.setAttribute('onclick', 'RemTr(' + a + ')');
      table.rows[i + 1].cells[1].firstChild.setAttribute('name', 'description' + a);
      a++
   };
   let pull_request = document.getElementById("pull_request");
   pull_request.setAttribute('value', a - 1);
};
