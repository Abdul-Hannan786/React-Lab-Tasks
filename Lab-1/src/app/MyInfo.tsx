"use client"

const MyInfo = () => {
  return (
    <table style={{
        backgroundColor: "aliceblue",
        border: "1px solid black",
        fontFamily: "sans-serif"
    }}>
        <thead>
            <tr>
                <th style={{border: "1px solid black", padding: "10px"}}>Name</th>
                <th style={{border: "1px solid black", padding: "10px"}}>Father Name</th>
                <th style={{border: "1px solid black", padding: "10px"}}>Roll No</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{border: "1px solid black", padding: "10px"}}>Abdul Hannan</td>
                <td style={{border: "1px solid black", padding: "10px"}}>Muhammad Saleem</td>
                <td style={{border: "1px solid black", padding: "10px"}}>188528</td>
            </tr>
            <tr>
                <td style={{border: "1px solid black", padding: "10px"}}>Haider Ali</td>
                <td style={{border: "1px solid black", padding: "10px"}}>Muhammad Shah Alam</td>
                <td style={{border: "1px solid black", padding: "10px"}}>188529</td>
            </tr>
        </tbody>
    </table>
  )
}

export default MyInfo