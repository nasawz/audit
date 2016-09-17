/**
 * create by nasa.wang
 */
import React from 'react'
// import ReactDOM from 'react-dom'
import Router, { Link, Route } from 'react-rainie-router'

function Home({url, title}) {
    return (
        <section className="home">
            <h2>Welcome to my {title}</h2>
            <p>current link: {url}</p>
            <Link href="/account/123">go account</Link>
        </section>
    )
}
function Account({url, matches, name}) {
    return (
        <section className="account">
            <h2>Account: {matches.id}</h2>
            <p>my name is : {name}</p>
            <pre>current link: {url}</pre>
            <Link href="/">go homepage</Link>
        </section>
    )
}

function createRoutes() {
    return (
        <Router>
            <Home path="/" title="homepage" default />
            <Account path="/account/:id?" name="rainie" />
        </Router>
    )
}

module.exports = createRoutes
