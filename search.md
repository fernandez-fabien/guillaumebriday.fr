---
layout: default
title: Recherche
permalink: /recherche/
exclude: true
sitemap: false
---
<h1 class="post-title">Recherche</h1>

<div id="search-container">
  <span class="icon icon-search"></span>
  <input type="text" id="search-input" placeholder="Rechercher..." class="basic-input" autofocus>

  <ul id="results-container" class="archives-list"></ul>
</div>

<script type="text/javascript">
  window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/search.json',
    searchResultTemplate: `
      <li>
        <time>{date}</time> <a href="{url}">{title}</a>
      </li>`,
    noResultsText: "Il n'y a pas d'article à afficher !"
  });
</script>
