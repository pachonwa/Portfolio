$to = "phoebachonwa.mehs@gmail.com";
$subject = $_POST['firstName'] . " " . $_POST['lastName'];

$from = $_POST['senderEmail'];


$message = $_POST['message'];

 <!-- // Always set content-type when sending HTML email -->
<!-- $headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; -->

<!-- // More headers  -->
$headers .= "From: $email_from \r\n";
 <!-- $headers .= 'Cc: myboss@example.com' . "\r\n";  -->

mail($to,$subject,$message,$headers);