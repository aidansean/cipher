<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/cipher" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=cipher" ;
$project = new project_object("cipher", "Ciphers", "https://github.com/aidansean/cipher", "http://aidansean.com/projects/?tag=cipher", "cipher/images/project.jpg", "cipher/images/project_bw.jpg", "This page contains some simple ciphers. This was going to be extended to include some more sophisticated ciphers, but I didn't have the time or incentive to develop this page further.", "Maths", "CSS,HTML,JavaScript") ;
?>