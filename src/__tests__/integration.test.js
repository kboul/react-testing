import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'
import http from 'services/httpService'

beforeEach(() => {
    moxios.install(http)
    moxios.stubRequest('/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    })
})

afterEach(() => {
    moxios.uninstall(http)
})

it('can fetch a list of comments and display them', done => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    wrapped.find('.fetch-comments').simulate('click')

    moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
            status: 200,
            response: [
                { name: 'Fetched #1' },
                { name: 'Fetched #2' }
            ]
        }).then(() => {
            wrapped.update()
            // console.log(wrapped.html())
            expect(wrapped.find('li').length).toEqual(2)
            done()
            wrapped.unmount()
        })
    })
})