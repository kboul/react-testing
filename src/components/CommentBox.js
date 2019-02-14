import React, { Component } from 'react'

class CommentBox extends Component {
    state = {
        comment: ''
    }

    handleTextareaChange = e => {
        const comment = e.target.value
        this.setState({ comment })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div className="col-md-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="addAComment">
                            Add a comment
                    </label>
                        <textarea
                            className="form-control"
                            value={this.state.comment}
                            onChange={e => this.handleTextareaChange(e)}>
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit comment
                </button>
                </form>
            </div>
        )
    }
}

export default CommentBox