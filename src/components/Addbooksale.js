import React, {useState} from 'react'

const Addbooksale = props => {
    const [quan, setquan] = useState(0)
    const additem = () => {
        if(quan>props.book.quantity){
            alert("Not Availaible Books");
        } else {
            props.book.quantity-=quan;
            setquan(0);
            props.additem(quan, props.book.ISBN);
        }
    }
  return (
    <>
    <div class="d-flex justify-content-evenly">
        <nav>
            <div>{props.book.name}</div>
            <div>{props.book.author}</div>
            <div>{props.book.quantity}</div>
        </nav>
        <div>
            <button onClick={()=>{setquan(quan-1)}}>-</button>
            {quan}
            <button onClick={()=>{setquan(quan+1)}}>+</button>
        </div>
        <button className="btn btn-primary" onClick={additem}>Add</button>
    </div>
    </>
  )
}


export default Addbooksale;