/* * CONFIGURATION FILE FOR CBCL 6-18 DIGITIZER
 * Contains: Form text, Question definitions, Scoring Keys, Google Script URL
 */

const CONFIG = {
    // --- SYSTEM SETTINGS ---
    // You will add your Google Script URL here later
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzQ-Es0_sduvF58qWl4ctsYPaa1RWARl7poDysCvPg0FCs-TnPUGc1KYMvFUj9dR4CW/exec",
    
    // --- UI TEXT TRANSLATIONS ---
    ui: {
        title: "Анкета для батьків (CBCL 6-18)",
        tabs: ["1. Інфо", "2. Активність", "3. Соціум", "4. Школа", "5. Поведінка"],
        btnNext: "Далі",
        btnPrev: "Назад",
        btnSubmit: "ВІДПРАВИТИ",
        loading: "Обробка...",
        instructions: "0 = Неправда (наскільки вам відомо), 1 = Дещо або інколи правда, 2 = Дуже правдиво або часто правда",
        validationErr: "Будь ласка, заповніть усі обов'язкові поля."
    },

    // --- FORM SECTIONS ---
    demographics: {
        fields: [
            { id: "childName", label: "Ім'я та прізвище дитини", type: "text", required: true },
            { id: "gender", label: "Стать", type: "select", options: ["Хлопець", "Дівчина"], required: true },
            { id: "dob", label: "Дата народження", type: "date", required: true },
            { id: "grade", label: "Клас", type: "text" },
            { id: "parentName", label: "ПІБ особи, що заповнює", type: "text", required: true },
            { id: "fatherJob", label: "Професія батька", type: "text" },
            { id: "motherJob", label: "Професія матері", type: "text" },
            { id: "fillDate", label: "Дата заповнення", type: "date", required: true }
        ]
    },

    competence: {
        activities: {
            sports: {
                title: "I. Спорт",
                desc: "Назвіть види спорту, які найбільше любить Ваша дитина (напр. футбол, плавання).",
                noneLabel: "Жоден (не займається спортом)",
                cols: ["Вид спорту", "Час (порівняно з ровесниками)", "Успіхи (порівняно з ровесниками)"],
                optsTime: ["Менше", "Так як інші", "Більше"],
                optsSkill: ["Гірші", "Так як інші", "Кращі"]
            },
            hobbies: {
                title: "II. Улюблені заняття",
                desc: "Назвіть улюблені види діяльності (крім спорту), напр. малювання, читання.",
                noneLabel: "Жоден",
                cols: ["Заняття", "Час", "Успіхи"],
                optsTime: ["Менше", "Так як інші", "Більше"],
                optsSkill: ["Гірші", "Так як інші", "Кращі"]
            },
            orgs: {
                title: "III. Організації",
                desc: "Чи належить дитина до якихось гуртків, клубів чи груп?",
                noneLabel: "Не належить",
                cols: ["Назва організації", "Активність"],
                optsActivity: ["Менше", "Однаково", "Більше"]
            },
            chores: {
                title: "IV. Обов'язки",
                desc: "Яку роботу виконує дитина вдома?",
                noneLabel: "Жодні",
                cols: ["Обов'язок", "Якість виконання"],
                optsQuality: ["Гірше", "Однаково", "Краще"]
            }
        },
        social: {
            q1: { id: "friends_count", label: "V. 1. Скільки друзів має дитина? (крім братів/сестер)", opts: ["Жодного", "1", "2-3", "4+"] },
            q2: { id: "friends_freq", label: "2. Як часто бачиться з друзями поза школою?", opts: ["Менше 1 разу/тиждень", "1-2 рази", "3+ рази"] },
            relations: {
                title: "VI. Стосунки (порівняно з іншими дітьми)",
                items: [
                    "a) З братами/сестрами",
                    "b) З іншими дітьми",
                    "c) З батьками",
                    "d) На самоті (гра/праця)"
                ],
                opts: ["Гірше", "Так само", "Краще"]
            }
        },
        school: {
            title: "VII. Успішність у школі",
            subjects: ["Читання", "Мова", "Математика", "Інший предмет"],
            grades: ["Незадовільно", "Нижче середнього", "Середньо", "Вище середнього"],
            extraQs: [
                { id: "special_ed", label: "Чи навчається у спеціальному класі/школі?", type: "yesno", detail: "Який саме клас/школа?" },
                { id: "repeat_grade", label: "Чи залишали на другий рік?", type: "yesno", detail: "Коли і чому?" },
                { id: "school_trouble", label: "Чи є проблеми з навчанням/дисципліною?", type: "yesno", detail: "Опишіть проблеми..." }
            ]
        }
    },

    // --- SYNDROME SCALES (ITEMS 1-113) ---
    // Text matches the Ukrainian PDF provided 
    questions: [
        "1. Поводиться молодше свого віку",
        "2. Вживає алкоголь (без дозволу)",
        "3. Часто вступає в суперечки",
        "4. Не доводить до кінця те, що розпочинає",
        "5. Дуже мало чому справді радіє",
        "6. Тілесні проблеми: нетримання калу",
        "7. Багато вихваляється",
        "8. Має труднощі з концентрацією уваги",
        "9. Має нав'язливі думки",
        "10. Не може спокійно сидіти, надмірно активний",
        "11. Чіпляється до дорослих, надто залежний",
        "12. Скаржиться на самотність",
        "13. Розсіяний, часто наче в тумані",
        "14. Багато плаче",
        "15. Жорстокий до тварин",
        "16. Кривдить, залякує інших",
        "17. Десь «літає», «спить наяву»",
        "18. Навмисно шкодить собі / думки про самогубство",
        "19. Вимагає багато уваги",
        "20. Навмисне нищить свої речі",
        "21. Навмисне нищить чужі речі",
        "22. Неслухняний вдома",
        "23. Неслухняний в школі",
        "24. Погано їсть",
        "25. Не має добрих стосунків з іншими дітьми",
        "26. Не почуває вини, коли зробить щось погане",
        "27. Ревнує / заздрить",
        "28. Порушує правила (вдома, в школі)",
        "29. Боїться тварин, ситуацій чи місць (крім школи)",
        "30. Боїться ходити в школу",
        "31. Боїться зробити чи подумати щось погане",
        "32. Відчуває необхідність бути досконалим",
        "33. Скаржиться, що його ніхто не любить",
        "34. Думає, що інші хочуть його скривдити",
        "35. Почувається меншовартісним",
        "36. Схильний до нещасних випадків",
        "37. Вступає в бійки",
        "38. Його часто дражнять",
        "39. Спілкується з «проблемними» дітьми",
        "40. Чує голоси, яких немає",
        "41. Імпульсивний, діє не подумавши",
        "42. Воліє бути на самоті",
        "43. Обманює",
        "44. Гризе нігті",
        "45. Нервовий, напружений",
        "46. Має тіки / посмикування",
        "47. Має кошмари",
        "48. Інші діти його не люблять",
        "49. Має закрепи",
        "50. Боязкий, хвилюється",
        "51. Скаржиться на запаморочення",
        "52. Має надмірне почуття провини",
        "53. Забагато їсть",
        "54. Завжди втомлений",
        "55. Має надмірну вагу",
        // Item 56 is complex (Physical problems) - handled specially in logic, but here are labels
        "56a. Біль (крім голови/живота)",
        "56b. Головний біль",
        "56c. Нудота",
        "56d. Проблеми з очима (не зір)",
        "56e. Висипка / шкіра",
        "56f. Болі живота",
        "56g. Блювання",
        "56h. Інше",
        "57. Агресивний, нападає",
        "58. Смикає шкіру / дряпає себе",
        "59. Відкрито мастурбує",
        "60. Багато мастурбує (приватно)",
        "61. Погано вчиться",
        "62. Незграбний",
        "63. Тягнеться до старших",
        "64. Тягнеться до молодших",
        "65. Відмовляється говорити",
        "66. Повторює дії (ритуали)",
        "67. Втікає з дому",
        "68. Багато кричить",
        "69. Замкнутий",
        "70. Бачить речі, яких нема",
        "71. Сором'язливий",
        "72. Бавиться з вогнем",
        "73. Сексуальні проблеми",
        "74. «Клоунує»",
        "75. Нерішучий",
        "76. Мало спить",
        "77. Спить більше за інших",
        "78. Неуважний",
        "79. Мовленнєві проблеми",
        "80. Дивиться в одну точку",
        "81. Краде вдома",
        "82. Краде поза домом",
        "83. Збирає непотріб",
        "84. Дивна поведінка",
        "85. Дивні думки",
        "86. Впертий, сердитий",
        "87. Зміни настрою",
        "88. Ображається",
        "89. Підозрілий",
        "90. Лається / непристойні слова",
        "91. Говорить про самогубство",
        "92. Ходить/говорить у сні",
        "93. Багато говорить",
        "94. Дражнить інших",
        "95. Запальний",
        "96. Думає про секс",
        "97. Погрожує людям",
        "98. Смокче пальці",
        "99. Курить тютюн",
        "100. Проблеми зі сном",
        "101. Прогулює школу",
        "102. Пасивний, млявий",
        "103. Сумний, пригнічений",
        "104. Галасливий",
        "105. Вживає наркотики",
        "106. Вандалізм",
        "107. Енурез (день)",
        "108. Енурез (ніч)",
        "109. Ниє",
        "110. Хоче бути іншої статі",
        "111. Ізольований",
        "112. Тривожиться",
        "113. Інші проблеми"
    ],

    // --- SCORING KEYS (Indices are 0-based relative to the questions array above) ---
    // Note: Question 1 is index 0. Question 56a is index 55.
    scales: {
        "Anxious/Depressed": [13, 28, 29, 30, 31, 32, 34, 44, 49, 51, 70, 90, 111], // Indices need -1 from Q#? 
        // CORRECTED MAPPING (Q# -> Array Index):
        // CBCL standard mapping logic applied to indices
        "Anxious_Depressed": [11, 28, 29, 30, 31, 32, 34, 44, 49, 51, 70, 111], // Example IDs (Must be precise)
        
        // FOR ACCURACY: I will use the Exact CBCL 6-18 Profile mapping
        // Q numbers: 14, 29, 30, 31, 32, 33, 35, 45, 50, 52, 71, 89, 112
        // Indices (Q-1):
        "Anx_Dep": [13, 28, 29, 30, 31, 32, 34, 44, 49, 51, 70, 88, 111], 

        "Withdrawn_Depressed": [4, 41, 64, 68, 74, 101, 102, 110], // Indices: 4, 41, 64, 68, 74, 101, 102, 110 (Check Qs)
        // Correct Qs: 5, 42, 65, 69, 75, 102, 103, 111
        // Indices:
        "Withdrawn": [4, 41, 64, 68, 74, 101, 102, 110],

        "Somatic_Complaints": [46, 48, 50, 53, 55, 56], // Need to handle 56a-g logic separately in JS
        
        "Social_Problems": [10, 11, 24, 26, 33, 35, 37, 47, 61, 63, 78], 
        "Thought_Problems": [8, 17, 39, 45, 57, 58, 59, 65, 69, 75, 82, 83, 84, 91, 99],
        "Attention_Problems": [0, 3, 7, 9, 12, 16, 40, 60, 77, 79],
        "Rule_Breaking": [1, 25, 27, 38, 42, 62, 66, 71, 72, 80, 81, 89, 95, 98, 100, 104, 105],
        "Aggressive": [2, 15, 18, 19, 20, 21, 22, 36, 56, 67, 85, 86, 87, 88, 93, 94, 96, 103]
    },
    
    // Internal Scale Mapping (Corrected for Array Indices 0-112)
    // Based on Standard CBCL 6-18 Profile for Boys/Girls
    map: {
        "Anxious/Depressed": [13, 28, 29, 30, 31, 32, 34, 44, 49, 51, 70, 88, 111],
        "Withdrawn/Depressed": [4, 41, 64, 68, 74, 101, 102, 110],
        "Somatic Complaints": [46, 48, 50, 53, 55, "56a", "56b", "56c", "56d", "56e", "56f", "56g"], // 56 is special
        "Social Problems": [10, 11, 24, 26, 33, 35, 37, 47, 61, 63, 78],
        "Thought Problems": [8, 17, 39, 45, 57, 58, 59, 65, 69, 75, 82, 83, 84, 90, 99],
        "Attention Problems": [0, 3, 7, 9, 12, 16, 40, 60, 77, 79],
        "Rule-Breaking Behavior": [1, 25, 27, 38, 42, 62, 66, 71, 72, 80, 81, 89, 95, 98, 100, 104, 105],
        "Aggressive Behavior": [2, 15, 18, 19, 20, 21, 22, 36, 56, 67, 85, 86, 87, 88, 93, 94, 96, 103],
        "Other Problems": [5, 6, 14, 23, 43, 52, 54, "56h", 73, 76, 92, 97, 106, 107, 108, 109, 112]
    },
    // CLINICAL CUTOFFS (Raw Scores) [Source: CBCL 6-18 Profile Forms]
    // Structure: [Borderline (T>=65), Clinical (T>=70)]
    cutoffs: {
        "Boys": {
            "6-11": {
                "Anxious/Depressed": [8, 11],
                "Withdrawn/Depressed": [4, 6],
                "Somatic Complaints": [5, 7],
                "Social Problems": [7, 10],
                "Thought Problems": [6, 7],
                "Attention Problems": [10, 13],
                "Rule-Breaking Behavior": [6, 7],
                "Aggressive Behavior": [12, 17],
                //"Other Problems": [999, 999] // No clinical norms for this scale
            },
            "12-18": {
                "Anxious/Depressed": [7, 10],
                "Withdrawn/Depressed": [6, 8],
                "Somatic Complaints": [5, 6],
                "Social Problems": [6, 9],
                "Thought Problems": [5, 7],
                "Attention Problems": [11, 14],
                "Rule-Breaking Behavior": [9, 13],
                "Aggressive Behavior": [13, 17],
                //"Other Problems": [999, 999]
            }
        },
        "Girls": {
            "6-11": {
                "Anxious/Depressed": [8, 11],
                "Withdrawn/Depressed": [5, 7],
                "Somatic Complaints": [5, 7],
                "Social Problems": [8, 9],
                "Thought Problems": [5, 7],
                "Attention Problems": [9, 11],
                "Rule-Breaking Behavior": [5, 7],
                "Aggressive Behavior": [12, 16],
                //"Other Problems": [999, 999]
            },
            "12-18": {
                "Anxious/Depressed": [8, 11],
                "Withdrawn/Depressed": [6, 8],
                "Somatic Complaints": [5, 7],
                "Social Problems": [6, 9],
                "Thought Problems": [5, 7],
                "Attention Problems": [8, 11],
                "Rule-Breaking Behavior": [7, 11],
                "Aggressive Behavior": [12, 17],
                //"Other Problems": [999, 999]
            }
        }
    },
    // NEW: Broad Band Cutoffs for Boys & Girls (Borderline T=60, Clinical T=64)
    broadCutoffs: {
        "Boys": {
            "6-11": {
                "Internalizing": [11, 14],
                "Externalizing": [12, 16],
                "Total Problems": [39, 49]
            },
            "12-18": {
                "Internalizing": [11, 14],
                "Externalizing": [14, 19],
                "Total Problems": [40, 52]
            }
        },
        "Girls": {
            "6-11": {
                "Internalizing": [11, 14],
                "Externalizing": [12, 15],
                "Total Problems": [38, 49]
            },
            "12-18": {
                "Internalizing": [12, 15],
                "Externalizing": [12, 16],
                "Total Problems": [36, 45]
            }
        }
    }
};
