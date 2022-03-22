<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];

$to = "pritambag426@gmail.com";
$subject = "Mail From codeconia";
$txt ="Name = ". $name . "\r\nEmail = " . $email ."\r\n subject = ". $subject ."\r\nMessage =" . $message;
$headers = "From: noreply@codeconia.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");

?>