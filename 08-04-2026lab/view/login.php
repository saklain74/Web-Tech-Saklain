<?php
$username_error= $_SESSION['username_error'] ?? "";
$password_error = $_SESSION['password_error'] ?? "";
?>
 
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
 
    <form method="post" action="../controller/loginvalidation.php">
        <table>
            <tr>
                <td>Username</td>
                <td><input type="text" name="username" placeholder="Enter username" required></td>
                <td><?php echo "$username_error"; ?></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" placeholder="Enter password" required></td>
                <td><?php echo "$password_error"; ?></td>
 
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Submit">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
 