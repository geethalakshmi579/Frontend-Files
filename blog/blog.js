const blogPosts = [
    {
        title: 'Tech Blog 1',
        genre: 'Technology',
        upvotes: 15,
        comments: 5,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex nec nulla consectetur convallis.'
    },
    {
        title: 'Travel Diary 1',
        genre: 'Travel',
        upvotes: 20,
        comments: 8,
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
        title: 'Foodie Corner',
        genre: 'Food',
        upvotes: 10,
        comments: 3,
        content: 'Nullam ut ex vel mauris aliquet rhoncus. Proin ut tortor eget nisl accumsan malesuada.'
    },
    // Add more blog posts with genres and content
];


// Function to dynamically load blog posts
function loadBlogPosts(genre = 'All') {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';

    const filteredPosts = genre === 'All' ? blogPosts : blogPosts.filter(post => post.genre === genre);

    filteredPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h2>${post.title}</h2>
            <p>Genre: ${post.genre}</p>
            <p>Upvotes: ${post.upvotes}</p>
            <p>Comments: ${post.comments}</p>
            <button onclick="upvotePost('${post.title}')">Upvote</button>
            <button onclick="commentOnPost('${post.title}')">Comment</button>
        `;

        blogList.appendChild(postCard);
    });
}

// Function to handle upvoting a post
function upvotePost(title) {
    const post = blogPosts.find(post => post.title === title);
    if (post) {
        post.upvotes++;
        // Reload blog posts after upvoting
        loadBlogPosts();
    }
}

// Function to handle commenting on a post
function commentOnPost(title) {
    const post = blogPosts.find(post => post.title === title);
    if (post) {
        post.comments++;
        // Reload blog posts after commenting
        loadBlogPosts();
    }
}

// Initial load of blog posts
loadBlogPosts();

// Sample event listener for genre selection
document.getElementById('genre-sidebar').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        loadBlogPosts(event.target.textContent);
    }
});
