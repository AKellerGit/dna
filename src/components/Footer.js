import React from 'react'

class Footer extends React.Component {
    render() {
      return <footer class="footer">
      <div class="content has-text-centered">
        <p>Hosted with <a href="https://www.github.com">Github</a>.</p>
        <p>TLS certs pending through <a href="https://letsencrypt.org">LetsEncrypt</a>.</p>
        <p>Maintained by <a href="https://www.github.com/isomorphic-not">Isomorphic-not</a>.</p>
      </div>
    </footer>
    }
  }export default Footer