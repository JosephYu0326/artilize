// const [fileData, setFileData] = useState()

// const fileChangeHandler = (e) => {
//   setFileData(e.target.files[0])
//   setFileData(URL.createObjectURL(e.target.files[0]))
// }

// const onSubmitHandler = (e) => {
//   e.preventDefault()

//   const data = new FormData()
//   data.append('image', fileData)

//   fetch('', {
//     method: 'POST',
//     body: data,
//   })
//     .then((result) => {
//       console.log('file sent successful')
//     })
//     .catch((err) => {
//       console.log('err.message', err.message)
//     })
// }
// ;<form onSubmit={onSubmitHandler}>
//   <input type="file" onChange={fileChangeHandler} style={{ display: 'none' }} />
//   <img src={fileData} />
//   <button type="submit">submit file to backend</button>
// </form>

// img,
// button {
//     width:200px;
//     height:200px;
//     border-radius:50%;
//     cursor:pointer;
// }
