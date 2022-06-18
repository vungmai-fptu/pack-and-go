import React, { useEffect, useState } from 'react'
import styles from './comment.module.css'


const CommentBox = (username, image, tripId, repList) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/trip', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.trips)
            })
    }, [])
    const makeComment = (text, tripId) => {
        fetch('/trip', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                tripId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id === result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div >
            {
                data.map(item => {
                    return (
                        <div className="card CommentBox-card" key={item._id}>
                        
                        {
                            item.comments.map(record => {
                                return (
                                    <h6 key={record._id}><span style={{ fontWeight: "500" }}>{record.postedBy.name}</span> {record.text}</h6>
                                )
                            })
                        }
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            makeComment(e.target[0].value, item._id)
                        }}>
                            <input type="text" placeholder="add a comment" />
                        </form>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default CommentBox