import { useState, useEffect } from 'react'

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])

    // Avoid infinite loop
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals')

            if (!response.ok) {
                // Do something
            }

            const meals = await response.json()
            setLoadedMeals(meals)
        }

        fetchMeals()
    }, [])

    return (
        <ul id="meals">
            {loadedMeals && loadedMeals.map((meal) => (
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    )
}