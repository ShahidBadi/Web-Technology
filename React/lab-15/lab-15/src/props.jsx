import { Component } from "react";

function Child(props) {
    return (
        <h1>{props.message}</h1>
    )
}
function Parent() {
    return (
        <Child message="hello" />
    )
}
function Eventhandler() {
    const event = () => {
        console.log("hello world")
    }
    return (
        <div>
            <button onClick={event}>click me</button>
        </div>
    )
}
export { Parent, Eventhandler };
