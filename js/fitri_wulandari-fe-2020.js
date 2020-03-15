(function(){
    var results = document.getElementById("results");

fetch("js/hosting.json", {
    mode: 'cors'
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    var list = "";
    data.forEach(function(item) {
        // data hosting
        list += '<div class="col">'
        list += '<div class="sub-box">'
        list += '<div class="title">'+item.name+'</div>'
        list += '<div class="price">'
        list += item.price+'<small>/'+item.time+'</small>'
        list += '</div>'
        list += '<div class="spec">'
        list += '<ul>'
        list += '<li>'+item.specifikasi.space+'</li>'        
        list += '<li>'+item.specifikasi.bandwidth+'</li>'        
        list += '<li>'+item.specifikasi.website+'</li>'        
        list += '<li>'+item.specifikasi.email+'</li>'        
        list += '<li>'+item.specifikasi.domain+'</li>'        
        list += '<li>'+item.specifikasi.ssh+'</li>'        
        list += '</ul>'
        list += '</div>'
        list += '<a href="#" class="btn btn-more">Pesan</a>'
        list += '</div>'
        list += '</div>';
    });
    $('#list-hosting').html(list);

  })


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#00B0FF";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}
})();