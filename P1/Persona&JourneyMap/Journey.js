/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.7DeadlySins";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Mario García",
                Photo: "Mario.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su pareja, sus amigos de la infacia (en total son 6) para pedirle matrimonio a su novia",
                touch1: "Agenda",
                feel1: "5",
                con1: "Pedirse vacaciones en el trabajo y que coincidan con las fechas disponibles del resto",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar alojamiento y actividades en internet para esas fechas",
                touch2: "Ordenador",
                feel2: "2",
                con2: "No sabe en qué páginas buscar información sobre el alojamiento o las actividades",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Su mejor amigo le envía la página de un hostal céntrico en Granada y busca la disponibilidad en las fechas acordadas",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Tiene que reservar él y no sabe cómo distribuir las habitaciones",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Él y sus amigos buscan actividades y lugares de ocio donde hacer la pedida de mano",
                touch4: "Móvil",
                feel4: "1",
                con4: "No encuentra el momento ni la forma de hacer la pedida de mano",
                ima4: "cartoon-teamthinking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "En la página descubre un club al que el hostel le da acceso gratuito (Arena Club)",
                touch5: "Móvil",
                feel5: "4",
                con5: "Sus amigos no le responden si le parece bien o no pero a él le gusta",
                ima5: "cartoon-happy.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al final consigue organizar el viaje",
                touch6: "Ordenador",
                feel6: "3",
                con6: "Algún amigo no le dijo su preferencia a la hora de las habitaciones y las reservó como él quiso",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Paloma Hurtado",
                Photo: "Paloma.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su hermana a Granada",
                touch1: "Google Calendar",
                feel1: "4",
                con1: "Su hermana está muy ocupada y no tiene claro cuándo podrá ir",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Su hermana elige vacaciones en el trabajo y comienzan a mirar alojamientos",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Tienen presupuesto limitado y no saben muy bien dónde buscar sitios baratos",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le preguntan a sus padres que dónde se alojaron cuando fueron de pequeñas",
                touch3: "Móvil (llamada)",
                feel3: "3",
                con3: "No se acuerdan porque fue hace mucho tiempo",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Les sale un anuncio en redes de Booking y encuentran un hostel barato",
                touch4: "Móvil (Instagram)",
                feel4: "1",
                con4: "El precio se ajusta al presupuesto, pero no hay disponibilidad en esas fechas",
                ima4: "cartoon-PCcrying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentran por Booking también, la página del 4U Hostel",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "No es tan barato como el anterior pero en este sí que hay disponibilidad",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Hacen la reserva desde la página",
                touch6: "Ordenador",
                feel6: "2",
                con6: "Como ha sido más caro de lo previsto tienen menos presupuesto para otras actividades",
                ima6: "cartoon-PCtyping.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



