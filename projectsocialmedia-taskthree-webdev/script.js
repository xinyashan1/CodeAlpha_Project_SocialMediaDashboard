const loginBtn = document.getElementById('login-btn');
const connectAccountsSection = document.getElementById('connect-accounts');
const feedsSection = document.getElementById('feeds');
const feedContainer = document.getElementById('feed-container');

let connectedAccounts = [];

// Handle Login
loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('hidden');
  connectAccountsSection.classList.remove('hidden');
});

// Simulate Connecting Social Media Accounts
function connectAccount(platform) {
  if (!connectedAccounts.includes(platform)) {
    connectedAccounts.push(platform);
    displayFeed(platform);
    alert(`${platform} account connected! 🎉`);
  } else {
    alert(`You have already connected your ${platform} account. 💬`);
  }
}

// Display Feed
function displayFeed(platform) {
  connectAccountsSection.classList.add('hidden');
  feedsSection.classList.remove('hidden');

  const feed = document.createElement('div');
  feed.classList.add('feed');
  feed.innerHTML = `
    <h3>${platform} Feed</h3>
    <p>Here’s a preview of your latest posts from ${platform}!</p>
  `;

  feedContainer.appendChild(feed);
}
