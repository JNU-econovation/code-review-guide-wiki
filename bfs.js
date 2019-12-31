const listUtil = require('./linkedlist.js')
const queueUtil = require('./queue.js')
const disjointSetUtil = require('./disjoint_set.js')

const disjoint_set = new disjointSetUtil.DisjointSet()
const queue = new queueUtil.Queue()
const checked = new Set()
const list = new listUtil.LinkedList()

function make_linked_list(jsonData){
    //json object 파싱 필요할 수도 있음!
    jsonData.dest.forEach(element => {
        list.addLast(element)
    });
}

function bfs(target, jsonData){

    make_linked_list(jsonData)

    queue.push(list.head.data.source)
    list.removeFirst()
    
    while (!queue.empty()) {
        const top = queue.pop()
    
        //disjoint set에 추가
        disjoint_set.make_set(top)
    
        //찾으면
        if(top === target){
            console.log("FOUND!" + target)
            //경로 출력
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

}

