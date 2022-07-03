document.addEventListener("DOMContentLoaded", () => console.log("SCRIPTS CARGADOS"));



// VARIABLES

const addTaskBtn = document.querySelector(".form__button");
const formInput = document.querySelector(".form__input");
const tasksList = [];

console.log(formInput);



// FUNCTIONS

const writeTask = (tsk) => {
    const card = document.createElement("div");
    card.classList.add("main-container__card");
    card.innerHTML = `
        <h3 class="main-container__card__h3">${tsk}</h3>
        <div class="card__info__buttons">
            <button class="info__button info__button--checked">
                <img src="/resources/img/check.svg" alt="icono correspondiente al botón de confirmación de tarea" class="info__button__img">
            </button>
            <button>
                <img src="/resources/img/close.svg" alt="icono correspondiente al botón de confirmación de tarea" class="info__button__img">
            </button>
            <button>
                <img src="/resources/img/edit.svg" alt="icono correspondiente al de confirmación de tarea" class="info__button__img">
            </button>
        </div>
    `;

    return card;
};

const newTask = () => {
    const task = {
        id: tasksList.length,
        title: formInput.value
    };

    document.querySelector(".main-container").appendChild(writeTask((task.id + 1) + " - " + task.title));

    tasksList.push(task);

    formInput.value = "";
};



// START APP

const startApp = () => {
    addTaskBtn.addEventListener("click", newTask);
    formInput.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            newTask();
        };
    });

    
};

startApp();
