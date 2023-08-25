export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Enim sit id ea eu nostrud sit id Lorem aliquip laboris. Fugiat ut nostrud enim duis eiusmod. Ut est et id excepteur mollit.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: '',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: '',
            picture: null
        }
    ]
})