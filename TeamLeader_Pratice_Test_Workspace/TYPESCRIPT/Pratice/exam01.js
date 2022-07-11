/*
    this code is pratice of Team-leader.
*/
/*
    ___Basic Type___
    @parm   string    문자열
    @parm   boolean   true/false value
    @parm   number    숫자
    @parm   symbol    Symbol 생성자를 호출해 생성된 고윳값
    @parm   any       Every Type  코드를 쓰는 동안 정해지지않은 변수를 지정할 수 있음.
    @parm   unknown   any와 비슷하나 먼저 타입을 지정해주거나 좁히지 않으면 조작이 허용되지않음.
    @parm   never     도달할 수 없는 코드를 나타냄
    @parm   void        값이 없음.
*/
/*
    null을 반환하는 함수
*/
function getName() {
    //
}
/*
    화살표 함수는 never type을 반환함
*/
var logger = function () {
    while (true) {
        console.log('서버가 실행 중');
    }
};
// logger의 타입은 never이다.
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}
console.log(padLeft("Hello World!", true));
