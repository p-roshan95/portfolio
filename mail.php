<?php
    $to = 'roshan.prabhu70@gmail.com';
    $firstname = $_POST["name"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $subject= $_POST["subject"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr><td>Name: '.$firstname.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Name: '.$subject.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
