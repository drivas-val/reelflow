import React, { Component } from 'react'
import {Header} from '../components/Header'
import {RMPBody} from '../components/RMPBody'
import {genres} from '../components/genres'
import Select from 'react-select'

export let RMPPage = () => {
    return(
        <div className="bodyStyle">
            <Header title="Reel Flow"/>
            <RMPBody/>
            
        </div>
    )
}