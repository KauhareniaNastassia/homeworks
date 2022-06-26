import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "../../p1-main/m1-ui/u1-app/App.module.css"
import css from "./Affairs.module.css"

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType,
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    if (filter === 'high') {
        return affairs = affairs.filter(a => a.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs = affairs.filter(a => a.priority === 'middle')
    }
    if (filter === 'low') {
        return affairs = affairs.filter(a => a.priority === 'low')
    }
    else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter ( a=> a._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div className={s.homework_title} >
                Homework 2
            </div>

            {/*should work (должно работать)*/}
            <div className={css.block}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>


            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeAffairs/>
            <hr/>*/}
        </div>
    )
}

export default HW2
