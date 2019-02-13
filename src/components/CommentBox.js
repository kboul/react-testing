import React, { Component } from 'react'

class CommentBox extends Component {
    state = {}
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="addAComment">
                        Add a comment
                    </label>
                    <textarea
                        className="form-control"
                        rows="3">
                    </textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary">
                    Submit comment
                </button>
            </form>
        )
    }
}

export default CommentBox