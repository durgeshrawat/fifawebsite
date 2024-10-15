// Sample news data
const news = [
    {
        title: "FIFA World Cup 2024 Draw Announced",
        content: "The draw for the FIFA World Cup 2024 has been completed. Teams are set for an exciting competition."
    },
    {
        title: "Top Players to Watch in 2024",
        content: "As the World Cup approaches, here are the top players that are expected to make an impact."
    },
    {
        title: "FIFA World Cup Venue Preparations",
        content: "The preparations for the World Cup venues are in full swing, with stadiums ready to host the matches."
    }
];

// Function to display news
function loadNews() {
    const newsContainer = document.getElementById('news-container');

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const content = document.createElement('p');
        content.textContent = item.content;

        newsItem.appendChild(title);
        newsItem.appendChild(content);

        newsContainer.appendChild(newsItem);
    });
}

// Load news when the page loads
window.onload = loadNews;
