import food001 from '../../images/food001.jpg';

const initialState ={ 
    orderList: [],
    menuList: [
        {
            name: 'Food 001',
            image: food001,
            price: 100
        },
        {
            name: 'Food 002',
            image: food001,
            price: 200
        },
        {
            name: 'Food 003',
            image: food001,
            price: 300
        },
        {
            name: 'Food 004',
            image: food001,
            price: 400
        },
        {
            name: 'Food 004',
            image: food001,
            price: 400
        },{
            name: 'Food 004',
            image: food001,
            price: 400
        }
    ]
}

const orderReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case 'ADD_TO_ORDER_LIST': {
            // js logic inside return
            return state + action.payload
        }
        default : {
            return state
        }
    }
}

export default orderReducer;