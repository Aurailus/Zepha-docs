<!DOCTYPE html>
<html>
	<head>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>
		<title>Zepha Docs</title>
	</head>
	<body id="index">
		<main>
			<header>
				<div class="header_body">
					<span class="text"><span class="title">Zepha Documentation</span></span>
				</div>
			</header>
			<div class="container">
				<div class="wrap">
					<h1 class="title">Glossary</h1>
					<div class="col">
						<div class="ignore">
						<?php
						$lastLetter = "";
						$files = scandir($_SERVER['DOCUMENT_ROOT'] . "/pages");
						function cmp($a, $b) {
							$a = preg_replace("/(\.md$)/", "", preg_replace("/(^zeus\.)/", "", $a));
							$b = preg_replace("/(\.md$)/", "", preg_replace("/(^zeus\.)/", "", $b));
							return (substr($a, 0, 1) > substr($b, 0, 1));
						}
						usort($files, "cmp");

						foreach ($files as $file) {
							if ($file != "." && $file != "..") {
								$name = preg_replace("/(\.md$)/", "", preg_replace("/(^zeus\.)/", "", $file));
								$letter = substr($name, 0, 1);
								if ($letter != $lastLetter) {
									$lastLetter = $letter;
									echo "</div><div class='category'><h1>" . strtoupper($letter) . "</h1>";
								}
								echo "<p class='entry'><a href='/" . preg_replace("/(\.md$)/", "", $file) . "'>" . preg_replace("/(\.md$)/", "", $file) . '</a></p>';
							}
						}
						?></div>
						
					</div><div class="col"></div>
				</div>
			</div>
		</main>
		<script src="/script/index.js"></script>
	</body>
</html>
