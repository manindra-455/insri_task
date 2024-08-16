document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('create-form');
    const postList = document.getElementById('post-list');

    // Load existing posts (for demonstration, use localStorage or a backend API in practice)
    const loadPosts = () => {
        // For demonstration purposes
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postList.innerHTML = posts.map((post, index) => `
            <div class="post-item">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
                <div class="actions">
                    <button onclick="editPost(${index})">Edit</button>
                    <button onclick="deletePost(${index})">Delete</button>
                </div>
            </div>
        `).join('');
    };

    const savePost = (post) => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    const deletePost = (index) => {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
    };

    const editPost = (index) => {
        // Implement edit functionality here
        alert('Edit functionality not implemented');
    };

    createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];
        const imageUrl = image ? URL.createObjectURL(image) : '';

        const newPost = {
            title,
            content,
            image: imageUrl
        };

        savePost(newPost);
        loadPosts();

        createForm.reset();
    });

    loadPosts();
});
