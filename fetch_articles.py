from newsapi import NewsApiClient

API_KEY = 'c6fc3b5f63434ce988023d4909136062'  
newsapi = NewsApiClient(api_key=API_KEY)

def fetch_articles():
    all_articles = []
    
    try:
        
        response = newsapi.get_everything(q='*',language='en', sort_by='publishedAt', page_size=100)

      
        # print("API Response:", response)

        articles = response.get('articles', [])
        
        for article in articles:
            all_articles.append({
                'title': article['title'],
                'description': article['description'],
                'url': article['url'],
                'publishedAt': article['publishedAt']
            })
    
    except Exception as e:
        print(f"Error fetching articles: {e}")

    return all_articles
