interface Restaurant{
	name : string;
	address : string;
	phone : number;
}

function RestaurantInfo(res : Restaurant){
	alert("Name: " + res.name + " address: " + res.address + " phone: " + res.phone);
}