const abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "commenter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "CommentCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "PostCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "PostDeleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "disliker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			}
		],
		"name": "PostDisliked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "liker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postId",
				"type": "uint256"
			}
		],
		"name": "PostLiked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "PostUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bio",
				"type": "string"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "addComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "addPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			}
		],
		"name": "deletePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			}
		],
		"name": "dislikePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			}
		],
		"name": "getComments",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "commenters",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "commentContents",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getPost",
		"outputs": [
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "author",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "likesCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dislikesCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "author",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "deleted",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "likesCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dislikesCount",
						"type": "uint256"
					}
				],
				"internalType": "struct MiniSocial.Post[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalPosts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserProfile",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_postId",
				"type": "uint256"
			}
		],
		"name": "likePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bio",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "updatePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contract = "0x016b011c830F511A82f553b3A37C699817bdE383";


async function loadWeb3() {
	if (window.ethereum) {
	//try the commented line if the other one is not working
	//window.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
	window.web3 = new Web3(window.ethereum);
	await window.ethereum.enable();
	}
	}

// Load the contract
async function loadContract() {
    return await new window.web3.eth.Contract(abi, contract);
}

// Register a user with a username
/*async function registerUser() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    const userName = document.getElementById("userName").value;
    const userBio = document.getElementById("userBio").value;
    const accounts = await window.web3.eth.getAccounts();
    try {
        await window.contract.methods.registerUser(userName, userBio).send({ from: accounts[1] });
        updateStatus(`User ${userName} registered successfully.`);
    } catch (error) {
        console.error("Error registering user:", error);
        updateStatus("Failed to register user.");
    }
}*/

// Publish a post with a message
async function publishPost() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    const message = document.getElementById("postMessage").value;
    document.getElementById("postMessage").value = "";  // Clear the input
    const accounts = await window.web3.eth.getAccounts();
    try {
        await window.contract.methods.addPost(message).send({ from: accounts[1] });
        updateStatus("Post published successfully.");
        await getPosts(); // Refresh the posts after publishing
    } catch (error) {
        console.error("Error publishing post:", error);
        updateStatus("Failed to publish post.");
    }
}
async function deletePost(postId) {
    if (!window.web3 || !window.contract) {
        console.error("Web3 or contract is not loaded.");
        return;
    }

    try {
        // Get the current user's account
        const accounts = await window.web3.eth.getAccounts();
        const userAddress = accounts[1]; // Assuming the first account is the user's

        // Call the deletePost function on the smart contract
        const result = await window.contract.methods.deletePost(postId).send({ from: userAddress });
        
        console.log("Post deleted successfully:", result);
        alert("Post deleted successfully!");
    } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete post.");
    }
}

// Get a specific post by ID
async function getPost() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    const index = document.getElementById("postIndex").value;
    try {
        const result = await window.contract.methods.getPost(index).call();
        const authorUsername = await window.contract.methods.getUserProfile(result[2]).call();
        document.getElementById("postContent").textContent = `Post ID: ${result[0]}`;
        document.getElementById("postMessage").textContent = `Message: ${result[1]}`;
        document.getElementById("postAuthor").textContent = `Author: ${result[2]}`;
        document.getElementById("postLikes").textContent = `Likes: ${result[3]}`;
        document.getElementById("postDislikes").textContent = `Dislikes: ${result[4]}`;
        document.getElementById("Date").textContent = `Date: ${result[5]}`;
        updateStatus("Post retrieved successfully.");
    } catch (error) {
        console.error("Error retrieving post:", error);
        updateStatus("Failed to retrieve post.");
    }
}

// Get the total number of posts
async function getTotalPosts() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    try {
        const totalPosts = await window.contract.methods.getTotalPosts().call();
        document.getElementById("totalPosts").textContent = `Total Posts: ${totalPosts}`;
    } catch (error) {
        console.error("Error retrieving total posts:", error);
        updateStatus("Failed to retrieve total posts.");
    }
}

// Fetch all posts and display them
async function getPosts() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    try {
        const totalPosts = await window.contract.methods.getTotalPosts().call();
        const posts = [];
        for (let i = 0; i < totalPosts; i++) {
            const post = await window.contract.methods.getPost(i).call();
            posts.push(post);
        }
        await displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        updateStatus("Failed to fetch posts.");
    }
}
async function updatePost(postId, newContent) {
    const accounts = await window.web3.eth.getAccounts();
    const userAddress = accounts[1];
    // Ensure the user is registered (fetch user profile and check for username)
    const user = await contract.methods.users(userAddress).call();
  
    // Update the post content
    await contract.methods.updatePost(postId, newContent).send({ from: userAddress });
  
    console.log(`Post updated successfully by ${userAddress} with post ID: ${postId}`);
  }
  
