import  React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        characters: [],
        errMsg: "",
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserCharacters()
                setUserState(prevUserState => ({
                    ...prevUserState, 
                    user,
                    token
                }))
            })
            .then()
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            characters: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

// reset authErr
function resetAuthErr(){
    setUserState(prevState => ({
        ...prevState,
        errMsg: ""
    }))
}

//get all characters function
function getUserCharacters(){
    userAxios.get("/api/character/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                characters: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
}

//Add character function
function addCharacter(newCharacter){
    console.log(newCharacter)
    userAxios.post("/api/character", newCharacter)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                characters: [...prevState.characters, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
}

//Delete character function
function deleteCharacter(characterId){
    userAxios.delete(`/api/character/${characterId}`)
        .then((res) => {
            setUserState((prevState) => ({
                ...prevState, 
                characters: prevState.characters.filter((character) => (character._id !== characterId))
            }))
            .catch ((err) => console.log(err))
        }) 
}   

//Edit character function
function editCharacter(updates, characterId){
    userAxios
        .put(`/api/character/${characterId}`, updates)
        .then((res) => {
        setUserState((prevState) => ({
            ...prevState,
            characters: prevState.characters.map((character) =>
            character._id === characterId ? res.data : character
            ),
        }));
        })
        .catch((err) => console.log(err));
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addCharacter,
                getUserCharacters,
                deleteCharacter,
                editCharacter,
                resetAuthErr,
                userState,
            }}>
            { props.children }
        </UserContext.Provider>
    )
}