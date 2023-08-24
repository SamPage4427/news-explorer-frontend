import { baseUrl, checkResponse } from "./constants.js";

function getSavedArticles(token) {
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function saveNews(card, token) {
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: card.title,
      description: card.description,
      url: card.url,
      publishedAt: card.publishedAt.slice(0, 10),
      source: card.source.name,
      image: card.urlToImage,
      keywords: card.keywords,
    }),
  }).then(checkResponse);
}
