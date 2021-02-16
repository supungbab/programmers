function turn(tKey){
    var TKey=new Array();
    for(var i=0;i<tKey.length;i++)
        TKey[i]=new Array();

    for(var i=0;i<tKey.length;i++){
        for(var j=0;j<tKey.length;j++){
            TKey[j][(tKey.length-1)-i]=tKey[i][j];
        }
    }
    return TKey;
}
function TableS(M,N,lock){
    var Table=new Array((M-1)*2+N);
    for(var i=0;i<Table.length;i++)
        Table[i]=new Array();
    for(var i=0;i<N;i++){
        for(var j=0;j<N;j++){
            Table[(M-1)+i][(M-1)+j]=lock[i][j];
        }
    }
    return Table;
    
}
function solution(key, lock) {
    var answer = false;
    var tKey=key;
    var M=key.length, N=lock.length;
    var Table;
    
    var q=0,p=0;
    var check=true;
    for(var z=0;z<4;z++){
        for(var c=0;c<M+(N-1);c++){
            for(var k=0;k<M+(N-1);k++){
                q=c;check=true;
                Table=TableS(M,N,lock);
                for(var i=0;i<M;i++){
                    p=k;
                    if(Table[q]!=''){
                        for(var j=0;j<M;j++){
                            if(Table[q][p]!=undefined){
                                if(Table[q][p]^key[i][j]){
                                    Table[q][p]+=key[i][j];
                                }
                                else{
                                    check=false;
                                    break;
                                }
                            }
                            p++;
                        }
                        if(check==false)
                            break;
                    }
                    q++;
                }
                var count=0;
                for(var i=0;i<N;i++){
                    for(var j=0;j<N;j++)
                        count+=Table[(M-1)+i][(M-1)+j];
                }
                if(count==N*N){
                    answer=true;
                }
            }
        }
        key=turn(key);
    }
    return answer;
}
