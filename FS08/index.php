<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <?php
        function logArray($array) {
            echo "<pre>";
            var_dump($array);
            echo "</pre>";
        }

        function displayArray($array) {
            foreach ($array as $key => $value) {
                if($value["salary"] > 400) {
                    echo "<p><b>{$value["name"]} - {$value["role"]} - {$value["salary"]}</b></p>";
                }
                else {
                    echo "<p>{$value["name"]} - {$value["role"]} - {$value["salary"]}</p>";
                }
                echo "<hr>";
            }
        }

        $developers = array (
            array("name" => "Michael",
                "role" => "Frontend developer",
                "salary" => 500),

            array("name" => "John Doe",
                "role" => "Backend developer",
                "salary" => 320),

            array("name" => "Ran Dom",
                "role" => "Fullstack",
                "salary" => 700),
        );

        // logArray($developers);
        displayArray($developers);

        echo "<h3>Sziasztok!</h3>";

        $myName = "John Doe";

        for ($i=0; $i < 10; $i++) { 
            // $temp = $i + 1;
            echo "<p class=marked>".($i+1)." - $myName</p>";
        }
    ?>

    <script>
        let a = 'hello from console!'
        console.log(a)
        for (let i = 0; i < 10; i++) {
            console.log(i, a)
        }

        console.log(document.getElementsByClassName('marked'))

        document.getElementsByClassName('marked')[0].style.color = "red"
    </script>
</body>
</html>