<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

if(empty($name) || empty($email) || empty($message)){
    echo "<script>alert('Please fil')</script>";
}else{
mail("pritambag426@gmail.com", $subject, $message, "From: $name <$email>");
echo "<script>alert('Message send successfully')
window.history.log(-1);
</script>";
}
?>
