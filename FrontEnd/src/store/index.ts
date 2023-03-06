import {configureStore} from "@reduxjs/toolkit"

import counterSlice from "./features/counterSlice"

const store = configureStore({
    // 合并多个slice
    reducer: {
        counter: counterSlice
    }
})

export default store