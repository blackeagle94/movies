import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MoviesPage extends Component {
    render() {
        return (
            <div>
                <h2>Movies PAge</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
