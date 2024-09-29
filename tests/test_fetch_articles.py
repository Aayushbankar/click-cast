# test_fetch.py

from newsapi import NewsApiClient

# Initialize News API with your API key
newsapi = NewsApiClient(api_key='c6fc3b5f63434ce988023d4909136062')

# Fetch articles
def fetch_articles():
    articles = newsapi.get_everything(q='technology', language='en', page=1)
    return articles

if __name__ == "__main__":
    articles = fetch_articles()
    if articles:
        print(f"Total articles fetched: {articles['totalResults']}")
        for article in articles['articles'][:5]:  # Displaying only the first 5 articles
            print(f"Title: {article['title']}")
    else:
        print("Failed to fetch articles")
