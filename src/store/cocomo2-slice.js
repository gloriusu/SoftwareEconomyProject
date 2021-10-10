import {createSlice} from "@reduxjs/toolkit";


const DATASET = [
    [
        ["Кваліфікація персоналу", [2.12, 1.62, 1.26, 1, 0.83, 0.63, 0.50]],
        ["Досвід персоналу", [1.59, 1.33, 1.22, 1, 0.87, 0.74, 0.62]],
        ["Складність і надійність продукту", [0.49, 0.6, 0.83, 1, 1.33, 1.91, 2.72]],
        ["Розробка для повторного використання", ["n/a", "n/a", 0.95, 1, 1.07, 1.15, 1.24]],
        ["Складність платформи розробки", ["n/a", "n/a", 0.87, 1, 1.29, 1.81, 2.61]],
        ["Обладнання", [1.43, 1.30, 1.10, 1, 0.87, 0.73, 0.62]],
        ["Необхідний для виконання графік робіт", ["n/a", 1.43, 1.14, 1, 1, "n/a", "n/a"]],
    ],
    [
        ["Можливості аналітика", [1.42, 1.29, 1, 0.85, 0.71, "n/a"]],
        ["Досвід розробки додатків", [1.22, 1.10, 1, 0.88, 0.81, "n/a"]],
        ["Можливості програміста", [1.34, 1.15, 1, 0.88, 0.76, "n/a"]],
        ["Тривалість роботи персоналу", [1.29, 1.12, 1, 0.90, 0.81, "n/a"]],
        ["Досвід роботи з платформою", [1.19, 1.09, 1, 0.91, 0.85, "n/a"]],
        ["Досвід використання мови програмування і інструментальних засобів",
            [1.20, 1.09, 1, 0.91, 0.84, "n/a"]],
        ["Необхідна надійність програми", [0.84, 0.92, 1, 1.10, 1.26, "n/a"]],
        ["Розмір бази даних", ["n/a", 0.23, 1, 1.14, 1.28, "n/a"]],
        ["Складність програми", [0.73, 0.87, 1, 1.17, 1.34, 1.74]],
        ["Необхідна можливість багаторазового використання",
            ["n/a", 0.95, 1, 1.07, 1.15, 1.24]],
        ["Відповідність документації потребам життєвого циклу",
            [0.81, 0.91, 1, 1.11, 1.23, "n/a"]],
        ["Обмеження часу виконання", ["n/a", "n/a", 1, 1.11, 1.29, 1.63]],
        ["Обмеження пам'яті", ["n/a", "n/a", 1, 1.05, 1.17, 1.46]],
        ["Змінність платформи", ["n/a", 0.87, 1, 1.15, 1.30, "n/a"]],
        ["Використання інструментальних програмних засобів",
            [1.17, 1.09, 1, 0.9, 0.78, "n/a"]],
        ["Багатоабонентська (віддалена) розробка", [1.22, 1.09, 1, 0.93, 0.86, 0.80]],
        ["Необхідний виконання графіка робіт", [1.43, 1.14, 1, 1, 1, "n/a"]],
    ],
    [
        ["Прецедентність, наявність досвіду аналогічних розробок", [6.20, 4.96, 3.72, 2.48, 1.24, 0]],
        ["Гнучкість процесу розробки", [5.07, 4.05, 3.04, 2.03, 1.01, 0]],
        ["Архітектура і дозвіл ризиків", [7.07, 5.65, 4.24, 2.83, 1.41, 0]],
        ["Спрацьованість команди", [5.48, 4.38, 3.29, 2.19, 1.10, 0]],
        ["Зрілість процесів", [7.80, 6.24, 4.86, 3.12, 1.56, 0]],
    ],
];

const INITIAL_SF_DATA = {
    0: 6.20,
    1: 5.07,
    2: 7.07,
    3: 5.48,
    4: 7.80,
}

const INITIAL_ADVANCED_DATA = {
    0: 2.12,
    1: 1.59,
    2: 0.49,
    3: "n/a",
    4: "n/a",
    5: 1.43,
    6: "n/a"
}

const INITIAL_DETAILED_DATA = {
    0: 1.42,
    1: 1.22,
    2: 1.34,
    3: 1.29,
    4: 1.19,
    5: 1.20,
    6: 0.84,
    7: "n/a",
    8: 0.73,
    9: "n/a",
    10: 0.81,
    11: "n/a",
    12: "n/a",
    13: "n/a",
    14: 1.17,
    15: 1.22,
    16: 1.43,

}

const cocomo2Slice = createSlice({
    name: 'cocomo2',
    initialState: {
        full: DATASET,
        selectedSF: INITIAL_SF_DATA,
        advancedData: INITIAL_ADVANCED_DATA,
        detailedData: INITIAL_DETAILED_DATA,
    },
    reducers: {
        addSelectedSFOption(state, action) {
            state.selectedSF[action.payload.id] = action.payload.select;
        },
        addSelectedAdvancedOption(state, action) {
            state.advancedData[action.payload.id] = action.payload.select;
        },
        addSelectedDetailedOption(state, action) {
            state.detailedData[action.payload.id] = action.payload.select;
        }
    }
});

export const cocomo2Actions = cocomo2Slice.actions;

export default cocomo2Slice;