let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)


// digital clock

function digitalClock(){

    //select 
    let time = $('#time')
    let flag = $('#tag')
    let currentTime = new Date()
    //print(currentTime)
    let hour = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()
    let tag = 'AM'

      // format in 12
      hour = hour === 0 ? hour = 12 : hour

      if(hour > 12){
          hour = hour - 12
          tag = 'PM'
      }
      if(hour === 12){
          tag = 'PM'
      }

    //insert 0
    sec = sec<10 ? sec = '0' + sec : sec
    min = min<10 ? min = '0' + min : min
    hour = hour < 10 ? hour = '0' + hour : hour

    // print(hour)
    // print(min)
    // print(sec)

    let displayTime = `${hour} : ${min} : ${sec}`

    //var dis = hour + ':' + min + ':'+  sec

    time.innerHTML = displayTime
    flag.innerHTML = tag

}
digitalClock()

setInterval(digitalClock,1000)



