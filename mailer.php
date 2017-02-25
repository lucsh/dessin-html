<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection
    // Added hidden input field to prevent SPAM

    // Only process POST reqeusts and verify if field is empty.
    if (($_SERVER["REQUEST_METHOD"] == "POST") && empty($_POST['direccion'])) {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = strip_tags(trim($_POST["company"]));
                $company = str_replace(array("\r","\n"),array(" "," "),$company);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            // http_response_code(400);
            echo "Ocurrio un problema con el envio. ¡Por favor, intentá de nuevo!.";
            exit;
        }

        // Set the recipient email address.
     
        $recipient = "contacto@dessin.com.ar";

        // Set the email subject.
        $subject = "Nuevo contacto de: $name - $company";

        // Build the email content.
        $email_content = "Nombre: $name - $company\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Mensaje:\n$message\n";
        
        // Response email
        $response_email_content = file_get_contents('gracias.html');
        $response_email_to = "$name <$email>";
        $response_email_subject = "Gracias por tu contacto";
        
        // content-type
        $response_email_headers = "MIME-Version: 1.0" . "\r\n";
        $response_email_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $response_email_headers .= 'From: Dessin <contacto@dessin.com.ar>' . "\r\n";
        

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            // http_response_code(200);
            echo "¡Gracias! Tu mensaje fue enviado";
            mail($response_email_to,$response_email_subject,$response_email_content,$response_email_headers);
        } else {
            // Set a 500 (internal server error) response code.
            // http_response_code(500);
            echo "Algo pasó y no pudimos enviar tu mensaje.";
        }

            //Slack

            //JSON  
            $text = "Email: " . $email . "\n\n" .$message;
            $room = "contacto"; 
            $data = "payload=" . json_encode(array(  
                    "username"      =>  $name ." - ". $company,       
                    "channel"       =>  "#{$room}",
                    "text"          =>  $text,
                    "icon_url"      => "http://dessin.com.ar/slack-contacto.png"
                ));
            $url = 'https://hooks.slack.com/services/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';
             
             //Anti SPAM        
             if (!stripos($message, "viagra")){
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
            }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        // http_response_code(403);
        echo "Ocurrio un problema con el envio. ¡Por favor, intentá de nuevo!";
    }	
    
?>