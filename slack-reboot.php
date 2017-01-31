<?php
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        /*
		token=w2MwHppBTQS8spE7VEpjCr5V
		team_id=T0001
		team_domain=example
		channel_id=C2147483705
		channel_name=test
		timestamp=1355517523.000005
		user_id=U2147483697
		user_name=Steve
		*/
        
        if ($_POST["token"] == "w2MwHppBTQS8spE7VEpjCr5V") {
            $connection = ssh2_connect('centos01.dessinwhs.com', 22);
            ssh2_auth_password($connection, 'root', 'lgRb4125l3n-32');
            $stream = ssh2_exec($connection, 'reboot');
            $text = "Reinicio en progreso . . .";
            $text = json_encode(array("text"          =>  $text));
            echo $text;
        }else{
	echo "invalid token\n";
	echo $_POST["token"];
	}
	
    }

echo "correct";

?>
