<?php
require 'models.php';
class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_poff;charset=UTF8','nomokoiw_poff','ms87%L39');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    public function uploadFile($pid, $files, $t){
        $img=$this->getImage($pid, $t);
        if($img){
            $this->removeFile($img);
        }
        $url = "http://client.nomokoiw.beget.tech/progoff/";
        $n = basename($t."_".$pid."_".$files['Data']['name']);
        $tid=ucfirst($t)."Id";
        $t .="s";
        $d = "Files/$n";
        if(file_exists("Files")){
            
            if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                $s = $this->db->prepare("UPDATE $t SET Image=? WHERE $tid=?");
                $s->execute(array($url.$d, $pid));
                return($url.$d);
            }else{
                return($_FILES['Data']['tmp_name']);
            }
        }else{
            mkdir("Files");
            if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                $s = $this->db->prepare("UPDATE $t SET Image=? WHERE $tid=?");
                $s->execute(array($url.$d, $pid));
                return($url.$d);
            }else{
                return($_FILES['Data']['tmp_name']);
            }
        }
        
        return false;
    }

    private function genInsertQuery($ins, $t){
        $res = array('INSERT INTO '.$t.' (',array());
        $q = '';
        for ($i = 0; $i < count(array_keys($ins)); $i++) {
            $res[0] = $res[0].array_keys($ins)[$i].',';
            $res[1][]=$ins[array_keys($ins)[$i]];
            $q=$q.'?,';
            
        }
        $res[0]=rtrim($res[0],',');
        $res[0]=$res[0].') VALUES ('.rtrim($q,',').');';
        
        return $res;
        
    }
    private function genUpdateQuery($keys, $values, $t, $id){
        $res = array('UPDATE '.$t.' SET ',array());
        $q = '';
        for ($i = 0; $i < count($keys); $i++) {
            if($values[$i]!='now()'){
                $res[0] = $res[0].$keys[$i].'=?, ';
                $res[1][]=$values[$i];
            }
            else{
                $res[0] = $res[0].$keys[$i].'=now(), ';
            }
            
            
        }
        $res[0]=rtrim($res[0],', ');
        $res[0]=$res[0].' WHERE '.rtrim($t,'s').'Id = '.$id;
        
        return $res;
        
    }
    
    private function removeFile($filelink){
        $path = explode('vi/',$filelink);
        unlink($path[1]);
        
    }
    
    public function setEnter($ip){
        $sth = $this->db->query("SELECT IP FROM enters ORDER BY Id DESC LIMIT 1");
        if($sth->fetch()['IP']!=$ip){
            $s = $this->db->prepare("INSERT INTO enters (IP) VALUES (?)");
            $s->execute(array($ip));
        }
    }
    
    public function getClients(){
        $sth = $this->db->query("SELECT * FROM clients");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Client');
        $clis=[];
        while ($s = $sth->fetch()) {
            $s->CreateDate = date("Y/m/d H:00:00",strtotime($s->CreateDate));
            $clis[]=$s;
        }
        
        return $clis;
    }
    
    public function getClient($id){
        $sth = $this->db->prepare("SELECT * FROM clients WHERE Id=?");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Client');
        $sth->execute(array($id));
        $s=$sth->fetch();
        $s->CreateDate = date("Y/m/d H:00:00",strtotime($s->CreateDate));
        return $s;
    }

    public function getTeam(){
        $sth = $this->db->query("SELECT * FROM mates");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Mate');
        return $sth->fetchAll();
    }

    public function getSales(){
        $sth = $this->db->query("SELECT * FROM sales");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Sale');
        $sales = [];
        while ($s = $sth->fetch()) {
            $s->Services = $this->getSaleServs($s->Id);
            $sales[] = $s;
        }
        return $sales;
    }
    
    private function getEntersCount(){
        $s = $this->db->query("select count(*) as Count from enters where date_format(CreateDate, '%Y%m') = date_format(now(), '%Y%m')");
        return $s->fetch()['Count'];
    }
    
    private function getLastEntersCount(){
        $s = $this->db->query("select count(*) as Count from enters where date_format(CreateDate, '%Y%m') = date_format(date_add(now(), interval -1 month), '%Y%m')");
        return $s->fetch()['Count'];
    }
    
    public function sendEnters(){
        
        $subject = "Показатели посещаемости";
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $did = $this->getEntersCount();
        $l = $this->getLastEntersCount();
        mail("nomokonov.vana@gmail.com", $subject, "<p>Посещений сайта progoff.ru за текущий месяц:</p><p>$did</p><p>Посещений сайта progoff.ru за предыдущий месяц:</p><p>$l</p>", $headers); 
    }
    
    public function getPrices(){
        $sth = $this->db->query("SELECT * FROM prices");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Price');
        $prices = [];
        while ($s = $sth->fetch()) {
            $s->Services = $this->getPriceServs($s->Id);
            $prices[] = $s;
        }
        return $prices;
    }

    public function getJobs(){
        $sth = $this->db->query("SELECT * FROM jobs");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Job');
        $jobs = [];
        while ($j = $sth->fetch()) {
            $j->Requirements = $this->getJobReqs($j->Id);
            $jobs[] = $j;
        }
        return $jobs;
    }
    
    private function getSaleServs($sid){
        $s = $this->db->prepare("SELECT ser.Id as Id, ser.Name as Name, ser.Description as Description, ser.Price as Price from (sales sale RIGHT join saleservice ss ON sale.Id = ss.SaleId) LEFT JOIN services ser ON ser.Id = ss.ServiceId WHERE sale.Id=?");
        $s->execute(array($sid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Service');
        return $s->fetchAll();
    }
    
    private function getPriceServs($pid){
        $s = $this->db->prepare("SELECT ser.Id as Id, ser.Name as Name, ser.Description as Description, ser.Price as Price from (prices price RIGHT join priceservice ps ON price.Id = ps.PriceId) LEFT JOIN services ser ON ser.Id = ps.ServiceId WHERE price.Id=?");
        $s->execute(array($pid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Service');
        return $s->fetchAll();
    }

    private function getJobReqs($jid){
        $s = $this->db->prepare("SELECT req.Id as Id, req.Description as Description from (jobs job RIGHT join jobrequirement jr ON job.Id = jr.JobId) LEFT JOIN requirements req ON req.Id = jr.RequirementId WHERE job.Id=?");
        $s->execute(array($jid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Requirement');
        return $s->fetchAll();
    }

    public function addApp($app, $attachment){
        $res = $this->genInsertQuery($app,"apps");
        $s = $this->db->prepare($res[0]);
        if($res[1][0]!=null){
            $s->execute($res[1]);
        }
        if($attachment['Id']!='null'){
            $attachment['AppId'] = $this->db->lastInsertId();
            $res = $this->genInsertQuery($attachment,"attachments");
            $s = $this->db->prepare($res[0]);
            if($res[1][0]!=null){
                $s->execute($res[1]);
            }
        }
        
        $subject = "Новая заявка Progoff"; 
            
        $message = "<h2>".$app['Name']."</h2>
        </br> <p>".$app['Description']."</p></br></br>
        <p>Email: ".$app['Email']."</p> </br>";
        
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Progoff <application@progoff.ru>\r\n";
        mail('noledcorp@gmail.com', $subject, $message, $headers);
        
        $message = "<h2>Уважаемый, ".$app['Name']."!</h2>
        </br> <p>Ваша заявка успешно отправлена и будет рассмотрена в ближайшее время.</p></br></br>
        <p>C уважением, </p></br><p>Команда Progoff</p>";
        
        mail($app['Email'], $subject, $message, $headers);
        return $this->db->lastInsertId();
    }


    
}
?>