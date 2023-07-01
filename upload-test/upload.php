<?php
// Moves uploaded file to a nice directory
$targetPath = "uploads/" , basename($_FILES["inpFile"]["name"]):
move_uploaded_file ($.FILES["inpFile"]["tmp_name"], $targetPath);
