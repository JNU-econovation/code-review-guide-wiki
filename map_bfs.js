// 데이터베이스에서 모든 데이터를 불러와서 map으로 변환 (휴대폰 번호(string), JSON)

// BFS -> (source, map function)
    // Q에 source 넣기
    // top = dequeue
    // map에서 검색 -> dest 얻기
    // dest들을 돌면서 set 검사
        //없으면 -> q, disjoint set 삽입
        //있으면 -> continue
        //찾으면 break;
    // set update