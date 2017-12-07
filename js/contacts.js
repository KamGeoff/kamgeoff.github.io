$(document).ready(function(){
				$("#submit").click(function(){
					var firstname = $("#firstname").val();
					var email = $("#email").val();
					var phone = $("#phone").val();
					var message = $("#message").val();
					var submit = $("#submit").val();
					var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
					var dataString = 'firstname='+ firstname + '&email='+ email + '&phone='+ phone + '&message='+ message + '&submit='+ submit;
					if(firstname == '' || email == '' || phone == '' || message ==''){
						$('#contactModal').modal('show');
					}else if(!reEmail.test(email)){
						$('#emailModal').modal('show');
					}else if(phone !== "" && !$.isNumeric(phone)){
						$('#phoneModal').modal('show');
					}else{
						$.ajax({
							type: "POST",
							url: "send_contacts.php",
							data: dataString,
							cache: false,
							success: function(result){
								$("#status").html(result);
								$("#statuso").modal('show');
							}
						});
					}
					return false;	
				});
			});