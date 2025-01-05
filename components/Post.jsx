import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist } from "../store/post-list-store";


const Post = ({ post }) => {
  const {deletePost} = useContext(Postlist);
  const postImageUrl = post.imageUrl || 'default.jpg';
    return (
    <div className="card post-card" style={{width: "70rem"}} >
  <img src={postImageUrl}   style={{ width: "200px", height: "200px", objectFit: "cover" }}/>
  
 
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() =>deletePost(post.id)}>
    <MdDelete/> 
    </span>
    </h5>
    <p className="card-text">{post.body}</p>
    
    
    
    </div>
</div>
);
}
 export default Post;