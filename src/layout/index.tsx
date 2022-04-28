import React from 'react'

interface ILayout {
    children: React.ReactNode;
  }

const Layout = ({ children }: ILayout) => {
  return (
    <div style={{width:"100%", position:'relative'}}>
        <div style={{backgroundColor:'green', height: '80px'}}>This is Header</div>
        <div style={{ 
            width:"100%",height: '600px', paddingBottom:'20px', minHeight:'100%', backgroundColor:'grey' }}>This is Body/Loading children..
            {children}
        </div>
        <div style={{backgroundColor:'red'}}>This is Footer</div>

    </div>
  )
}

export default Layout