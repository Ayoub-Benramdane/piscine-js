function matchCron(cron,date){
    cron = cron.split(' ')
   if (cron[0] != "*" && cron[0] != date.getMinutes()) return false
   if (cron[1] != "*" && cron[1] != date.getHours()) return false
   if (cron[2] != "*" && cron[2] != date.getDate()) return false
   if (cron[3] != "*" && cron[3] != date.getMonth() +1) return false
   if (cron[4] != "*" && cron[4] != date.getDay()) return false
   return true
}