<?php

//Connect to a DB   

echo 'Processing';

//Check for a POST variable
if(isset($_POST['name'])){
    echo 'POST: Your name is '. $_POST['name'];
}


//Check for a GET variable
if(isset($_GET['name'])){
    echo 'GET: Your name is'. $_GET['name'];
}