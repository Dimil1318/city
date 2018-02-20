ymaps.ready(init);
	var myMap,
        myPlacemark;
	var  secondGeoObject;
	var proverka;
	
function init() {
   
var firstGeoObject
   
        ymaps.geocode('Нижний Новгород', { results: 1 }).then(function (res) {
        // Выбираем первый результат геокодирования.
         firstGeoObject = res.geoObjects.get(0),
        // Создаем карту с нужным центром.
            myMap = new ymaps.Map("map", {
                center: firstGeoObject.geometry.getCoordinates(),
                zoom: 4
            });
			
        
		
		})
   

}


function label(city){
	ymaps.geocode(city, { results: 1 }).then(function (res) {
		
		
		 secondGeoObject = res.geoObjects.get(0);
		
if (secondGeoObject != null) {
	 myPlacemark = new ymaps.Placemark(secondGeoObject.geometry.getCoordinates(), {
   
    iconContent: city
}, {
    preset: "twirl#yellowStretchyIcon",
 
    balloonCloseButton: false,
    
    hideIconOnBalloonOpen: false
});

        myMap.geoObjects.add(myPlacemark)
		
}
		
		})
}






function label1(city){
	ymaps.geocode(city, { results: 1 }).then(function (res) {
		
		 proverka = true;
		 secondGeoObject = res.geoObjects.get(0);
		
if (secondGeoObject == null) {
proverka = false;
return proverka;
		
}
		
		})
}
