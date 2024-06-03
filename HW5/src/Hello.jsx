function Hello(props) {
    // let Aarr = [3,5,7];
    // let Barr = Aarr.map((item, index) => item * 3);

    // Hello컴포넌트
    // return Barr;

    // const animal = ["개", "원숭이", "고양이", "사자"];

    // return (
    //     <>
    //     {animal.map((item, index) => (
    //         <>
    //         <h1 key={index}>{item}</h1>
    //         </>
    //     ))}
    //     </>
    // );

    // const students = [
    //     { name: "음상훈", grade: 2, id: 0 },
    //     { name: "김선후", grade: 4, id: 1 },
    //     { name: "송재현", grade: 3, id: 2 },
    //     { name: "오승아", grade: 3, id: 3 },
    //     { name: "윤현주", grade: 3, id: 4 },
    //   ];
    
    //   return (
    //     <>
    //       {students
    //         .filter((student) => student.grade === 3)
    //         .map((student, index) => (
    //           <div key={student.id} style={{ border: "1px solid black" }}>
    //             <p>이름 : {student.name}</p>
    //             <p>학년 : {student.grade}</p>
    //           </div>
    //         ))}
    //     </>
    //   );

    // const market = [
    //     { id: 10, name: 'potato', group: 'vegetable' },
    //     { id: 12, name: 'apple', group: 'fruit' },
    //     { id: 11, name: 'grape', group: 'vegetable' },
    //     { id: 14, name: 'banana', group: 'fruit' },
    //     { id: 16, name: 'strawberry', group: 'fruit' },
    //     { id: 17, name: 'tomato', group: 'vegetable' },
    //   ];

    // return (
    //     market.filter((fruit) => fruit.group === "fruit")
    //     .map((item, index) => (
    //         <div key={item.id} style={{border : "solid 1px black"}}>
    //             <p>이름 : {item.name}</p>
    //             <p>ID : {item.id}</p>
    //         </div>
    //     ))
    // );

    return(<>
            <div style={{color : props.color}}>안녕하세요 {props.name}</div>
            <button style={{color : props.color}} onClick={props.handler}>버튼!</button>
        </>
    );
  }
  
  export default Hello; // export를 통해 Hello컴포넌트를 default로 다른 곳에서 쓸 수 있게된다.
  // export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있다.
  // 이렇게 하면 import할 때 {} 없이 import할 수 있다.
  