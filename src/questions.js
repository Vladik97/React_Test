export default [
    {
        name: "JavaScript",
        questions: [
            {
                question: "Какой оператор из этих выполняет не только математические операции?",
                type: "oneOF",
                answers: [
                        {
                            text: "*",
                            weight: 5

                        },
                        {
                            text: "-",
                            weight: 0
                        },
                        {
                            text: "+",
                            weight: 0
                        },
                        {
                            text: "/",
                            weight: 0
                        },
                        {
                            text: ">>>",
                            weight: 0
                        }
                ]
            }, 
            {
                question: 'Чему равна переменная name? let name = "пупкин".replace("п", "д")',
                type: "oneOF",
                answers: [
                    {
                        text: "дудкин",
                        weight: 0
                    },
                    {
                        text: "дупкин",
                        weight: 5
                    },
                    {
                        text: "пупкин",
                        weight: 0
                    },
                    {
                        text: "ляпкин-тяпкин",
                        weight: 0
                    }
                ]
            },
            {
                question: "Выберите правильные варианты объявления массива, то есть такие, в результате которых мы получаем массив из двух чисел 1 и 2.",
                type: "manyOF",
                answers: [
                    {
                        text: "new Array.prototype.constructor(1, 2)",
                        weight: 0
                    },
                    {
                        text: "new Array(1, 2)",
                        weight: 5
                    },
                    {
                        text: "Array(1, 2)",
                        weight: 0
                    },
                    {
                        text: "[1, 2]",
                        weight: 5
                    },
                    {
                        text: "1..2",
                        weight: 0
                    },
                    {
                        text: "Все варианты правильные.",
                        weight: 0
                    }
                ]
            },
            {
                question: "Сколько параметров можно передать функции?",
                type: "oneOF",
                answers: [
                    {
                        text: "Ровно столько, сколько указано в определении функции.",
                        weight: 0
                    },
                    {
                        text: "Любое количество.",
                        weight: 5
                    },
                    {
                        text: "Сколько указано в определении функции или больше.",
                        weight: 0
                    },
                    {
                        text: "Сколько указано в определении функции или меньше.",
                        weight: 0
                    }
                ]
            },
            {
                question: "Каких операторов из этого списка нет в javascript?",
                type: "manyOF",
                answers: [
                    {
                        text: "*",
                        weight: 5
                    },
                     {
                        text: "^",
                        weight: 0
                    },
                     {
                        text: "%",
                        weight: 5
                    }, 
                    {
                        text: "#",
                        weight: 0
                    },
                    {
                        text: ">>>",
                        weight: 5
                    }
                ]
            }
        ]      
    },
    {
        name: "jQuery",
        questions: [
            {
                question: 'Как правильно убрать рамку (border) у элемента с идентификатором "someImg"?',
                type: "manyOF",
                answers: [
                        {
                            text: '$("#someImg").css("border","none")',
                            weight: 5
                        },
                        {
                            text: '$("#someImg").removeCss("border")',
                            weight: 0
                        },
                        {
                            text: '$("#someImg").removeBorder()',
                            weight: 0
                        },
                        {
                            text: '$("#someImg").attr("border","none")',
                            weight: 5
                        },
                        {
                            text: '$("#someImg").removeAttr("border")',
                            weight: 0
                        }
                ]        
            },
            {
                question: 'Как правильно спрятать элемент с идентификатором "el"?',
                type: "oneOF",
                answers: [
                    {
                        text: '$("#el").display("none")',
                        weight: 0
                    },
                    {
                        text: '$("#el").hide()',
                        weight: 5
                    },
                    {
                        text: '$("#el").hide(true)',
                        weight: 0
                    },
                    {
                        text: '$("#el").show(false)',
                        weight: 0
                    }
                ]
            },
            {
                question: "Необходимо установить красный цвет фона для элемента с идентификатором 'element'. Какой фрагмент кода не позволит это сделать?",
                type: "oneOF",
                answers: [
                    {
                        text: '$("#element").css("background-color","red")',
                        weight: 5
                    },
                    {
                        text: '$("#element").css("bgcolor","red")',
                        weight: 0
                    },
                    {
                        text: '$("#element").css("background","red")',
                        weight: 0
                    },
                    {
                        text: '$("#element").css("backgroundColor","red")',
                        weight: 0
                    }
                ]
            }
        ]      
    },
    // {
    //     name: "Vit9",
    //     questions: [
    //         {
    //             question: 'ghfdtkmysq gfwfy?',
    //             type: "manyOF",
    //             answers: [
    //                     {
    //                         text: 'afsafsafaf',
    //                         weight: true
    //                     },
    //                     {
    //                         text: '$("#someImg").removeCss("border")',
    //                         weight: false
    //                     },
    //                     {
    //                         text: '$("#someImg").removeBorder()',
    //                         weight: false
    //                     },
    //                     {
    //                         text: '$("#someImg").attr("border","none")',
    //                         weight: true
    //                     },
    //                     {
    //                         text: '$("#someImg").removeAttr("border")',
    //                         weight: false
    //                     }
    //             ]        
    //         },
    //         {
    //             question: 'Как правильно спрятать элемент с идентификатором "el"?',
    //             type: "oneOF",
    //             answers: [
    //                 {
    //                     text: '$("#el").display("none")',
    //                     weight: false
    //                 },
    //                 {
    //                     text: '$("#el").hide()',
    //                     weight: true
    //                 },
    //                 {
    //                     text: '$("#el").hide(true)',
    //                     weight: false
    //                 },
    //                 {
    //                     text: '$("#el").show(false)',
    //                     weight: false
    //                 }
    //             ]
    //         },
    //         {
    //             question: "Необходимо установить красный цвет фона для элемента с идентификатором 'element'. Какой фрагмент кода не позволит это сделать?",
    //             type: "oneOF",
    //             answers: [
    //                 {
    //                     text: '$("#element").css("background-color","red")',
    //                     weight: true
    //                 },
    //                 {
    //                     text: '$("#element").css("bgcolor","red")',
    //                     weight: false
    //                 },
    //                 {
    //                     text: '$("#element").css("background","red")',
    //                     weight: false
    //                 },
    //                 {
    //                     text: '$("#element").css("backgroundColor","red")',
    //                     weight: false
    //                 }
    //             ]
    //         }
    //     ]      
    // }
];

//,
    // {
    //     name: "test JavaScript",
    //     questions: [
    //         {question: "Какой оператор из этих выполняет не только математические операции?",
    //         type: "oneOF",
    //         answers: [
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },

    //         },
    //         {
    //             question: "Чему равна переменная name? let name = "пупкин".replace("п", "д")",
    //             type: "manyOF",
    //             answers: [
    //                 {
    //                     text: "дудкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "дупкин",
    //                     weight: "+5"
    //                 },
    //                 {
    //                     text: "пупкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "ляпкин-тяпкин",
    //                     weight: "-5"
    //                 },
    //             ]
    //         },
    //         {
    //             question: "Чему равна переменная name? let name = "пупкин".replace("п", "д")",
    //             type: "manyOF",
    //             answers: [
    //                 {
    //                     text: "дудкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "дупкин",
    //                     weight: "+5"
    //                 },
    //                 {
    //                     text: "пупкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "ляпкин-тяпкин",
    //                     weight: "-5"
    //                 },
    //             ]
    //         }
        
    //     ]
    // },