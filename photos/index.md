---
layout: default
title: "Photos"
class: "gallery-container"
---
<h1 class="post-title">Photos</h1>

{% assign images = site.photos | reverse %}

<div class="gallery-grid">
  {% for image in images %}
    {% assign path = image.name | prepend: 'gallery/' %}

    {% include image.html
                url = image.url
                img = path
                title = image.title
                class = "grid-item"
                alt = image.alt
                new_tab = 'false' %}
  {% endfor %}
</div>
