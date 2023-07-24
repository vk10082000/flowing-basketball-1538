import React from 'react'
import { Link } from 'react-router-dom'
import {IoChevronBack} from "react-icons/io5"
export default function Header({ back }) {
    return (
        <header className='header'>
            <div className='width'>
                { back && (
                    <Link to="/crypto">
                        <IoChevronBack style={{ width:"30px", height:"30px", marginTop:"-12px"}} />
                       
                    </ Link>)}
                <h1>
                    <Link to="/crypto">Coiner!</Link>
                </h1>
            </div>
        </header>
    )
}

