import {createSlice} from "@reduxjs/toolkit";

const TABLE_DATASET = [
    [[0, 1], [0, 2], [0, 3]],
    [[0, 4], [0, 5], [0, 6]],
    [[0, 7], [0, 8], [0, 9]],
    [[0, 10], [0, 11], [0, 12]],
    [[0, 13], [0, 14], [0, 15]],
];

const INPUT_DATASET = {
    1: [0, 3],
    2: [0, 4],
    3: [0, 6],
    4: [0, 4],
    5: [0, 5],
    6: [0, 7],
    7: [0, 3],
    8: [0, 4],
    9: [0, 6],
    10: [0, 7],
    11: [0, 10],
    12: [0, 15],
    13: [0, 5],
    14: [0, 7],
    15: [0, 10],
}


const ENVIRONMENT_FACTORS = [
    ["Обмін даними", "Розподілені функції", "Продуктивніcть", "Інтенсивно використовувана конфігурація",
        "Інтенсивність транзакцій", "Діалоговий ввід даних", "Ефективність для кінцевого користувача",
        "Оперативне обновлення", "Складність обробки даних", "Повторне використання", "Легкість установлення",
        "Простота використання", "Поширюваність", "Легкіcть зміни"],
    [0, 1, 2, 3, 4, 5],
];

const COEFFICIENTS = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
}


const functionalPointsSlice = createSlice({
    name: 'funcPoints',
    initialState: {
        tableDataset: TABLE_DATASET,
        inputDataset: INPUT_DATASET,
        environmentFactors: ENVIRONMENT_FACTORS,
        coefficients: COEFFICIENTS,
    },
    reducers: {
        changeInputValue(state, action) {
            state.inputDataset[action.payload.id][0] = action.payload.value;
        },
        changeCoefficient(state, action) {
            state.coefficients[action.payload.id] = action.payload.select;
        }
    }
});

export const functionalPointsActions = functionalPointsSlice.actions;

export default functionalPointsSlice;