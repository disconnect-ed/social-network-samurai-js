const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение дальнейших направлений развития. '},
        {id: 3, message: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития.'},
        {id: 4, message: 'Новая модель организационной деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'},
        {id: 5, message: 'Таким образом реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, type: 'user', message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;