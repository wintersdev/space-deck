$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UCLA_DiR1FfKNvjuUpBHmylQ",
      dataType: "xml",
      success: parseXmlNasa
     });
  });
    
function parseXmlNasa(xml)
  {
    $("#nasa").html("");
    $(xml).find("entry").each(function()
    {
        $("#nasa").append("<div class='col-xl-4'><div class='card text-white p-5px mb-3'> <div style='' class='overflow-hidden'> <img src='"+$(this).find("media\\:thumbnail").attr("url")+"' class='card-img' style='width: 100%; height: 100%;'/> </div><div class='card-img-overlay d-flex flex-column bg-gray-600 bg-opacity-75 m-5px' style='z-index: 20'> <div class='flex-fill'> <div class='d-flex align-items-center'> <h6>"+$(this).find("name").text()+"</h6> <div class='dropdown ms-auto'> <a href='#' class='text-white' data-bs-toggle='dropdown'><i class='fa fa-ellipsis-h'></i></a> <div class='dropdown-menu dropdown-menu-end'> <a href='"+$(this).find("link").attr("href")+"' target='_blank'> Visit Channel</a> </div></div></div></div><div> <a href='//www.youtube.com/watch?v="+$(this).find("id").text().substring(9, 50)+"' class='text-white text-decoration-none d-flex align-items-center' data-lity=''> <div class='bg-gradient-red w-50px h-50px rounded-3 d-flex align-items-center justify-content-center'> <i class='fa fa-play'></i> </div><div class='ms-3 flex-1'> <div class='fw-bold'>"+$(this).find("title").text()+"</div><div class='fs-13px'> <i class='far fa-eye'></i> "+$(this).find("media\\:statistics").attr("views")+" <i class='far fa-clock ms-3'></i>"+$(this).find("published").text().substring(0, 10)+"</div></div></a> </div></div><div class='card-arrow'> <div class='card-arrow-top-left'></div><div class='card-arrow-top-right'></div><div class='card-arrow-bottom-left'></div><div class='card-arrow-bottom-right'></div></div></div></div>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UCIBaDdAbGlFDeS33shmlD0A",
      dataType: "xml",
      success: parseXmlEsa
     });
  });
    
function parseXmlEsa(xml)
  {
    $("#esa").html("");
    $(xml).find("entry").each(function()
    {
        $("#esa").append("<div class='col-xl-4'><div class='card text-white p-5px mb-3'> <div style='' class='overflow-hidden'> <img src='"+$(this).find("media\\:thumbnail").attr("url")+"' class='card-img' style='width: 100%; height: 100%;'/> </div><div class='card-img-overlay d-flex flex-column bg-gray-600 bg-opacity-75 m-5px' style='z-index: 20'> <div class='flex-fill'> <div class='d-flex align-items-center'> <h6>"+$(this).find("name").text()+"</h6> <div class='dropdown ms-auto'> <a href='#' class='text-white' data-bs-toggle='dropdown'><i class='fa fa-ellipsis-h'></i></a> <div class='dropdown-menu dropdown-menu-end'> <a href='"+$(this).find("link").attr("href")+"' target='_blank'>Visit Channel</a> </div></div></div></div><div> <a href='//www.youtube.com/watch?v="+$(this).find("id").text().substring(9, 50)+"' class='text-white text-decoration-none d-flex align-items-center' data-lity=''> <div class='bg-gradient-red w-50px h-50px rounded-3 d-flex align-items-center justify-content-center'> <i class='fa fa-play'></i> </div><div class='ms-3 flex-1'> <div class='fw-bold'>"+$(this).find("title").text()+"</div><div class='fs-13px'> <i class='far fa-eye'></i> "+$(this).find("media\\:statistics").attr("views")+" <i class='far fa-clock ms-3'></i>"+$(this).find("published").text().substring(0, 10)+"</div></div></a> </div></div><div class='card-arrow'> <div class='card-arrow-top-left'></div><div class='card-arrow-top-right'></div><div class='card-arrow-bottom-left'></div><div class='card-arrow-bottom-right'></div></div></div></div>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UCVTomc35agH1SM6kCKzwW_g",
      dataType: "xml",
      success: parseXmlSc
     });
  });
    
function parseXmlSc(xml)
  {
    $("#spacecom").html("");
    $(xml).find("entry").each(function()
    {
        $("#spacecom").append("<div class='col-xl-4'><div class='card text-white p-5px mb-3'> <div style='' class='overflow-hidden'> <img src='"+$(this).find("media\\:thumbnail").attr("url")+"' class='card-img' style='width: 100%; height: 100%;'/> </div><div class='card-img-overlay d-flex flex-column bg-gray-600 bg-opacity-75 m-5px' style='z-index: 20'> <div class='flex-fill'> <div class='d-flex align-items-center'> <h6>"+$(this).find("name").text()+"</h6> <div class='dropdown ms-auto'> <a href='#' class='text-white' data-bs-toggle='dropdown'><i class='fa fa-ellipsis-h'></i></a> <div class='dropdown-menu dropdown-menu-end'> <a href='"+$(this).find("link").attr("href")+"' target='_blank'>Visit Channel</a> </div></div></div></div><div> <a href='//www.youtube.com/watch?v="+$(this).find("id").text().substring(9, 50)+"' class='text-white text-decoration-none d-flex align-items-center' data-lity=''> <div class='bg-gradient-red w-50px h-50px rounded-3 d-flex align-items-center justify-content-center'> <i class='fa fa-play'></i> </div><div class='ms-3 flex-1'> <div class='fw-bold'>"+$(this).find("title").text()+"</div><div class='fs-13px'> <i class='far fa-eye'></i> "+$(this).find("media\\:statistics").attr("views")+" <i class='far fa-clock ms-3'></i>"+$(this).find("published").text().substring(0, 10)+"</div></div></a> </div></div><div class='card-arrow'> <div class='card-arrow-top-left'></div><div class='card-arrow-top-right'></div><div class='card-arrow-bottom-left'></div><div class='card-arrow-bottom-right'></div></div></div></div>");
    });  
    }