const listUtil = require('./linkedlist.js')
const queueUtil = require('./queue.js')
const queue = new queueUtil.Queue()
const checked = new Set()
const tempData1 = {
    "_id" : "5e0997d5b6cde30684cf8816",
    "dest" : [
            "01012341234",
            "01012349876",
            "01031241057",
            "01031241234",
            "01032411234",
            "01033241123",
            "01043211262",
            "01044231134",
            "010472817283",
            "01058853342",
            "01066763393",
            "01068851234",
            "01090982192",
            "123141212312",
            "273327332373"
    ],
    "source" : "01031241057",
    "__v" : 0
}
const tempData2 = {
    "_id" : "5e0997d5b6cde30684cf8816",
    "dest" : [
            "01012341234",
            "01012349876",
            "01031241057",
            "01031241234",
            "01032411234",
            "01033241123",
            "01043211262",
            "01044231134",
            "010472817283",
            "01058853342",
            "01066763393",
            "01068851234",
            "01090982192",
            "123141212312",
            "273327332373"
    ],
    "source" : "01012345678",
    "__v" : 0
}
const tempData3 = {
    "_id" : "5e0997d5b6cde30684cf8816",
    "dest" : [
            "01012341234",
            "01012349876",
            "01031241057",
            "01031241234",
            "01032411234",
            "01033241123",
            "01043211262",
            "01044231134",
            "010472817283",
            "01058853342",
            "01066763393",
            "01068851234",
            "01090982192",
            "123141212312",
            "273327332373"
    ],
    "source" : "01099999999",
    "__v" : 0
}
const tempData4 = {
    "_id" : "5e0997d5b6cde30684cf8816",
    "dest" : [
            "01012341234",
            "01012349876",
            "01031241057",
            "01031241234",
            "01032411234",
            "01033241123",
            "01043211262",
            "01044231134",
            "010472817283",
            "01058853342",
            "01066763393",
            "01068851234",
            "01090982192",
            "123141212312",
            "273327332373"
    ],
    "source" : "01088888888",
    "__v" : 0
}
const tempData5 = {
    "_id" : "5e0997d5b6cde30684cf8816",
    "dest" : [
            "01012341234",
            "01012349876",
            "01031241057",
            "01031241234",
            "01032411234",
            "01033241123",
            "01043211262",
            "01044231134",
            "010472817283",
            "01058853342",
            "01066763393",
            "01068851234",
            "01090982192",
            "123141212312",
            "273327332373"
    ],
    "source" : "01077777777",
    "__v" : 0
}
//make linked list
const dummyData = [tempData1, tempData2, tempData3, tempData4, tempData5]

const list = new listUtil.LinkedList()
dummyData.forEach(element => {
    list.addLast(element)
});
const target = "01077777777"

queue.push(list.head.data.source)
list.removeFirst()
const ret = new Array()

while (!queue.empty()) {
    const top = queue.pop()
    
    //return array에 중간 다리 추가
    ret.push(top)

    //찾으면
    if(top === target){
        console.log("FOUND!" + target)
        break
    }

    //못찾으면
    //중복 체크
    if(!checked.has(top)){
        //set에 데이터 넣기
        checked.add(top)
        //큐에 친구 넣기
        queue.push(list.head.data.source)
        list.removeFirst()
    }

}

if (ret.length > 0) {
    console.log("촌 수 : " + ret.length)
    console.log(ret)
}

