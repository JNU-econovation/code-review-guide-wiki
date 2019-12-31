class DisjointSet{

    constructor(){
        this.array = []
    }
    make_set(x){
        this.array[x] = x
    }
    union(x, y){
        x = this.find(x)
        y = this.find(y)
        
        if(x == y) return
        this.array[y] = x

    }
    find(x){
        if(this.array[x] == x) return x
        return this.array[x] = this.find(this.array[x])
    }
    printSet(){
        console.log(this.array)
    }

}

exports.DisjointSet = DisjointSet
