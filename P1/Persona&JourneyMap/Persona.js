/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.7DeadlySins";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Mario García",
				Photo: "Mario.jpg",
				Quote: "Mens sana in corpore sano",
				Age: 28,
				Occupation: "Mecánico en el taller familiar",
				Family: "Con pareja desde hace 5 años",
				Location: "Toledo (Talavera de la Reina)",
				Character: "Estar en buena forma",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Pasear con su pareja y viajar con ella", "Formar una familia","Comprar una casa","Casarse con su pareja"],
				Frustrations: ["Le cuesta mantener la calma en situaciones de estrés", "Le hubiese gustado tener estudios superiores", "No ha visitado muchos lugares a su edad"],
				Bio: "Nació y creció en Talavera de la Reina, nunca se le dieron bien los estudios y repitió curso varias veces. Acabó la ESO y se puso a trabajar con su padre en el taller de su familia. Lleva 10 años trabajando y está contento con su trabajo, tiene buena relación con sus compañeros y le gusta salir en parejas. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva un tiempo pensando en pedirle matrimonio a su pareja y planea hacerlo en un viaje con sus amigos",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3	 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Paloma Hurtado",
				Photo: "Paloma.jpg",
				Quote: "¡Vamos a exprimir la vida!",
				Age: 23,
				Occupation: "Influencer de moda",
				Family: "Padres y hermana gemela",
				Location: "Barcelona",
				Character: "Ser visible en las redes",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar y explorar nuevos lugares", "Tener su propia línea de ropa", "Ganar seguidores"],
				Frustrations: ["Su carrera de influencer no termina de despegar","No le va bien económicamente ni laboralmente"],
				Bio: "Nació y creció en Barcelona, en donde estudió la carrera de diseño de moda. Se lleva bien con sus padres y mantiene una relación especial con su hermana gemela, la cual la ayuda a llevar sus redes sociales. Lleva 2 años en Tiktok y 3 en Instagram, se ha hecho viral en varias ocasiones y desde entonces quiere dedicarse a las redes.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "De pequeña fue en familia a visitar la Alhambra y recuerda las vacaciones con especial cariño. Por eso quiere volver con su hermana y así aprovechar el viaje para compartirlo en sus redes." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])