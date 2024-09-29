from flask import Flask, render_template, jsonify, request
from fetch_articles import fetch_articles
import math

app = Flask(__name__)

# Number of articles per page
ARTICLES_PER_PAGE = 20

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/articles', methods=['GET'])
def get_articles():
    page = request.args.get('page', 1, type=int)
    articles = fetch_articles()
    
    # Pagination logic
    total_articles = len(articles)
    start = (page - 1) * ARTICLES_PER_PAGE
    end = start + ARTICLES_PER_PAGE
    paginated_articles = articles[start:end]
    
    return jsonify({
        'articles': paginated_articles,
        'total_articles': total_articles,
        'total_pages': math.ceil(total_articles / ARTICLES_PER_PAGE),
        'current_page': page
    })

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
