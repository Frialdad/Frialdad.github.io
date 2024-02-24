document.addEventListener('DOMContentLoaded', function() {
  var youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  // Ejemplo de expresión regular para validar URLs de SoundCloud
  var soundcloudRegex = /^https:\/\/soundcloud\.com\/[\w-]+\/[\w-]+$/;

  document.getElementById('youtube-url').addEventListener('change', function() {
    var url = this.value;
    if (youtubeRegex.test(url)) {
      var embedUrl = url.replace("watch?v=", "embed/");
      var iframe = '<iframe width="560" height="315" src="' + embedUrl + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      document.getElementById('youtube-embed-container').innerHTML = iframe;
    } else {
      document.getElementById('youtube-embed-container').innerHTML = '';
    }
  });

  document.getElementById('soundcloud-url').addEventListener('change', function() {
    var url = this.value;
    if (soundcloudRegex.test(url)) {
      var trackUrl = encodeURIComponent(url);
      var iframe = '<iframe width="600" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=' + trackUrl + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
      document.getElementById('soundcloud-embed-container').innerHTML = iframe;
    } else {
      document.getElementById('soundcloud-embed-container').innerHTML = '';
    }
  });

});