export default function Post(props) {
    const date = new Date();
    return(
        <div style={{border : "1px solid red" , 
        width : "300px", 
        marginTop : "40px", 
        borderRadius : "12px",
        padding : "10px"
        }}>
            <h2>제목 : {props.title}</h2>
            <p>생성날짜 : {date.toLocaleDateString()}</p>
            <p>내용 : {props.content}</p>
        </div>
    );
}