

function findClosest1(words, word1, word2) {
    let arr1 = []
    let arr2 = []
    words.forEach((item,index) => {
        if(item == word1) {
            arr1.push(index)
        }else if(item == word2) {
            arr2.push(index)
        }
    })
    let i = 0, j=0
    let min = Infinity
    while(i<arr1.length||j<arr2.length) {
        let diff = Math.abs(arr1[i] - arr2[j])
        min = min>diff?diff:min
        console.log(i,j,diff,min)
        if(arr1[i]>arr2[j] && j<arr2.length-1)j++
        else if(arr1[i]<arr2[j] && i<arr1.length-1)i++
        else break
    }
    return min
}

function findClosest(words, word1, word2) {
    let i = -1, j = -1, res = Infinity
    for(let k = 0;k<words.length;k++) {
        if(words[k] === word1) {
            i = k
            if(j>=0) {
                let diff = Math.abs(i-j)
                res = res>diff?diff:res
            }
        }
        if(words[k] === word2) {
            j = k
            if(i>=0) {
                let diff = Math.abs(i-j)
                res = res>diff?diff:res
            }
        }
        if(res<1)break
    }
    return res
}

let words = ["ry","qy","zey","wi","y","fyk","rlw","hv","cb","t","m","vwb","d","pgx","k","o","t","lt","awo","n","yv","ljk","h","wqy","ow","wt","f","y","jo","bvs","yf","qvv","ln","f","tr","ffu","sn","t","vc","qkp","f","ssx","o","sut","on","q","b","g","tl","w","wg","tv","kb","wg","try","ig","a","co","s","lar","kcx","fxn","z","uxs","zwp","inx","e","edh","xfc","aq","wi","o","q","d","w","k","eo","dm","n","s","uf","xv","i","r","m","omq","yw","s","jj","ce","o","dsm","fbp","f","zq","j","qb","sd","zi","v","olz","p","kr","atk","l","aqz","pyy","c","de","nn","ngg","ryt","v","rcd","qv","i","gan","o","cw","wl","ti","hyx","oju","pr","xr","syt","n","brz","odu","r","zy","k","zg","tab","p","xfa","lg","itt","m","h","qew","i","iuw","agc","qv","xf","g","a","gn","zwl","xfe","x","dhn","t","c","liq","zhq","fh","u","om","bni","uza","u","ayz","hng","csn","tq","r","jw","x","vou","m","tp","g","wtw","d","vki","s","ehu","zly","r","ks","iva","olf","vp","j","f","pnk","gdg","vxm","d","z","d","aca","nm","d","uxx","qjp","hv","lsk","wd","mz","mrr","b","u","ka","km","grz","pra","i","moh","h","cl","ajr","mpf","wwg","vzv","d","jah","bn","vh","yyn","ab","ly","wr","hy","d","xj","lt","ok","ce","rjq","gat","y","igz","awi","qn","a","ln","qwh","m","ef","dz","nc","k","gr","s","qyg","sg","sfu","vb","wn","gq","q","hq","rzz","inu","l","vee","ra","m","qg","nzy","cbu","tn","jl","wxl","byn","ge","b","nlm","tj","fk","r","bdk","z","tb","eyv","wna","map","ba","kx","hs","w","zc","mv","s","rvx","m","f","rz","ksv","dgu","oeo","t","of","nxo","gy","ckj","u","uh","ea","fqm","v","h","dj","nwa","n","nea","tae","ws","hoy","n","u","uyw","bc","iev","rr","uwm","wx","zs","tb","c","nwy","cle","fp","ww","h","uf","kvd","kmn","jjo","a","pyg","ucs","qk","sv","j","won","fg","h","b","etg","bxe","twi","ckp","rt","k","axc","rad","bmx","gzi","qe","tff","gp","kmm","ud","eu","sf","tl","zt","nfj","f","fz","u","ikt","u","i","aky","w","pu","hs","gm","yv","q","lo","q","eh","xg","xe","ux","mo","f","yog","m","lpz","dti","z","pj","vsv","ho","loj","vjb","tms","op","u","tx","nk","x","q","xgq","vw","ghz","cq","wk","w","ow","phi","b","p","c","ye","bi","ylk","f","ea","ay","lcj","xsw","yp","jvy","cf","mr","da","n","hb","icq","hfb","vl","ej","ydo","ut","ju","l","vx","ov","oan","b","m","wqr","wox","rd","xu","eq","va","v","s","zqt","z","gr","iw","xag","jb","mv","acb","nv","ct","srg","yv","w","si","yc","ut","zj","leu","sza","xe","otp","el","b","jtq","h","s","jc","t","az","eir","j","z","kp","ape","hs","y","zh","ypz","xn","ust","b","e","jil","kzq","fq","yo","ffb","zs","s","dt","s","o","i","xc","bd","xxk","u","ui","l","qrd","y","c","a","su","e","mul","tpq","x","ia","a","up","wqt","zl","ot","u","kxl","zf","p","hl","x","te","e","rf","xc","o","aow","glu","wrb","k","xem","hw","n","qn","sl","a","rd","sj","w","sl","muf","kz","mbq","h","q","cc","zjy","vqe","wmr","swa","c","q","o","fih","qg","z","ki","ay","e","v","r","b","xch","kt","se","vad","cg","yo","aj","qrl","fwt","zq","ydy","nf","s","c","k","cg","lfq","g","iqv","zy","hb","qnp","yv","y","qoq","v","q","p","f","v","foz","u","m","j","dc","rj","cku","f","y","kb","win","w","u","nid","zie","ry","iwg","nrq","cxm","in","ke","d","br","y","pbq","tg","njw","foo","tjs","i","l","dh","x","oxq","upd","rwf","cpd","h","th","bnq","lj","ks","z","z","zp","us","v","l","qb","xxx","pw","pwy","ful","yjl","tka","e","n","mne","qtp","ll","f","q","si","fnl","xiz","f","tcl","fif","mhx","p","rj","lnn","jg","hca","o","l","vzo","n","cp","dll","itw","bze","pio","rj","qa","h","iaa","f","fy","qe","n","z","rt","nt","s","h","n","ez","qn","dp","mu","vls","vjx","rr","pw","jx","a","c","i","djx","ans","bs","v","arr","wl","za","ay","x","wzo","x","l","j","za","hb","yu","o","gtm","vg","bph","say","n","ecd","ahh","hyg","tn","cw","l","ed","kzn","ldf","z","l","bh","fes","ezs","xqu","l","m","xgx","yi","vf","l","acc","vo","jdt","kp","t","h","z","e","hfr","lg","s","ihm","tve","fc","t","uhl","mo","lk","c","qvu","elu","pz","d","mh","k","ap","jym","u","fwf","kp","vg","lhz","vp","g","om","x","a","yct","y","c","r","tnl","vb","o","y","spj","s","fcs","wxf","afa","b","a","hg","qsx","ojf","o","y","q","k","u","muu","g","hdc","bk","mw","p","xns","moq","b","cac","dt","pv","t","iw","uku","c","hv","zuf","mo","mw","rbq","qdl","o","xdh","ir","zn","d","tpl","b","yql","scu","hp","d","m","rc","cy","yw","kz","e","o","e","cps","si","c","h","ayw","zyo","t","nl","fz","yf","wt","gwh","epg","dvr","y","v","jc","pk","y","l","jp","bu","iwh","f","sd","j","b","y","ba","hpy","zsf","qo","gll","nap","dk","b","cb","zk","yhy","em","k","xxk","i","mb","uo","r","dg","cwd","a","tb","iv","o","pf","j","p","lcl","w","b","ch","vff","hc","lk","k","n","qsl","ies","ucm","ym","mw","w","iq","rfp","dyv","dqq","h","sp","bys","c","rq","od","xe","qla","qt","kgg","i","nbx","by","gh","rxe","rgs","mfc","s","ad","lqq","jan","j","a","m","ivu","lkb","rpk","jud","ix","lu","n","zu","jq","b","cr","q","sn","ro","szm","ao","ehs","kl","gfe","h","sc","dwz","d","l","q","nv","x","ls","fie","tvo","m","hhe","j","q","qwa","m","qo","mj","s","svu","o","n","ics","j","mm","k","c","mx","ii","ues","z"]

let word1 = "a", word2 = "g"

console.log(findClosest(words, word1, word2))