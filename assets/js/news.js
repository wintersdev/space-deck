// NASA FEEDS

$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/breaking_news.rss",
    dataType: "xml",
    success: parseXmlBreaking
  });
});

function parseXmlBreaking(xml)
{
	$("#nasa-breaking").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-breaking").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/educationnews.rss",
      dataType: "xml",
      success: parseXmlEducation
    });
  });
  
  function parseXmlEducation(xml)
  {
    $("#nasa-education").html("");
    $(xml).find("item").each(function()
    {
      $("#nasa-education").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
    });  
    }

    $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/http://blogs.nasa.gov/stationreport/feed/",
    dataType: "xml",
    success: parseXmlReports
  });
});

function parseXmlReports(xml)
{
	$("#nasa-reports").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-reports").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/onthestation_rss.rss",
    dataType: "xml",
    success: parseXmlStation
  });
});

function parseXmlStation(xml)
{
	$("#nasa-station").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-station").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/mission_pages/kepler/news/kepler-newsandfeatures-RSS.rss",
    dataType: "xml",
    success: parseXmlKepler
  });
});

function parseXmlKepler(xml)
{
	$("#nasa-kepler").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-kepler").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/http://www.nasa.gov/rss/dyn/chandra_images.rss",
    dataType: "xml",
    success: parseXmlChandra
  });
});

function parseXmlChandra(xml)
{
	$("#nasa-chandra").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-chandra").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/shuttle_station.rss",
    dataType: "xml",
    success: parseXmlISS
  });
});

function parseXmlISS(xml)
{
	$("#nasa-iss").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-iss").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/solar_system.rss",
    dataType: "xml",
    success: parseXmlBeyond
  });
});

function parseXmlBeyond(xml)
{
	$("#nasa-beyond").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-beyond").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

  $(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/earth.rss",
    dataType: "xml",
    success: parseXmlEarth
  });
});

function parseXmlEarth(xml)
{
	$("#nasa-earth").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-earth").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/https://www.nasa.gov/rss/dyn/aeronautics.rss",
    dataType: "xml",
    success: parseXmlAero
  });
});

function parseXmlAero(xml)
{
	$("#nasa-aero").html("");
	$(xml).find("item").each(function()
	{
		$("#nasa-aero").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>NASA</span></td></tr>");
	});  
  }

// ESA FEEDS

$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Space_News",
    dataType: "xml",
    success: parseXmlSpace
  });
});

function parseXmlSpace(xml)
{
	$("#esa-space").html("");
	$(xml).find("item").each(function()
	{
		$("#esa-space").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
	});  
  }

  $(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Observing_the_Earth",
      dataType: "xml",
      success: parseXmlObserve
    });
  });
  
  function parseXmlObserve(xml)
  {
    $("#esa-earth").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-earth").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Human_Spaceflight",
      dataType: "xml",
      success: parseXmlSpaceflight
     });
  });
    
function parseXmlSpaceflight(xml)
  {
    $("#esa-spaceflight").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-spaceflight").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Launchers",
      dataType: "xml",
      success: parseXmlLaunchers
     });
  });
    
function parseXmlLaunchers(xml)
  {
    $("#esa-launchers").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-launchers").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Navigation",
      dataType: "xml",
      success: parseXmlNavigation
     });
  });
    
function parseXmlNavigation(xml)
  {
    $("#esa-navigation").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-navigation").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Space_Science",
      dataType: "xml",
      success: parseXmlScience
     });
  });
    
function parseXmlScience(xml)
  {
    $("#esa-science").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-science").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Space_Engineering_Technology",
      dataType: "xml",
      success: parseXmlEngineering
     });
  });
    
function parseXmlEngineering(xml)
  {
    $("#esa-engineering").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-engineering").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Operations",
      dataType: "xml",
      success: parseXmlOperations
     });
  });
    
function parseXmlOperations(xml)
  {
    $("#esa-operations").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-operations").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Our_Activities/Telecommunications_Integrated_Applications",
      dataType: "xml",
      success: parseXmlTelecom
     });
  });
    
function parseXmlTelecom(xml)
  {
    $("#esa-telecom").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-telecom").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/http://www.esa.int/rssfeed/Education",
      dataType: "xml",
      success: parseXmlEdu
     });
  });
    
function parseXmlEdu(xml)
  {
    $("#esa-education").html("");
    $(xml).find("item").each(function()
    {
      $("#esa-education").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>ESA</span></td></tr>");
    });  
    }

// SPACE.COM FEED

$(document).ready(function()
  {
    $.ajax({
      type: "GET",
      url: "https://intense-reef-87935.herokuapp.com/https://www.space.com/feeds/all",
      dataType: "xml",
      success: parseXmlSpaceCom
     });
  });
    
function parseXmlSpaceCom(xml)
  {
    $("#space-com").html("");
    $(xml).find("item").each(function()
    {
      $("#space-com").append("<tr><td><a href='"+$(this).find("link").text()+"' target='_blank'><span class='d-flex align-items-center'><i class='bi bi-circle-fill fs-6px text-theme me-2'></i>"+$(this).find("title").text().substring(0, 40)+"...</span></a></td><td><small>"+$(this).find("pubDate").text().substring(0, 16)+"</small></td><td><span class='badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px' style='min-height: 18px'>SPACE.COM</span></td></tr>");
    });  
    }