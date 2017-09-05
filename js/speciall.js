$(function () {
  $.ajax({
    url: 'http://127.0.0.1:9091/api/gettopics',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      $('#title').html(template('titleTemplate', data));
    }
  })
})