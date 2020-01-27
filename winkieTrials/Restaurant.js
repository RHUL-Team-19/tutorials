interface Restaurant{
	String name;
	String address;
	int phone;
}

function RestaurantInfo(Restaurant res){
	alert("Name: " + res.name + " address: " + res.address + " phone: " + res.phone);
}