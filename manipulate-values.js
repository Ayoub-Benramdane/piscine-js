function filterValues(obj,func){
    let rtn = {}
    for (const key in obj){
        if (func(obj[key])) rtn[key] = obj[key]
    }
    return rtn
}

function mapValues(obj,func){
    let rtn = {}
    for (const key in obj){
        rtn[key] = func(obj[key]) 
    }
    return rtn
}

function reduceValues(obj,func,init){
    let rtn = 0
    if (init != undefined) {
        rtn = init
    }
    for (const key in obj){
        rtn = func(rtn,obj[key])
    }
    return rtn
}