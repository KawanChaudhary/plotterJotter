import React from 'react'

const Welcome = () => {

    return (
        <div>
            {/* <!-- Bootstrap Static Header --> */}
            <div style={{ background: "url(https://media.istockphoto.com/id/1180931229/photo/black-dark-and-gray-abstract-cement-wall-and-studio-room-interior-texture-for-display.jpg?s=612x612&w=0&k=20&c=PJnoQhGX2UQSzSlHIaMbmsZplaK3eLH5vaBly5Ik7yM=)", }} className=" jumbotron bg-cover text-white">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-4 font-weight-bold">Hello Super Human</h1>
                    <div style={{ borderTop: "2px solid #fff ",  marginRight: 200, marginLeft: 200 }}></div>
                    {/* <p className="font-italic mb-0">Hello </p> */}
                    <p className="font-italic" style={{fontSize: "25px" , margin:20 }}>Plot Your Thoughts</p>
                    {/* <a role="button" className="btn btn-primary px-5">See All Features</a> */}
                </div>
            </div>

        </div>
    )
}

export default Welcome
