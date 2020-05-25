let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Привет всем", likeCount: 2},
            {id: 2, message: "Как дела у вас", likeCount: 10},
            {id: 3, message: "Я тоже так думаю", likeCount: 5},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Иван"},
            {id: 2, name: "Петр"},
            {id: 3, name: "Сергей"}
        ],
        messages: [
            {id: 1, name: "Иван", message: "Привет всем"},
            {id: 1, name: "Сергей", message: "Почему так долго"},
            {id: 1, name: "Петр", message: "Это я пишу вам"}
        ]
    }
}

export default state;