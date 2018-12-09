@extends('layout.base')

@section('content')
<section id="start" class="my-5 py-5">
  <p class="text-center">
    Bonjour, Madame Lelouch.
    <br />
    <br />
    Comme vous devez le savoir, le mois de Décembre annonce le retour des Secret Santas, plusieurs de leurs agents ont été repéré dans votre secteur.
    <br />
    Notre équipe de renseignements sur le terrain nous a informé que l'un d'entre eux vous a pris pour cible.
    <br />
    Votre mission, si toutefois vous l'acceptez, est de résoudre 3 énigmes.
    <br />
    Si vous, ou l'un de vos assistants, parveniez à résoudre toutes les énigmes, votre Secret Santa vous récompensera de vos efforts.
    <br />
    <br />
    Bonne chance Madame Lelouch.
  </p>
  @include('parts.start')
</section>
<section id="step1" class="my-5 py-5 d-none">
  <p class="text-center">
    La première énigme consiste à récupérer un ensemble de codes disséminés parmi des sujets choisis dans les effectifs de Jalis.
    <br />
    Pour récupérer un code, vous devez aller voir la personne et lui donner votrre clé.
    <br />
    Avec votre clé et la sienne, vous pourrez obtenir le code correspondant.
    <br/>
    Récupérez tous les codes et vous pourrez passer à l'énigme suivante.
  </p>
  @include('parts.step1')
</section>
<section id="step2" class="my-5 py-5 d-none">
  <p class="text-center">
    La deuxième énigme consiste à déterminer ce qui relie entre eux les différents codes de la première énigme.
    <br />
    Trouvez les liens et vous pourrez passer à l'énigme suivante.
  </p>
  @include('parts.step2')
</section>
<section id="step3" class="my-5 py-5 d-none">
  <p class="text-center">
    La troisième énigme consiste à trouver votre Secret Santa.
    <br />
    Les sujets de la première énigme n'ont pas été choisis au hasard, quelque chose les lient tous entre eux.
    <br />
    Ce quelque chose est leur trigramme.
    <br />
    Votre Secret Santa n'a aucun lien avec les sujets de la première énigme.
  </p>
  @include('parts.step3')
</section>
<section id="finish" class="my-5 py-5 d-none">
  <p class="text-center">
    Félicitations, vous m'avez démasqué, vous pouvez maintenant venir me voir pour recevoir votre récompense.
  </p>
  @include('parts.finish')
</section>
@endsection
