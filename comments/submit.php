<?php

// submit.php -- Receive comments and e-mail them to someone
// Copyright (C) 2011 Matt Palmer <mpalmer@hezmatt.org>
//
//  This program is free software; you can redistribute it and/or modify it
//  under the terms of the GNU General Public License version 3, as
//  published by the Free Software Foundation.
//
//  This program is distributed in the hope that it will be useful, but
//  WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  General Public License for more details.
//
//  You should have received a copy of the GNU General Public License along
//  with this program; if not, see <http://www.gnu.org/licences/>


$DATE_FORMAT = 'Y-m-d H:i:s';
$EMAIL_ADDRESS = 'hello@guillaumebriday.fr';
$SUBJECT = 'Nouveau commentaire sur blog.guillaumebriday.fr';

/****************************************************************************
* HERE BE CODE
****************************************************************************/

$content = json_decode(file_get_contents('php://input'), true);

if (! isset($content['post_id'])) {
    //  do not indicate to bots that this is an error
    //  http_response_code(403);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Unprocessable entity";
    return;
}

$post_id = $content['post_id'];
$email = $content['email'];
$remote_addr = $_SERVER['REMOTE_ADDR'];
$name = $content['name'];
$website = $content['website'];
$comment = $content['content'];

$content = "post_id: $post_id\n";
$content .= "email: $email\n";
$content .= "address: $remote_addr\n";

$content .= "---\n";

$content .= "- id: ?\n";
$content .= "  author: $name\n";

if ($website !== '') {
    $content .= "  author-url: $website\n";
}

$content .= "  date: " . date($DATE_FORMAT) . "\n";
$content .= "  content: |\n $comment";

$headers = "From: $EMAIL_ADDRESS\n";
$headers .= "Content-Type: text/plain; charset=utf-8";

header('Content-Type: application/json');

if (mail($EMAIL_ADDRESS, $SUBJECT, $content, $headers)) {
    http_response_code(200);

    header('Status: 200 OK');
} else {
    http_response_code(422);

    header('Status: 422 Unprocessable Entity');
}
