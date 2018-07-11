//ESTA FUNCION OBTIENE EL VALOR
function login() {
	var email = $("#email").val();
	var password = $("#password").val();

	LoginApi.login(email, password) //AQUI RECIBE ESTOS VALORES
	.then(function(response){
		console.log("Successfully : ", response);
		
		var token = response.token;
		window.localStorage.setItem("token", token);
		window.location = "index.html";
			//TODO: REGISTRAR EL TOKEN EN LOCAL STORAGE
			//TODO: DEBEMOS REDIRECCIONAR A INDEX


		})

	.catch(function(error){
		alert("Error: Intente de Nuevo");
		console.log("Error : ", error);

	});
}

	function register() {
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var password2 = $("#password2").val();


		if (password != password2){
			alert("Las Contraseña son diferentes.");
			return;

		}

	LoginApi.register(email, password, name) //AQUI RECIBE ESTOS VALORES
	.then(function(response){
		console.log("Successfully : ", response);
		login();

	})

	.catch(function(error){
		alert("Error: Intente de Nuevo");
		console.log("Error : ", error);

	});

}

window.onload = function(){

	$("#btnLogin").click(function(){

		login();

	});
	$("#btnRegister").click(function(){

		register();
	});
}	