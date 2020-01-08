<!DOCTYPE html>
<html>
	<head>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"; ?>
		<title>Glossary &bullet; Zepha Docs</title>
	</head>
	<body>
		<?php require $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>
		<main id="glossary">
			<div class="page-wrapper">
				<h1 class="page-title">Glossary</h1>
				<div class="glossary-list">
					<?php
						$index = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/page/index.json"), TRUE);
						function cmp($a, $b) {
							if (isset($a["order"])) {
								if (isset($b["order"])) return $a["order"] > $b["order"];
								else return -1;
							}
							else if (isset($b["order"])) return 1;
							return strcasecmp($a["name"], $b["name"]);
						}
						usort($index["dirs"], cmp);
						foreach ($index["dirs"] as $dir) {
							echo "<div class='glossary-category'>";
							echo "<h2>{$dir["name"]}</h2>";
							usort($dir["pages"], cmp);
							foreach ($dir["pages"] as $page) {
								echo "<p><a href='/docs/{$dir["file"]}/{$page["file"]}'>{$page["name"]}</a></p>";
							}
							echo "</div>";
						}
					?>
				</div>
			</div>
		</main>
		<!-- <script src="/script/glossary.js"></script> -->
	</body>
</html>