// Add a comment to a post
async function addComment(postIndex) {
    const accounts = await window.web3.eth.getAccounts();
const userAddress = accounts[1];
    const commentMessage = document.getElementById(`commentMessage-${postIndex}`).value;
    if (!commentMessage) {
        alert("Please write a comment before submitting.");
        return;
    }

    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    try {
        await window.contract.methods.addComment(postIndex, commentMessage).send({ from: userAddress });
        alert('Comment added!');
        
        // Refresh the comments for that post
        showComments(postIndex);
    } catch (error) {
        console.error("Error adding comment:", error);
    }
}
// Display posts
async function displayPosts(posts) {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
    
    posts.forEach(async (post, index) => {
        const add = await window.contract.methods.getUserProfile(post[2]).call();
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        console.log(`profile: ${add}`);

        postElement.innerHTML = `
            <div class="post">
                <div class="post-details">
                    <div><strong>Post ID: </strong>${index}</div>
                    <div><strong>Content: </strong><span id="content-${index}">${post[0]}</span></div>
                    <div><strong>Author: </strong>${add[0]}</div>
                    <div><strong>Likes: </strong><span id="likeCount-${index}">${post[3]}</span></div>
                    <div><strong>Dislikes: </strong><span id="dislikeCount-${index}">${post[4]}</span></div>
                    <div><strong>Date: </strong>${new Date(post[5] * 1000).toLocaleString()}</div>
                </div>
                
                <!-- Update content input -->
                <div class="post-update">
                    <input type="text" id="updateContent-${index}" placeholder="Update content..." />
                    <button onclick="updatePostContent(${index})">Update</button>
                </div>
                
                <!-- Like, Dislike, and Delete buttons -->
                <div class="post-actions">
                    <button class="like" onclick="likePost(${index})">Like</button>
                    <button class="dislike" onclick="dislikePost(${index})">Dislike</button>
                    <button class="delete" onclick="deletePost(${index})">Delete</button>
                </div>
                
                <!-- Comments section -->
                <div class="comments-section">
                    <button class="show-comments" onclick="showComments(${index})">Show Comments</button>
                    <div id="comments-${index}" class="comments-container">
                        <!-- Comments will be loaded here -->
                    </div>

                    <h4>Add Comment</h4>
                    <textarea id="commentMessage-${index}" placeholder="Write your comment..." rows="3" class="comment-input"></textarea>
                    <button class="add-comment" onclick="addComment(${index})">Add Comment</button>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postElement);
    });
}
// Function to update post content
async function updatePostContent(postId) {
    const newContent = document.getElementById(`updateContent-${postId}`).value;
    if (!newContent) {
        alert("Content cannot be empty");
        return;
    }

    try {
        const accounts = await window.web3.eth.getAccounts();
        const userAddress = accounts[1];
        // Call the contract's updatePost function
        await window.contract.methods.updatePost(postId, newContent).send({ from: userAddress });
        
        // Update the displayed content without reloading the page
        document.getElementById(`content-${postId}`).innerText = newContent;
        alert("Post updated successfully!");
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update the post.");
    }
}
// Function to handle the like action
async function likePost(index) {
    const accounts = await window.web3.eth.getAccounts();
    const userAddress = accounts[1];
    // Increment the like count on the UI
    const likeCountElement = document.getElementById(`likeCount-${index}`);
    const newLikeCount = parseInt(likeCountElement.textContent) + 1;
    likeCountElement.textContent = newLikeCount;

    // You can call the smart contract method to update the like count on the blockchain here
    await window.contract.methods.likePost(index).send({from: userAddress});
}

// Function to handle the dislike action
async function dislikePost(index) {
    const accounts = await window.web3.eth.getAccounts();
    const userAddress = accounts[1];
    // Increment the dislike count on the UI
    const dislikeCountElement = document.getElementById(`dislikeCount-${index}`);
    const newDislikeCount = parseInt(dislikeCountElement.textContent) + 1;
    dislikeCountElement.textContent = newDislikeCount;

    // You can call the smart contract method to update the dislike count on the blockchain here
    await window.contract.methods.dislikePost(index).send({from: userAddress});
}


async function showComments(postIndex) {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    try {
        const comments = await window.contract.methods.getComments(postIndex).call();
        displayComments(postIndex, comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

// Display comments for a specific post
function displayComments(postIndex, comments) {
    const commentsContainer = document.getElementById(`comments-${postIndex}`);
    commentsContainer.innerHTML = "";  // Clear previous comments
    console.log(comments);
    comments[1].forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<p>${comment}</p>`;
        commentsContainer.appendChild(commentElement);
    });
}

