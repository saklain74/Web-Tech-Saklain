<?php
    session_start(); //start session, session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the users computer.  
 
 
    $username = $_POST['username'] ?? ""; //php super global variable
    $password = $_POST['password'] ?? ""; //post, get, request, session, cookie, file, env, server, globals
    $hasUsernameError = true;
    $hasPasswordError = true;
 
    echo"<h1> Hello Mr, $username </h1>";
    echo"<h1> we know your password, which is, $password </h1>";
   
    if(!$username){
       $_SESSION['username_error'] = "Username is required";
       $hasUsernameError = true;
    }
    else{
        unset($_SESSION['username_error']);
        $hasUsernameError = false;
    }
    if(!$password){
        $_SESSION['password_error'] = "Password is required";
        $hasPasswordError = true;
    }
    else{
        unset($_SESSION['password_error']);
        $hasPasswordError = false;
    }
 
    if($hasUsernameError || $hasPasswordError){
        header("Location: ../view/login.php");
    }
    else{
        echo"<h1> Hello Mr, $username </h1>";
        echo"<h1> we your login is valid! </h1>";
    }
 
 
 
?>