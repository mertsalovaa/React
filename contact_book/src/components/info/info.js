import React from 'react';

const Info = ({ data }) => {
    const styles = {
        backgroundColor: 'white',
        margin: '10px'
    }
    return (
        <div className="flex-column">
            <input className="form-control" style={styles} disabled value={data.name} />
            <input className="form-control" style={styles} disabled value={data.surname} />
            <input className="form-control" style={styles} disabled value={data.phone} />
            <input className="form-control" style={styles} disabled value={data.email}/>
        </div>
    )
}
export default Info;