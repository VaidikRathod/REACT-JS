function Logic(vaidik) {
 
    return (
      <>
      <div>
      {vaidik.data.map((e)=>{
        return <div>
          <img src={e.img} alt="" width="200px" />
          <p>{e.title}</p>
          <p>{e.price}</p>
        </div>
      })}
      </div>
      </>
    )
  }

export default Logic