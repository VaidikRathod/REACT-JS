import Counter2 from "./counter2";

function Counter1(props){
    return <div className="c1">
        <Counter2 a ={props.a}/> &nbsp;
        {props.a}
    </div>
}

export default Counter1
