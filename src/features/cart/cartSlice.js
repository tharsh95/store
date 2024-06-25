// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     items: {}, // id: { product details, quantity }
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const product = action.payload;
//             if (state.items[product.id]) {
//                 state.items[product.id].quantity += 1;
//             } else {
//                 state.items[product.id] = { ...product, quantity: 1 };
//             }
//         },
//         removeFromCart(state, action) {
//             const productId = action.payload;
//             delete state.items[productId];
//         },
//         updateQuantity(state, action) {
//             const { productId, quantity } = action.payload;
//             if (state.items[productId]) {
//                 state.items[productId].quantity = quantity;
//             }
//         },
//     },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    items: {}, // id: { product details, quantity }
    status: 'idle', // status to track the fetch state
    error: null,
};

// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'cart/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
);

// Create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if (state.items[product.id]) {
                state.items[product.id].quantity += 1;
            } else {
                state.items[product.id] = { ...product, quantity: 1 };
            }
        },
        removeFromCart(state, action) {
            const product = action.payload;
            state.items[product.id].quantity -= 1;
            if(state.items[product.id].quantity===0){
            delete state.items[product.id];
            }

        },
        updateQuantity(state, action) {
            const { productId, quantity } = action.payload;
            if (state.items[productId]) {
                state.items[productId].quantity = quantity;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add products to the items state
                action.payload.forEach(product => {
                    state.items[product.id] = { ...product, quantity: 1 };
                });
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
