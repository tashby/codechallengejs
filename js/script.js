/*root url*/
var root = 'https://jsonplaceholder.typicode.com';

/*Loading User 1 albums and appending to div*/
$.ajax({
  url: root + '/albums?userId=1',
  method: 'GET',
  success: function(data) {
    $("#user1table").html('');
    var user1tablecontent = '';
    for (var i = 0; i < data.length; i++) {
      user1tablecontent += '<li id=' + data[i].userId + data[i].id + ' draggable="true" ondragstart="drag(event)">' + data[i].id + ' | ' + data[i].title + '</li>';
    }
    $("#user1table").append(user1tablecontent);
    $("#user1table li").css("background-color", function(index) {
      return index % 2 == 0 ? "teal" : "white";
    });
  },
});

/*Loading User 2 albums and appending to div*/
$.ajax({
  url: root + '/albums?userId=2',
  method: 'GET',
  success: function(data) {
    $("#user2table").html('');
    var user2tablecontent = '';
    for (var i = 0; i < data.length; i++) {
      user2tablecontent += '<li id=' + data[i].userId + data[i].id + ' draggable="true" ondragstart="drag(event)">' + data[i].id + ' | ' + data[i].title + '</li>';
    }
    $("#user2table").append(user2tablecontent);
    $("#user2table li").css("background-color", function(index) {
      return index % 2 == 0 ? "teal" : "white";
    });
  },
});

/*Allow dropping of item*/
function allowDrop(ev) {
  ev.preventDefault();
}

/*Allow dragging of item*/
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

/*On drop post request*/
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  $.ajax({
    url: root + '/albums',
    method: 'POST',
    data: {
      'userId': 'userId'
    },
    success: function(data) {
      console.log("success! UserId updated");
    },
  });

}
