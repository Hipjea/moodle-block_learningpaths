<?php

require_once(dirname(__FILE__) . '/../../config.php');

defined('MOODLE_INTERNAL') || die;

$url = "https://test.luniversitenumerique.fr/wp-json/learningpathsapi/v1/data/1";
$ch = curl_init($url); // such as http://example.com/example.xml
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

print "<pre>";
print_r(json_decode($data, true));
print "</pre>";