          //text(),html(),append(),prepend(),after(),before()

//$(".my-div h1").text("hi");

//$("#p1").text("hello");

//$("#p1,h1").text("hello");

//$("p,h1").text("hello");

//$("#p1").html("<b> hello </b>");

//$("#p1").append(" hello ");

//$("#p1").prepend(" hello ");

var mypara1=$("<p> </p>").text("This is paragraph 0");
//$("#p1").after(mypara1);
$("#p1").before(mypara1);