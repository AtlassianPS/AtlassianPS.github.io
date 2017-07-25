$(function () {
  var html = '';

  var h1 = $("body").find('h1[id]'),
    h2 = $("body").find('h2[id]'),
    h12 = $("body").find('h1[id], h2[id]'),
    h23 = $("body").find('h2[id], h3[id]');
 
  if (h1.length) {
    if (h1.length > 1) {
      var h1Array = []
      h1.each(function () {
        h1Array.push($(this).clone().children().remove().end().text());
      })
      if (h12.length) {
        var firstRun = true
        h12.each(function () {
          if(h1Array.indexOf($(this).clone().children().remove().end().text()) > -1){
            if(firstRun){
              html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';
              firstRun = false
            } else {
              html += '</ul>';
              html += '</li>';
              html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';
            }
            html += '<ul class="nav">';
          } else {            
            html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a></li>';
          }
          
        });
        html += '</ul>';
        html += '</li>';
      } else {
        h1.each(function () {
          html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a></li>';
        });
      }
    } else {
      var h2Array = []
      h2.each(function () {
        h2Array.push($(this).clone().children().remove().end().text());
      })
      if (h23.length) {
        var firstRun = true
        h23.each(function () {
          if(h2Array.indexOf($(this).clone().children().remove().end().text()) > -1){ //h1.indexOf(this) > -1
            if(firstRun){
              html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';
              firstRun = false
            } else {
              html += '</ul>';
              html += '</li>';
              html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';
            }
            html += '<ul class="nav">';
          } else {            
            html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a></li>';
          }
          
        });
        html += '</ul>';
        html += '</li>';
      } else {
        h1.each(function () {
          html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a>';
        });
      }
    }
  }

  if (html == '') {
    $('[role=complementary]').hide();
    $('[role=main]').toggleClass('col-md-9 col-md-12');
  }
  else {
    $('.bs-docs-sidenav').html(html);
  }

  // build side menu
  // var html = '';

  // $('.bs-docs-section').each(function () {
  //   var h1 = $(this).find('h1[id]').first(),
  //     h23 = $(this).find('h2[id], h3[id]:not([data-no-menu])');

  //   if (h1.length) {
  //     html += '<li><a href="#' + h1[0].id + '">' + h1.clone().children().remove().end().text() + '</a>';

  //     if (h23.length) {
  //       html += '<ul class="nav">';
  //       h23.each(function () {
  //         html += '<li><a href="#' + this.id + '">' + $(this).clone().children().remove().end().text() + '</a></li>';
  //       });
  //       html += '</ul>';
  //     }

  //     html += '</li>';
  //   }
  // });

  // if (html == '') {
  //   $('[role=complementary]').hide();
  //   $('[role=main]').toggleClass('col-md-9 col-md-12');
  // }
  // else {
  //   $('.bs-docs-sidenav').html(html);
  // }

  // add heading anchors
  $('h1[id], h2[id], h3[id], h4[id], h5[id]').each(function () {
    $(this).prepend('<a href="#' + this.id + '" class="anchor-link">§</i>');
  });

  // enable bootbox
  $('[data-bootbox]').on('click', function () {
    var $target = $('#' + $(this).data('bootbox'));
    bootbox.alert({
      title: $target.attr('title'),
      message: $target.html(),
      size: $(this).data('bootbox-size')
    });
  });
});

function trianglify(color1, color2, seed) {
  var header = $('#content');
  var pattern = Trianglify({
    width: window.screen.width | header.outerWidth(),
    height: header.outerHeight(),
    cell_size: 90,
    seed: seed,
    x_colors: [color1, color2]
  });

  header.css('background-image', 'url(' + pattern.png() + ')');
}
