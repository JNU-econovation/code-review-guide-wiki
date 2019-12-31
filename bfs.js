const listUtil = require('./linkedlist.js')
const queueUtil = require('./queue.js')
const disjointSetUtil = require('./disjoint_set.js')

const disjoint_set = new disjointSetUtil.DisjointSet()
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
const dummyData = [tempData1, tempData2, tempData3, tempData5, tempData4]

const list = new listUtil.LinkedList()
dummyData.forEach(element => {
    list.addLast(element)
});
const target = "01077777777"

queue.push(list.head.data.source)
list.removeFirst()

while (!queue.empty()) {
    const top = queue.pop()

    //disjoint set에 추가
    disjoint_set.make_set(top)

    //찾으면
    if(top === target){
        console.log("FOUND!" + target)
        disjoint_set.printSet()
        break
    }

    //못찾으면
    //중복 체크
    if(!checked.has(top)){
        //set에 데이터 넣기
        checked.add(top)

        const friend = list.head.data.source
        //큐에 친구 넣기
        queue.push(friend)

        //union 만들기
        disjoint_set.make_set(friend)
        disjoint_set.union(friend, top)

        list.removeFirst()
    }

}

/*
if (ret.length > 0) {
    console.log("촌 수 : " + ret.length)
    console.log(ret)
}
 */

