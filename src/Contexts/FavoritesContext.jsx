import {useState, createContext, useEffect} from 'react'


export const FavoritesContext = createContext()


export default function FavoritesContextProvider(props){
    
    const [favorites, setFavorites] = useState([])

    // Added state for total and cartCounter
    const [cartCounter, setCartCounter] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)    
    
    useEffect(
        ()=>{
            console.log('context loaded')
            
            const storedFavorites = localStorage.getItem('favoritesList')
            if (storedFavorites){
                
                setFavorites(JSON.parse(storedFavorites))
                 console.log(JSON.parse(storedFavorites))



                // *** Added a loop to update cart counter and add total ***
                for(let i = 0; i < JSON.parse(storedFavorites).length; i++){
                    setCartCounter(prev => prev + 1)
                    setCartTotal(prev => prev + JSON.parse(storedFavorites)[i].price)
                    console.log('count')
                }
                
            }
            
        }, [] //runs once when context loads
    )

    const addCharacter = (product) =>{
        console.log('add', product)
        let newFavorites = [...favorites, product]
        setFavorites(newFavorites)



        // *** Added setCartCounter so +1 added every click and update total 
        setCartCounter(prev => prev + 1)
        setCartTotal(prev => prev + product.price)




        localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
    }

    
    const removeCharacter = (product) =>{
        console.log('remove', product)
        let newFavorites = favorites.filter(item=>item.id !== product.id)
        setFavorites(newFavorites)



        // *** Added setCartCounter to -1 subtracted every click and update total
        setCartCounter(prev => prev - 1)
        console.log(product.price)
        setCartTotal(prev => prev - product.price)




        localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
    }

    return (
        <FavoritesContext.Provider value={{
            favorites, 
            addCharacter, 
            removeCharacter, 
            cartCounter, 
            setCartCounter,
            cartTotal, 
            setCartTotal,
        }} >
            {props.children}
        </FavoritesContext.Provider>
    )
}