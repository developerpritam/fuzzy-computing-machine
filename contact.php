<?php
// php mail send code ======================
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$email_from = $email;

$email_subject = $subject;

$email_body = "Name: $name.\n".
              "Email: $email.\n".
              "Subject: $subject.\n".
              "Message: $message.\n";

$to = "youremail@gmail.com"; /*  you can replace this email to your email <<==============  */

$headers = "From: $email_from \r\n";
$headers = "Reply-To: $email \r\n";
mail($to,$email_subject,$email_body,$headers);

header("location: index.html");

?>