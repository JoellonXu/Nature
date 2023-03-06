import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: string,
}

const initialState: CounterState = {
    value: '',
}

// 创建一个 Slice
export const counterSlice = createSlice({
    name: 'token',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // 定义一个加的方法
        setToken: (state, {payload})=>{
            state.value = payload.value
        },
    }
})
// 导出加减的方法
export const { setToken } = counterSlice.actions

// 默认导出
export default counterSlice.reducer