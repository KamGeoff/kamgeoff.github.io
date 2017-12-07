<?
function clean_data($data){
	$data = strip_tags($data);
	$data = htmlentities($data);
	$data = trim($data);
	$data = htmlspecialchars($data);
	$data = stripcslashes($data);
	$data = mysql_real_escape_string($data);
	return $data;
}
if(isset($_POST['submit'])){
	if(
	(isset($_POST['firstname']) && $_POST['firstname'] !="") &&
	(isset($_POST['email']) && $_POST['email'] !="") &&
	(isset($_POST['phone']) && $_POST['phone'] !="") &&
	(isset($_POST['message']) && $_POST['message'] !="")
	){
		$firstname = clean_data($_POST['firstname']);
		$email = clean_data($_POST['email']);
		$phone = clean_data($_POST['phone']);
		$message = clean_data($_POST['message']);
		mail('benetmugy@gmail.com', 'Contact form', $message, 'From: ' . $email);
		echo '<span class="errors">Sent Successfully</span>';
	}
}






















?>