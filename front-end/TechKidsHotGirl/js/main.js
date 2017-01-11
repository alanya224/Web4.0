var loadedData = [];
var isRequestingNextPage = false;
var firstLoad = true;
$(document).ready(function(){
  var itemTemplate = Handlebars.compile($("#item-template").html());
  var itemModalTemplate = Handlebars.compile($("#item-modal-template").html());

  requestNextPage(itemTemplate);

  $('body').on('click', '.plus_button', function(){
    var itemId = $(this).attr('data-item-id'); //?

    for(var i=0; i< loadedData.length; i++){
      var itemData = loadedData[i];
      if(itemData.id == itemId){
        // Found item, populating data
        $("#item_modal_body").html(itemModalTemplate(itemData)); //?
        break;
      }
    }

    $("#item_modal").modal("show");
  });


  $(window).on('scroll',function(){
    if(isRequestingNextPage) return;

    if($(window).scrollTop() + window.innerHeight > $('body').height() - 200){
        $(".item_loader").css({'display': 'flex'});
      setTimeout(function(){requestNextPage(itemTemplate)},2000);
      isRequestingNextPage = true;
    }
    else {
      $(".item_loader").css({'display': 'none'});
    }
  });

});

function requestNextPage(itemTemplate){
  $.ajax({
    type  : "get",
    url   : "imagesData.json"
  }).then(function(data){
    loadedData = loadedData.concat(data.items);

    var itemHtml = $(itemTemplate(data));
    $("#item_list").append(itemHtml);
    if (firstLoad){
      // $('#item_list').masonry({
      //   itemSelector: '.item_container',
      //   columnWidth: '.item_container',
      //   percentPosition: true
      // });
      $('#item_list').imagesLoaded().done(function(){
        $('#item_list').masonry({
          itemSelector: '.item_container',
          columnWidth: '.item_container',
          percentPosition: true
        });
      });
      firstLoad = false;
    }
    else{
      $("#item_list").imagesLoaded().done( function() {
        $("#item_list").masonry('appended',itemHtml);
        });
    }
  }).fail(function(error){
    console.log(error);
  }).always(function(){ //then hay fail thì vẫn gọi
    isRequestingNextPage = false;
  });
}
