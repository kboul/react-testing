import React, { Component } from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'

class CommentList extends Component {
    renderComments = () => {
        return this.props.comments.map((comment, key) => {
            return (
                <li
                    className="list-group-item"
                    key={key}>
                    {comment}
                </li>
            )
        })
    }

    render() {
        return (
            <div className="mt-2 col-md-3">
                <ul className="list-group">
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: array.isRequired
}

const mapStateToProps = state => ({
    comments: state.comments
})

export default connect(mapStateToProps)(CommentList)