const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';

const SUBGOAL = 0;

window.addEventListener('onWidgetLoad', obj => {
    SUBGOAL = fieldData.subGoal;
    })

    



