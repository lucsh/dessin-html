<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $hostname = strip_tags(trim($_POST["name"]));
                $hostname = str_replace(array("\r","\n"),array(" "," "),$hostname);
        $subject = strip_tags(trim($_POST["subject"]));
                $subject = str_replace(array("\r","\n"),array(" "," "),$subject);
        $body = urlencode($_POST["body"]);
        
        /* <EMAIL>
        $mensaje = "hostname: " . $hostname . " subject: " . $subject . " body: " . $body;
        
        $name ='Alert PHP';
        $email = 'donotreply@dessin.com.ar';


        // Set the recipient email address.
     
        $recipient = "lucas@dessin.com.ar";

        // Set the email subject.
        //$subject = "test";

        // Build the email content.
        $email_content = "Nombre: $name - $company\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Mensaje:\n$mensaje\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            // http_response_code(200);
        } else {
            // Set a 500 (internal server error) response code.
            // http_response_code(500);
            echo "Algo pasó y no pudimos enviar tu mensaje.";
        }

        </EMAIL> 

        */

        /** * SLACK * **/
        $text = $subject . "\n\n" .$body;
        $room = "centos01"; 
        $data = "payload=" . json_encode(array(  
            "username"      =>  "cPanel - Centos01" . $hostname,       
            "channel"       =>  "#{$room}",
            "text"          =>  $text,
            "icon_emoji"    =>  ":bangbang:"
        ));
        $url = 'https://hooks.slack.com/services/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';


            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $result = curl_exec($ch);
            //echo var_dump($result);
            if($result === false)
            {
           //     echo 'Curl error: ' . curl_error($ch);
            }
             
            curl_close($ch);

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        // http_response_code(403);
        echo "Ocurrio un problema con el envio. ¡Por favor, intentá de nuevo!";
    }



?>
