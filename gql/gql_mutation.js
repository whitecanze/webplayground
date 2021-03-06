import gql from 'graphql-tag'

export const CREATE_PRODUCT = gql`
    mutation CREATE_PRODUCT($description: String!, $imageUrl: String!, $price: Float!) {
        createProduct(description: $description, imageUrl: $imageUrl, price:$price) 
        {
            id
            description
            price
            imageUrl
        }
    }
`
export const MAKE_BLACK_LIST = gql`
    mutation MAKE_BLACK_LIST($jwt: String!){
        makeBlackList(jwt:$jwt){
            jwt
            createdAt
        }
    }
`
export const CALCULATE_ABV = gql`
    mutation CALCULATE_ABV($ssg: Float!,$fsh: Float!){
        ABV(
            ssg:$ssg
            fsg:$fsh
        ){
            ssg
            fsg
            standard_formula
            alternate_formula
            abw_formula
            standard_abv
            standard_abw
            alternate_abv
            alternate_abw
        }
    }
`

export const CREATE_TODOLIST = gql`
    mutation CREATE_TODOLIST($text: String!){
        createTodoList(text:$text){
            id
            text
            user
            completed
            createdAt
        }
    }
`
export const UPDATE_TODOLIST = gql`
    mutation UPDATE_TODOLIST($id: ID!){
        updateTodoList(id:$id){
            message
        }
    }
`
export const DELETE_TODOLIST = gql`
    mutation DELETE_TODOLIST($id: ID!){
        deleteTodoList(id:$id){
            id
            text
            user
            completed
            createdAt
        }
    }
`

export const ADD_TO_CART = gql`
    mutation ADD_TO_CART(
		$id: ID!
		) {
        addToCart(
			id: $id,
		){
            id
            product{
                id
                description
                imageUrl
                price
            }
            quantity
        }
    }
`

export const REQUEST_RESET_PASSWORD = gql`
    mutation REQUEST_RESET_PASSWORD($email:String!){
        requestResetPassword(email:$email){
            message
        }
    }
`

export const CHANGE_PASSWORD = gql`
    mutation CHANGE_PASSWORD($email: String!,$old_password: String!,$new_password: String! ){
        changePassword(
            email: $email
            old_password: $old_password
            new_password: $new_password
        ){
            message
        }
    }
`

export const RESET_PASSWORD = gql`
    mutation RESET_PASSWORD($password:String!,$token:String!){
        resetPassword(
            password:$password
            token:$token
        ){
            message
        }
    }
`

export const LOG_IN = gql`
    mutation LOG_IN($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                id
                name
                email
                products {
                    id
                    description
                    price
                    imageUrl
                }
                carts {
                    id
                    product {
                        id
                        description
                        price
                        imageUrl
                    }
                quantity
                }
                orders{
                    id
                    items{
                    product{
                        description
                        price
                        imageUrl
                    }
                    quantity
                    }
                }
                cards{
                    id
                    cardInfo{
                        id
                        expiration_month
                        expiration_year
                        brand
                        last_digits
                    }
                }
            }
            jwt
        }
    }
`

export const SIGN_UP = gql`
    mutation SIGN_UP($name: String!,$email:String!,$password:String!){
        signup(
            name:$name
            email:$email
            password:$password
        ){
            id
            name
            email
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation UPDATE_PRODUCT(
		$id: ID!,
		$description: String, 
		$imageUrl: String, 
		$price: Float
		) {
        updateProduct(
			id: $id,
			description: $description, 
			imageUrl: $imageUrl, 
			price:$price
		){
            id
            description
            price
            imageUrl
        }
    }
`

export const DELETE_CART = gql`
    mutation DELETE_CART(
		$id: ID!,
		) {
        deleteCart(
			id: $id,
		){
            id
        }
    }
`

export const DELETE_PRODUCT = gql`
    mutation DELETE_PRODUCT(
		$id: ID!
		) {
        deleteProduct(
			id: $id
		){
            id
            description
            price
            imageUrl
        }
    }
`

export const CREATE_ORDER = gql`
    mutation CREATE_ORDER($amount: Float!, $cardId: String, $token: String, $return_uri: String){
        createOrder(
            amount: $amount
            cardId: $cardId
            token: $token
            return_uri: $return_uri
        ){
            id
            items{
                id
                product{
                    description
                    price
                }
                quantity
            }
            authorize_uri
        }
    }
`

const gql_mutation = () => {
    return (
        <div>
            
        </div>
    )
}

export default gql_mutation
