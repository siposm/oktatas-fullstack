<?php
    if(isset($_GET["name"]) && isset($_GET["job"])) {
        $name = $_GET["name"];
        $job = $_GET["job"];
    
        echo "Hello dear " . $name . " " . $job;
    }
    else echo "No params given!";
?>