<?php
$hostname='localhost';
$username='root';
$password='root';
$arr = [];
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=laravel",$username,$password);   
    $sql = "SELECT * FROM `fl_flowers`";
	foreach ($dbh->query($sql) as $row)
	    {
	    	$arr[] = array(
			'id'=>$row["id"],'first_name'=>$row["first_name"],
			'last_name' =>$row["last_name"],
                        'link_edit'=>'http://localhost/react-hello-world/api/edit.php?id='.$row["id"],
			'link_delete'=>'http://localhost/react-hello-world/api/delete.php?id='.$row["id"]
                    );
	    }


    $dbh = null;
    }
   catch(PDOException $e)
    {
    echo $e->getMessage();
    }

echo json_encode($arr);
?>
