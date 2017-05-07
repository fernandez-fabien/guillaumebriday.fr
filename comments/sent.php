<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <?php if ( isset($_POST['return_url']) ) : ?>
    <?php
      $return_url = $_POST['return_url'];
      $return_delay = 5; //Number of seconds to linger on this page before redirecting back to the static sit
    ?>
    <meta http-equiv="refresh" content="<?= $return_delay ?>;url='<?= $return_url ?>'" />
  <?php endif; ?>

  <title>Commentaire envoyé !</title>
</head>
<body>
  <h1>Commentaire envoyé !</h1>
  <p>Merci pour votre commentaire. Il sera publié après validation.</p>

  <?php if ( isset($return_url) ) : ?>
    <p>Vous allez être redirigé vers la page à partir de laquelle vous avez envoyé ce commentaire.</p>
    <a href="<?= $return_url ?>">Cliquez ici</a> si vous n'êtes pas redirigé automatiquement.</p>
  <?php endif; ?>
</body>
</html>