// Listen for the new post event
async function listenForNewPost() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    window.contract.events.PostCreated({ fromBlock: 'latest' })
        .on('data', event => {
            console.log("New post created:", event.returnValues);
            getPosts(); // Refresh the list of posts when a new one is created
            getTotalPosts();
        })
        .on('error', error => {
            console.error("Error in event listener:", error);
        });
}

// Listen for new comments
async function listenForNewComments() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    window.contract.events.CommentCreated({ fromBlock: 'latest' })
        .on('data', event => {
            console.log("New comment added:", event.returnValues);
        })
        .on('error', error => {
            console.error("Error in event listener:", error);
        });
}

// Listen for post deletion
async function listenForPostDeletion() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    window.contract.events.PostDeleted({ fromBlock: 'latest' })
        .on('data', event => {
            console.log("Post deleted:", event.returnValues);
            getPosts(); // Refresh the list of posts when one is deleted
        })
        .on('error', error => {
            console.error("Error in event listener:", error);
        });
}

// Update status message
function updateStatus(message) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = message;
}

// Check if the user is registered
async function checkIfUserIsRegistered() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }

    const accounts = await window.web3.eth.getAccounts();
    console.log(accounts);
    const userAddress = accounts[1];

    try {
        const profile = await window.contract.methods.getUserProfile(userAddress).call();
		console.log(profile);
        if (profile[0] === "" || profile[1] === "") {
            // User is not registered, redirect to register.html
            if (!window.location.pathname.includes("register.html")) {
                window.location.href = "register.html";  // Use relative path here
            }
        } else {
            updateStatus(`Welcome, ${profile[0]}`);
        }
    } catch (error) {
        console.error("Error checking user registration:", error);
        updateStatus("Failed to check user registration.");
    }
}
async function listenForUpdatePost() {
    if (!window.contract) {
        updateStatus("Contract is not loaded.");
        return;
    }
    window.contract.events.PostUpdated({ fromBlock: 'latest' })
        .on('data', event => {
            console.log("Post Updated:", event.returnValues);
            getPosts(); // Refresh the list of posts when a new one is created
        })
        .on('error', error => {
            console.error("Error in event listener:", error);
        });
}

// Register user function
async function registerUser() {
	const accounts = await window.web3.eth.getAccounts();
const userAddress = accounts[1]; // Get the first account
if (!userAddress) {
    console.error("No user address found.");
    return;
}
console.log(userAddress);

	const userName = document.getElementById('userName').value;
	const userBio = document.getElementById('userBio').value;

	if (!userName || !userBio) {
		document.getElementById('status').innerText = "Please fill in all fields.";
		return;
	}

	try {
		// Call smart contract function to register user
		const receipt = await window.contract.methods.registerUser(userName, userBio).send({from:userAddress});
console.log("Transaction receipt:", receipt);
console.log("Events:", receipt.events);

		document.getElementById('status').innerText = "Registration successful!";
	} catch (error) {
		console.error("Error registering user:", error);
		document.getElementById('status').innerText = "Registration failed. Please try again.";
	}
}
// Initialize and check registration status
async function init() {
    await loadWeb3();
    window.contract = await loadContract();
    await checkIfUserIsRegistered(); // Check registration when loading the page
    await listenForNewPost();
    await listenForNewComments();
    await listenForPostDeletion();
    await listenForUpdatePost();
    await getPosts();
    await getTotalPosts();
}
async function load_profile(){
const accounts = await window.web3.eth.getAccounts();
    console.log(accounts);
    const userAddress = accounts[1];
    const profile = await window.contract.methods.getUserProfile(userAddress).call();
    document.getElementById("usernameDisplay").innerHTML=`${profile[0]}`;
    document.getElementById("bioDisplay").innerHTML=`${profile[0]}`;
}
    // Toggle the edit form visibility
    function toggleEditForm() {
        const editForm = document.getElementById("editForm");
        editForm.style.display = editForm.style.display === "none" ? "block" : "none";
    }

    // Save the edited profile
   async function saveProfile() {
        const username = document.getElementById("usernameInput").value;
        const bio = document.getElementById("bioInput").value;
        
        if (username) document.getElementById("usernameDisplay").innerText = username;
        if (bio) document.getElementById("bioDisplay").innerText = bio;

        // Call to update profile data on the blockchain
        await window.contract.methods.registerUser(username, bio).send({ from: userAddress });

        toggleEditForm();
    }
load_profile();
init();

