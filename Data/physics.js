const getAcceleration = (obj) => {
    if (obj.m != undefined && obj.m !== 0) return obj.f / obj.m
    else if (obj.Δt != undefined && obj.Δt !== 0) return obj.Δv / obj.Δt
    else if (obj.t != undefined && obj.t !== 0) return 2 * obj.d / (obj.t * obj.t)
    return "impossible"
}