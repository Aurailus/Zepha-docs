<?php
$file = $_SERVER['DOCUMENT_ROOT'] . '/page/' . $_GET['page'] . '.md';
if (!file_exists($file)) {
	header("HTTP/1.0 404 Not Found");
	require('../404.php');
	die();
}
?>
<!DOCTYPE html>
<html>
	<head>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"; ?>
		<title>Zepha Docs</title>
	</head>
	<body>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>
		<main id="page">
			<div class="page-wrapper">
				<div class="page-content line-numbers">
					<?php
						echo (new ParsedownExtra())->text(file_get_contents($file)); 
					?>
			</div>
		</main>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>
		<script src="/script/page.js"></script>
		<script src="/res/prism/prism.js"></script>
	</body>
</html>
