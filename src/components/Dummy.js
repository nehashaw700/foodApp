import React from "react";

const Dummy = React.memo(({fn}) => {
    return (
    console.log("dummy rendered")
    )
})

// const Dummy = () => {
//     return (
//     console.log("dummy rendered")
//     )
// }

export default Dummy;