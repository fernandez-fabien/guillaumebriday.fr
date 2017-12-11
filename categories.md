---
layout: default
title: Catégories
---
<h1 class="post-title">Catégories</h1>

<ul class="archives-list">
  {% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}

    <h3>{{ category_name }}</h3>

    {% for post in site.categories[category_name] %}
    <li itemscope itemtype="http://schema.org/Article">
      <time datetime="{{ post.date | time_tag }}" itemprop="datePublished" content="{{ post.date | date: '%Y-%m-%d' }}">
        {{ post.date | localize: ":short_date" }}
      </time>
      <a href="{{ post.url }}">
        <span itemprop="name">{{ post.title }}</span>
      </a>
    </li>
    {% endfor %}
  {% endfor %}
</ul>
