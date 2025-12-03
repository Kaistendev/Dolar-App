import React from 'react'

const Footer = () => {
  return (
    <footer className="glass-nav py-4 mt-auto">
      <div className="container">
        <p className="text-center mb-0 text-muted-custom">
          Dolar App &copy; {new Date().getFullYear()} | Hecho con 💜
        </p>
      </div>
    </footer>
  )
}

export default Footer
