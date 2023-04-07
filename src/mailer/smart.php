<?php 

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'adobchik2022@gmail.com';                 // Наш логин
$mail->Password = 'pkyreknqviufhbhn';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('adobchik2022@gmail.com', 'HolaFashion');   // От кого письмо 
$mail->addAddress('andreypetrychenko@ukr.net');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Data';
$mail->Body    = '
		User left data <br> 
	First name: ' . $firstname . ' <br>
	Last name: ' . $lastname . '<br>
	Subject: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>