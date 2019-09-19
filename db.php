

      <?php

      define("DB_HOST", "localhost");
      define("DB_USER", "id10807141_abc");
      define("DB_PASS", "root123");
      define("DB_NAME", "id10807141_mydb");

      $connection_status = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
      if(!$connection_status){
        echo "db is not connected";
        exit();
      }



      //user input
      $fname = $_POST["fname"];
      $lname = $_POST["lname"];
      $email = $_POST["email"];
      $message = $_POST["message"];

      //filters
       if (!filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL)) {
        echo("Email is not valid");
        exit();
        }

      $sql = "INSERT INTO `student_data` (`fname`, `lname`, `email`, `message`) VALUES ('$fname','$lname','$email', '$message')";

      mysqli_query($connection_status, $sql);

      if(mysqli_affected_rows($connection_status)){
        echo "data is inserted";
      }else{
        echo "Error";
      }

       ?>
