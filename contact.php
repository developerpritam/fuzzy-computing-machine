<?php
//get data from form  
if (isset($_POST["submit"])){
    $name = $_POST['name'];
    $email= $_POST['email'];
    $subject= $_POST['subject'];
    $message= $_POST['message'];
    echo $name;
}


$to = "webdevpritam@gmail.com";
$subject = $message;

$message = "email: {$email}" $message;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: webdevpritam@gmail.com';

$mail = mail($to,$subject,$message,$headers);

if($mail){
    echo "<script>alert('Mail Send.');</script>";
}else{
    echo "<script>alert('Mail Not Send.');</script>";
}
?>
