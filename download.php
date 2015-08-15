<?php 
    include("inc/header.php"); 
    include("inc/download_resource.php"); 
    
?>

        <main class="cd-container">
            <section class="block_container">
                <div class="download-block">
                    <h2>Line Sheet</h2>                 

                    <?php 
                        
                        // If password is valid let the user get access
                        if (isset($_POST["password"]) && ($_POST["password"]=="$password")) {
                        ?>
                        <!-- START OF HIDDEN HTML -->

                          <p align="center">
                            <a href="downloads/linesheet.pdf" target="_blank" class="button">Download</a><br />
                          <strong>Thank You</strong><br />Click the above button to download the line sheet.</p>


                        <!-- END  -->
                        <?php 
                        }
                        else
                        {
                        // Wrong password or no password entered display this message
                        if (isset($_POST['password']) || $password == "") {
                          print "<p align=\"center\"><font color=\"red\"><b>Incorrect Password</b><br>Please enter the correct password</font></p>";}
                          print "<form method=\"post\"><p align=\"center\">Please enter your password for access<br>";
                          print "<input name=\"password\" type=\"password\" size=\"25\" maxlength=\"10\"><input value=\"Login\" type=\"submit\"></p></form>";
                        }
                        
                     ?>
                </div>
            </section>
        </main> <!-- #main-container -->
       
<?php include_once("inc/footer.php"); ?>