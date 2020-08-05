<?
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	header('Content-Type: text/html; charset=utf-8');

	$headers = "Content-type: text/plain; charset = \"utf-8\"";

	$to = 'dn190@yandex.ru';

	if (isset($_POST["email1"])) {
		$subject = "Subscribe";

		$email1 = htmlspecialchars($_POST["email1"]);
		$ip1 = $_SERVER["REMOTE_ADDR"];

		$message = "Subscribe Form \nE-mail - ".$email1." \nIP - ".$ip1;

		$errors = "";
		if (empty($email1)) $errors .= "Empty \"E-mail\"<br><a href='/'>Go to frontpage</a><br>";

		if (empty($errors)) {
			mail($to, $subject, $message, $headers);
		}
		else if (!empty($errors)) {
			echo $errors;
		}
		else {
			echo "Error! Try again!";
		}
	} elseif (isset($_POST["email2"])) {
		$subject = "Callback";

		$name2 = htmlspecialchars($_POST["name2"]);
		$phone2 = htmlspecialchars($_POST["phone2"]);
		$email2 = htmlspecialchars($_POST["email2"]);
		$mess2 = htmlspecialchars($_POST["mess2"]);
		$ip2 = $_SERVER["REMOTE_ADDR"];

		$message = "Callback \nName - ".$name2." \nPhone - ".$phone2." \nE-mail - ".$email2." \nMessage - ".$mess2." \nIP - ".$ip2;

		$errors = "";
		if (empty($name2)) $errors .= "Empty \"Name\"<br><a href='/'>Go to frontpage</a><br>";
		if (empty($phone2)) $errors .= "Empty \"Phone\"<br><a href='/'>Go to frontpage</a><br>";
		if (empty($email2)) $errors .= "Empty \"E-mail\"<br><a href='/'>Go to frontpage</a><br>";

		if (empty($errors)) {
			mail($to, $subject, $message, $headers);
		}
		else if (!empty($errors)) {
			echo $errors;
		}
		else {
			echo "Error! Try again!";
		}
	}  elseif (isset($_POST["email3"])) {
		$subject = "Get a special deals";

		$email3 = htmlspecialchars($_POST["email3"]);
		$ip3 = $_SERVER["REMOTE_ADDR"];

		$message = "Get a special deals Form \nE-mail - ".$email3." \nIP - ".$ip3;

		$errors = "";
		if (empty($email3)) $errors .= "Empty \"E-mail\"<br><a href='/'>Go to frontpage</a><br>";

		if (empty($errors)) {
			mail($to, $subject, $message, $headers);
		}
		else if (!empty($errors)) {
			echo $errors;
		}
		else {
			echo "Error! Try again!";
		}
	} elseif (isset($_POST["email4"])) {
		$subject = "Callback";

		$name4 = htmlspecialchars($_POST["name4"]);
		$phone4 = htmlspecialchars($_POST["phone4"]);
		$email4 = htmlspecialchars($_POST["email4"]);
		$ip4 = $_SERVER["REMOTE_ADDR"];

		$message = "Callback \nName - ".$name4." \nPhone - ".$phone4." \nE-mail - ".$email4." \nIP - ".$ip4;

		$errors = "";
		if (empty($name4)) $errors .= "Empty \"Name\"<br><a href='/'>Go to frontpage</a><br>";
		if (empty($phone4)) $errors .= "Empty \"Phone\"<br><a href='/'>Go to frontpage</a><br>";
		if (empty($email4)) $errors .= "Empty \"E-mail\"<br><a href='/'>Go to frontpage</a><br>";

		if (empty($errors)) {
			mail($to, $subject, $message, $headers);
		}
		else if (!empty($errors)) {
			echo $errors;
		}
		else {
			echo "Error! Try again!";
		}
	} else {
		header('Location: /');
		exit();
	}

} else {
	header('Location: /');
	exit();
}
?>