<?php
header('Content-type: text/html; charset=utf-8');
if ((!empty($_POST['name'])) && (!empty($_POST['contacts'])) && (!empty($_POST['description']))) {
	$token='6204533739:AAHBFkdmWOtJmR_BZZL7LMBxHsomj31A9Cg';
	$chat_id='-4021700543'; 

	$text = '🗂Новая заявка на сайте ВР ИТ:';
	$name = 'ФИО: '.$_POST['name'];
	$contacts = 'Контакты: '.$_POST['contacts'];
	$description = 'Описание: '.$_POST['description'];
    if (isset ($token) && ($chat_id)) {
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text=$text%0A$name%0A$contacts%0A$description","r");
        if($sendToTelegram) {
            die(json_encode(['success' => "Успешно"]));
        }
        die(json_encode(["message" => "Произошла ошибка при отправки формы, попробуйте ещё раз."]));
    }
}
die(json_encode(["message" => "Поля формы пустые заполните их."]));