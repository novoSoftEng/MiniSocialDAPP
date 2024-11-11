// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract MiniSocial {
    uint256 private postCounter;
    uint256 private deletedPosts;

    constructor() {
        postCounter = 0;
    }

    // Structure representing a post
// Structure representing a post
struct Post {
    address author;
    uint256 id;
    string content;
    bool deleted;  // New flag to track deletion status
    uint256 date;  // Timestamp of when the post was created
    uint256 likesCount;  // Count of likes
    uint256 dislikesCount;  // Count of dislikes
}


    // Structure representing a user profile
    struct User {
        string username;
        string bio;
    }

    // Structure representing a comment on a post
    struct Comment {
        address commenter;
        uint256 postId;
        string content;
    }

    // Mapping to store user profiles by address
    mapping(address => User) public users;

    // Mapping to store posts by ID
    mapping(uint256 => Post) private posts;

    // Mapping to store comments for each post (postId => array of comments)
    mapping(uint256 => Comment[]) private postComments;

    // Event for post creation
    event PostCreated(address indexed author, uint256 id, string content);

    // Event for post deletion
    event PostDeleted(address indexed author, uint256 id);
    event PostUpdated(address indexed author, uint256 id);
    // Event for comment creation
    event CommentCreated(address indexed commenter, uint256 postId, string content);

    // Event for user registration
    event UserRegistered(address indexed user, string username, string bio);
    // Event for post like action
event PostLiked(address indexed liker, uint256 postId);

// Event for post dislike action
event PostDisliked(address indexed disliker, uint256 postId);


// Function to like a post
function likePost(uint256 _postId) public {
    // Ensure the post exists
    require(_postId < postCounter, "Post does not exist");

    // Ensure the user is not the author of the post (optional)
    //require(posts[_postId].author != msg.sender, "You cannot like your own post");

    // Increment the like count
    posts[_postId].likesCount++;

    // Emit the event for liking a post
    emit PostLiked(msg.sender, _postId);
}

// Function to dislike a post
function dislikePost(uint256 _postId) public {
    // Ensure the post exists
    require(_postId < postCounter, "Post does not exist");

    // Ensure the user is not the author of the post (optional)
    //require(posts[_postId].author != msg.sender, "You cannot dislike your own post");

    // Increment the dislike count
    posts[_postId].dislikesCount++;

    // Emit the event for disliking a post
    emit PostDisliked(msg.sender, _postId);
}

    // Function to register a user with a username
    function registerUser(string memory _username, string memory _bio) public {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(_bio).length > 0, "Bio cannot be empty");
        users[msg.sender] = User(_username, _bio);
        emit UserRegistered(msg.sender, _username, _bio);
    }

// Function to add a post
function addPost(string memory _content) public {
    // Ensure the user is registered by checking if the username exists
    require(bytes(users[msg.sender].username).length > 0, "User not registered. Please register first.");

    // Add the post with the current timestamp
    posts[postCounter] = Post(
        msg.sender,
        postCounter,
        _content,
        false, 
        block.timestamp, // Set the timestamp when the post is created
        0, // Initial like count
        0  // Initial dislike count
    );
    emit PostCreated(msg.sender, postCounter, _content);

    postCounter++;
}
function updatePost(uint256 _id,string memory _content) public {
    // Ensure the user is registered by checking if the username exists
        require(bytes(users[msg.sender].username).length > 0, "User not registered. Please register first.");
        
    // Ensure the post exists
    require(_id < postCounter, "Post does not exist");
    posts[_id].content = _content;
    posts[_id].date = block.timestamp;
    emit PostUpdated(msg.sender, _id);

}

    // Function to add a comment to a post
    function addComment(uint256 _postId, string memory _content) public {
        // Ensure the user is registered by checking if the username exists
        require(bytes(users[msg.sender].username).length > 0, "User not registered. Please register first.");
        
        // Ensure the post exists
        require(_postId < postCounter, "Post does not exist");

        // Add the comment
        postComments[_postId].push(Comment(msg.sender, _postId, _content));
        emit CommentCreated(msg.sender, _postId, _content);
    }

// Function to retrieve a post along with the username, like count, and date
function getPost(uint256 _id) public view returns (string memory content, string memory username, address author, uint256 likesCount,uint256 dislikesCount, uint256 date) {
    require(_id < postCounter, "Post does not exist");
    Post storage post = posts[_id];
    User storage user = users[post.author];
    return (post.content, user.username, post.author, post.likesCount,post.dislikesCount, post.date);
}


    // Function to retrieve all comments for a post
    function getComments(uint256 _postId) public view returns (address[] memory commenters, string[] memory commentContents) {
        require(_postId < postCounter, "Post does not exist");
        
        uint256 commentCount = postComments[_postId].length;
        address[] memory commentAddresses = new address[](commentCount);
        string[] memory commentTexts = new string[](commentCount);
        
        for (uint256 i = 0; i < commentCount; i++) {
            commentAddresses[i] = postComments[_postId][i].commenter;
            commentTexts[i] = postComments[_postId][i].content;
        }

        return (commentAddresses, commentTexts);
    }
    // Function to retrieve all posts (including deleted ones, but skipping them in the UI)
function getPosts() public view returns (Post[] memory) {
    

    // Create an array to hold the active posts
    Post[] memory activePostList = new Post[](postCounter);  // The length is still postCounter, preserving indexes

    // Populate the active posts list, skipping deleted posts but keeping the original order
    for (uint256 i = 0; i < postCounter; i++) {
        if (!posts[i].deleted) {
            activePostList[i] = posts[i];  // Maintain original index
        }
    }

    return activePostList;
}


    // Function to retrieve a user's profile information
    function getUserProfile(address _user) public view returns (string memory username, string memory bio) {
        User storage user = users[_user];
        return (user.username, user.bio);
    }

    // Function to get the total number of posts
    function getTotalPosts() public view returns (uint256) {
        return postCounter-deletedPosts;
    }

    // Function to delete a post
    // Function to delete a post
function deletePost(uint256 _postId) public {
    // Ensure the post exists
    require(_postId < postCounter, "Post does not exist");

    // Ensure the caller is the post's author
    require(posts[_postId].author == msg.sender, "Only the post's author can delete it");

    // Mark the post as deleted
    posts[_postId].deleted = true;
    deletedPosts++;

    // Emit the event for post deletion
    emit PostDeleted(msg.sender, _postId);
}

}
