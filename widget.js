const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';

const SUBGOAL = fieldData.subGoal
const SUBCOUNT = 0;

    window.addEventListener('onEventReceived', obj => {
        let { event, listener } = obj.detail
        if (!event) return
      
        const type = listener.split('-')[0]
      
        switch(type) {
          case EVENT.FOLLOWER: addFollow()
            break
          case EVENT.SUBSCRIBER: addSub()
            break
          default: return
        }
      })

      function addSub() {
        subCount++
      }

      console.log(SUBGOAL)