//ESTA FUNCION OBTIENE EL VALOR
var LoginApi = (function () {
	//TODO: BASE_URL
	//http://192.168.200.63:8080
	var baseUrl = "http://192.168.200.63:8080";
	var PATH = "/login";

	return{

		login: function(email, password){
			return new Promise(function(resolve, reject){

			//CONSTRUIR JSON

			var Ld = {

				email: email,
				password: password

			}

			//prueba
			//resolve(ld);

		$.ajax({
				method: 'POST',
				data: JSON.stringify(Ld),
				url: baseUrl+PATH,
				success: function (data) {
					resolve(data);
				},
				error: function(error){
					reject(error);
				}
		});

		});
}
	}
})();