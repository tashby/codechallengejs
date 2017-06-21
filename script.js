

    var root = 'https://jsonplaceholder.typicode.com';


  /* $.ajax({
      url: root + '/albums?userId=1',
      method: 'GET',
    }).then(function(data) {
      console.log(data);
      $("#user1table").append(JSON.stringify(data));
    });
*/

$.ajax({
  url: root + '/albums?userId=1',
  method: 'GET',
  success: function (data) {
    $("#user1table").html('');
    var user1tablecontent = '';
    for (var i = 0; i < data.length; i++)
    {
      user1tablecontent += '<li id= user1'+data[i].id+' draggable="true" ondragstart="drag(event)">' + data[i].id + ' | ' + data[i].title + '</li>';
    }
    $("#user1table").append(user1tablecontent);
  },
});

    $.ajax({
      url: root + '/albums?userId=2',
      method: 'GET',
      success: function (data) {
        $("#user2table").html('');
        var user2tablecontent = '';
        for (var i = 0; i < data.length; i++)
        {
          user2tablecontent += '<li id= user2'+data[i].id+' draggable="true" ondragstart="drag(event)">' + data[i].id + ' | ' + data[i].title + '</li>';
        }
        $("#user2table").append(user2tablecontent);
      },
    });


    function allowDrop(ev) {
       ev.preventDefault();
   }

   function drag(ev) {
       ev.dataTransfer.setData("text", ev.target.id);
   }

   function drop(ev) {
       ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       ev.target.appendChild(document.getElementById(data));
   }
