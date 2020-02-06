var approvers = [
  {name: 'Group 1', appr1: 'lakkot83@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 2', appr1: 'michal.lichota@outlook.com', appr2: 'lakkot83@gmail.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 3', appr1: 'michal.lichota@hotmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'nowaera@gmail.com', appr4: '', appr5: ''},
  {name: 'Group 4', appr1: 'nowaera@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'lakkot83@gmail.com', appr4: '', appr5: ''}
]

console.log(approvers);


var $groupName = document.querySelector('.ag-col0');
var $approver1 = document.querySelector('.ag-col1');
var $approver2 = document.querySelector('.ag-col2');
var $approver3 = document.querySelector('.ag-col3');
var $approver4 = document.querySelector('.ag-col4');
var $approver5 = document.querySelector('.ag-col5');

var $agTable = document.querySelector('#ag-table');

function clearTable() {
    $agTable.innerHTML = '';
}

function addListItem(item) {

  var $agTableLine = document.createElement('tr');
  $agTable.appendChild($agTableLine);


  $agTableitem1 = document.createElement('th');
  $agTableitem1.classList.add('ag-col0');
/*
  $agTableButton = document.createElement('button');
  $agTableButton.classList.add('col');
  $agTableButton.classList.add('table-button'); //btn btn-outline-dark align-middle
  $agTableButton.classList.add('btn');
  $agTableButton.classList.add('btn-outline-dark');
  $agTableButton.innerText = item.name;
*/
  var $agTableButton = $('<button type="button" class="btn btn-outline-dark col table-button" data-toggle="modal" data-target="#exampleModal"></button>').text(item.name);
  $($agTableitem1).append($agTableButton);

  $agTableitem2 = document.createElement('td');
  $agTableitem2.classList.add('ag-col1');
  $agTableitem2.classList.add('align-middle');
  $agTableitem2.innerText = item.appr1;

  $agTableitem3 = document.createElement('td');
  $agTableitem3.classList.add('ag-col2');
  $agTableitem3.classList.add('align-middle');
  $agTableitem3.innerText = item.appr2;

  $agTableitem4 = document.createElement('td');
  $agTableitem4.classList.add('ag-col3');
  $agTableitem4.classList.add('align-middle');
  $agTableitem4.innerText = item.appr3;

  $agTableitem5 = document.createElement('td');
  $agTableitem5.classList.add('ag-col4');
  $agTableitem5.classList.add('align-middle');
  $agTableitem5.innerText = item.appr4;

  $agTableitem6 = document.createElement('td');
  $agTableitem6.classList.add('ag-col5');
  $agTableitem6.classList.add('align-middle');
  $agTableitem6.innerText = item.appr5;

  $agTableLine.appendChild($agTableitem1);
  //$agTableitem1.appendChild($agTableButton);
  $agTableLine.appendChild($agTableitem2);
  $agTableLine.appendChild($agTableitem3);
  $agTableLine.appendChild($agTableitem4);
  $agTableLine.appendChild($agTableitem5);
  $agTableLine.appendChild($agTableitem6);

}

clearTable();

approvers.forEach(function(item) {
    addListItem(item);
    console.log(item.appr2);
  });


//remove columns if empty
var approvers2 = []
approvers.forEach(function(item) {
    if (item.appr2 !== '') {
      approvers2.push(item.appr2);
    }
});

if (approvers2.length === 0) {
  document.querySelector('.ag-col2').classList.add('d-none');
  document.querySelector('.ag-head2').classList.add('d-none');
}

var approvers3 = []
approvers.forEach(function(item) {
    if (item.appr3 !== '') {
      approvers3.push(item.appr3);
    }
});

if (approvers3.length === 0) {
  document.querySelector('.ag-col3').classList.add('d-none');
  document.querySelector('.ag-head3').classList.add('d-none');
}

var approvers4 = []
approvers.forEach(function(item) {
    if (item.appr4 !== '') {
      approvers4.push(item.appr4);
    }
});

if (approvers4.length === 0) {
  document.querySelector('.ag-col4').classList.add('d-none');
  document.querySelector('.ag-head4').classList.add('d-none');
}

var approvers5 = []
approvers.forEach(function(item) {
    if (item.appr5 !== '') {
      approvers5.push(item.appr5);
    }
});

if (approvers5.length === 0) {
  document.querySelector('.ag-col5').classList.add('d-none');
  document.querySelector('.ag-head5').classList.add('d-none');
}


$(document).ready(function(){
  $('#search-field').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#ag-table tr').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$("button").click(function() {
    var fired_button = $(this).text();
      index = approvers.findIndex(item => item.name === fired_button);
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = fired_button;
      console.log(recipient); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text(recipient)
      modal.find('#modal-appr1').val(approvers[index].appr1);
      modal.find('#modal-appr2').val(approvers[index].appr2);
      modal.find('#modal-appr3').val(approvers[index].appr3);
      modal.find('#modal-appr4').val(approvers[index].appr4);
      modal.find('#modal-appr5').val(approvers[index].appr5);

    })
});
