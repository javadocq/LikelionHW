import Post from "./Post";
import { useState } from "react";

export default function Blog() {
    const [Blogcontent, setBlogcontent] = useState([]);
    const [useTitle, setUseTitle] = useState('');
    const [useContent, setUseContent] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const titleChange = (e) => {
        setUseTitle(e.target.value);
    }

    const contentChange = (e) => {
        setUseContent(e.target.value);
    }
    const total = (e) => {
        e.preventDefault();
        if(editMode) {
            setBlogcontent((prev) => prev.map(item => (item.id === editId) ? { ...item, title: useTitle, content: useContent } 
            : item))
        }
        else {
        setBlogcontent((prev) => [...prev, {id : Date.now(), title : useTitle, content : useContent}])
        }
        setUseTitle('');
        setUseContent('');
        setEditMode(false);
        setEditId(null);
    };

    const deletePost = (e) => {
        setBlogcontent((prev) => prev.filter(item => item.id !== e));
    }
    const editPost = (id) => {
        const postToEdit = Blogcontent.find(item => item.id===id);
        setUseTitle(postToEdit.title);
        setUseContent(postToEdit.content);
        setEditMode(true);
        setEditId(id);
    }

    const date = new Date();
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , backgroundColor :"#FFE4C4"}}>
            <div style={{marginTop : "100px", border : "1px solid black", borderRadius:"12px", height:"300px", width : "400px", display: 'flex', flexDirection: 'column', alignItems: 'center', padding :"10px"}}>
                <form onSubmit={total} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px', borderRadius : "10px"}}>
                        <label>블로그 제목 :</label>
                        <input value = {useTitle} style={{height: '30px', width: '150px', marginLeft: '10px'}} onChange={titleChange}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <label style={{marginRight: '10px'}}>내용 :</label>
                        <textarea value ={useContent} style={{height: '200px', width: '200px',  borderRadius : "10px"}} onChange={contentChange}></textarea>
                    </div>
                    <button style={{marginLeft: "200px", marginTop : "15px"}}>{editMode === true ? "수정완료" : "올리기"}</button>
                </form>
            </div>
    
            <div style={{marginLeft : "10px", marginTop: "20px"}}>
                <h1>리액트 블로그</h1>
                <p>포스트 갯수 : {Blogcontent.length}</p>
                {Blogcontent.map((item) => {
                    return (
                    <><Post title = {item.title} content = {item.content} />
                        <button onClick ={() => editPost(item.id)} style={{marginLeft:"230px", marginTop : "10px"}}>수정</button>
                        <button onClick ={() => deletePost(item.id)} style={{marginLeft:"10px", marginTop : "10px"}}>삭제</button>    
                    </>
                )
                })}
            </div>
        </div>
    );
    
}

