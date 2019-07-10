$(function () {
  $('ul.sortable').sortable({
    connectWith: 'ul.sortable',
    placeholder: 'placeholder',
    update: function (e) {
      // console.log(e);
      var container = e.target;
      var deplaced = e.toElement;
      
      var kind = container.getAttribute("data-type")
      deplaced.closest("li").childNodes[0].nodeValue = kind;
    },
    start: function (e) {
      var deplaced = e.toElement;
      deplaced.closest("li").childNodes[0].nodeValue = "";
    },
    stop: function (e) {
    },

  }).disableSelection();
});
